FROM python:3.13.1-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY . /app/

ARG SEND_PASSWORD
ENV SEND_PASSWORD=$SEND_PASSWORD

ARG SMTP_SERVER
ENV SMTP_SERVER=$SMTP_SERVER

ARG SMTP_PORT
ENV SMTP_PORT=$SMTP_PORT

ARG SMTP_USERNAME
ENV SMTP_USERNAME=$SMTP_USERNAME

ARG SMTP_PASSWORD
ENV SMTP_PASSWORD=$SMTP_PASSWORD

ARG SMTP_SECURE
ENV SMTP_SECURE=$SMTP_SECURE

ARG IMGUR_CLIENT_ID
ENV IMGUR_CLIENT_ID=$IMGUR_CLIENT_ID

ARG APP_PORT
ENV APP_PORT=$APP_PORT

RUN pip install --no-cache-dir uv

RUN uv pip install --system --no-cache-dir -r requirements.txt

# Create a non-root user for security
RUN adduser --disabled-password --gecos '' appuser && \
    chown -R appuser:appuser /app

USER appuser

EXPOSE 3001

# Use Gunicorn for production
CMD ["gunicorn", "--bind", "0.0.0.0:3001", "--workers", "4", "--timeout", "120", "app:app"]
