from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import os
import smtplib
from email.mime.text import MIMEText
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

SEND_PASSWORD = os.getenv('SEND_PASSWORD')

SMTP_SERVER = os.getenv('SMTP_SERVER')
SMTP_PORT = int(os.getenv('SMTP_PORT'))
SMTP_USERNAME = os.getenv('SMTP_USERNAME')
SMTP_PASSWORD = os.getenv('SMTP_PASSWORD')
SMTP_SECURE = os.getenv('SMTP_SECURE') == 'true'

APP_PORT = int(os.getenv('APP_PORT') or 3001)

IMGUR_CLIENT_ID = os.getenv('IMGUR_CLIENT_ID')

# Upload CSV and return email list


@app.route('/upload-csv', methods=['POST'])
def upload_csv():
    if 'csv' not in request.files:
        return jsonify({'error': 'No CSV file uploaded'}), 400

    file = request.files['csv']
    emails = []

    file.stream.seek(0)
    decoded = file.stream.read().decode('utf-8').splitlines()
    reader = csv.reader(decoded)
    
    # Skip the header row
    next(reader, None)

    for row in reader:
        if len(row) >= 10:  # Make sure the row has at least 10 columns
            email = row[9].strip()
            if email and email.lower() != "(not allowed)":
                emails.append(email)

    return jsonify({'emails': emails})


@app.route('/send-emails', methods=['POST'])
def send_emails():
    data = request.get_json()

    if not data:
        return jsonify({"success": False, "error": "Invalid data"}), 400

    password = data.get('password')
    author = data.get('author', "DCU Fotosoc")
    subject = data.get('subject', "DCU Fotosoc Newsletter")
    email_list = data.get('emails', [])
    newsletter_html = data.get('newsletterHtml', "")

    if password != SEND_PASSWORD:
        return jsonify({"success": False, "error": "Incorrect password"}), 403

    if not email_list:
        return jsonify({"success": False, "error": "Missing emails"}), 400
    
    if not newsletter_html:
        return jsonify({"success": False, "error": "Missing content"}), 400

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USERNAME, SMTP_PASSWORD)

        for email in email_list:
            msg = MIMEText(newsletter_html, 'html')
            msg['Subject'] = subject
            msg['From'] = author.split('-')[0].strip()
            msg['To'] = email

            server.sendmail(SMTP_USERNAME, email, msg.as_string())

        server.quit()

        return jsonify({"success": True})

    except Exception as e:
        print("Email sending failed:", str(e))
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/upload-image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image = request.files['image']

    headers = {
        'Authorization': f'Client-ID {IMGUR_CLIENT_ID}'
    }
    data = {
        'image': image.read()
    }

    response = requests.post('https://api.imgur.com/3/image',
                             headers=headers, files={'image': data['image']})

    if response.status_code != 200:
        return jsonify({'error': 'Image upload failed'}), 500

    json_response = response.json()
    return jsonify({'link': json_response['data']['link'], 'success': True})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=APP_PORT, debug=True)
