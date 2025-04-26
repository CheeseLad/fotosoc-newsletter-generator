import { useState } from "react";
import {
  MDXEditor,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  BlockTypeSelect,
  CreateLink,
  InsertImage,
  ListsToggle,
} from "@mdxeditor/editor";
import {
  headingsPlugin,
  quotePlugin,
  listsPlugin,
  thematicBreakPlugin,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

import { marked } from "marked";

async function imageUploadHandler(image) {
  const formData = new FormData();
  formData.append("image", image);

  const response = await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_IMGUR_CLIENT_ID}`,
    },
    body: formData,
  });

  const json = await response.json();

  if (!json.success) {
    throw new Error("Image upload failed");
  }

  return json.data.link;
}


function App() {
  const [markdown, setMarkdown] = useState(`
Dearly beloved,

We are gathered here today to get through this thing called "email". Electric word, "email", it means electronic letter and that's a mighty cool thing.

But I'm here to tell you, there's something else: The last events. Two events of never-ending happiness, you can always see the fun™, AGM or Connection.

So, when you call up that shrink in Albert College Park – you know the one, Dr. Sure Look, It'll Be Grand – instead of asking him how much of Fotosoc time is left, ask him how much of the fun™, baby.

'Cause in this email, things are much less fun than in the last events. In this email, you're on your own.

![](https://i.imgur.com/x09OJtw.png)

![](https://i.imgur.com/KRFTIWh.png)

[AGM TONIGHT 18:30 FTG09](https://www.instagram.com/p/DH0n1pWsoUc/?igsh=MTV5eGRnYzE4bzU2cQ==)

[CONNECTION V EXHIBITION THURSDAY 19:00 THE HIVE](https://www.instagram.com/p/DH6B1gzMqc2/?igsh=aDFlYm02eTJxejF1)

BE THERE

![](https://i.imgur.com/sVDI3Pb.gif)

`);

const [title, setTitle] = useState("AND IF THE ELEVATOR TRIES TO BRING US DOWN");
const [writtenBy, setWrittenBy] = useState("Written by Jake Farrell - Fotosoc Webmaster 2025-2026");

const handleMarkdownChange = (newMarkdown) => {
  setMarkdown(newMarkdown);
};

const generateNewsletterHTML = () => {
  const styledContent = `
    <div class="user-content" style="color: #000000; text-align: center;">
      ${marked.parse(markdown)}
    </div>
  `;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        .user-content img {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
          display: block;
          margin: 16px auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
      </style>
    </head>
    <body style="margin:0;padding:0;background-color:#1e40af;font-family:Arial,sans-serif;color:white;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(to right, #1e3a8a, #2563eb);">
        <tr>
          <td align="center" style="padding: 16px;">
            
            <!-- Header Section -->
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: white; border-radius: 8px; padding: 32px 16px 16px 16px; margin-bottom: 24px;">
              <tr>
                <td align="center" style="padding-bottom: 16px;">
                  <table cellpadding="0" cellspacing="0" border="0" style="margin: auto;">
                    <tr>
                      <td align="center" style="padding-right: 16px;">
                        <img src="https://i.imgur.com/2hiweJS.png" alt="DCU Fotosoc Logo"
                          style="width: 128px; height: 128px; display: block;">
                      </td>
                      <td align="center">
                        <h2 style="font-size: 48px; font-weight: bold; color: #000000; margin: 0;">DCU Fotosoc</h2>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <i style="font-size: 24px; color: #000000;">${title}</i>
                </td>
              </tr>
            </table>

            <!-- Weekly Recap Section -->
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: white; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <tr>
                <td style="padding: 16px; text-align: center;">
                  ${styledContent}
                </td>
              </tr>
            </table>

            <!-- Author Section -->
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: white; border-radius: 8px; margin-bottom: 24px;">
              <tr>
                <td style="padding: 16px; text-align: center;">
                  <p style="font-size: 16px; color: #000000; margin: 0 0 8px;">
                    ${writtenBy}
                  </p> 
                </td>
              </tr>
            </table>

            <!-- Socials Section -->
            <table width="600" cellpadding="0" cellspacing="0" border="0"
              style="background-color: white; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <tr>
                <td style="padding: 16px; text-align: center;">
                  <h3
                    style="font-size: 18px; font-weight: bold; color: #1e40af; margin: 0 0 16px;">Check
                    Out Our Socials!</h3>
                  <table cellpadding="0" cellspacing="0" border="0"
                    style="margin: auto;">
                    <tr>
                      <td style="padding: 8px;">
                        <a href="https://chat.whatsapp.com/KcWm0mU78nyHKMibl3Vlko"
                          target="_blank" style="text-decoration: none;">
                          <img src="https://i.imgur.com/zzymrYn.png" alt="WhatsApp"
                            style="width: 48px; height: 48px;">
                        </a>
                      </td>
                      <td style="padding: 8px;">
                        <a href="https://www.tiktok.com/@dcufotosoc"
                          target="_blank" style="text-decoration: none;">
                          <img src="https://i.imgur.com/D5mnYPb.png" alt="TikTok"
                            style="width: 48px; height: 48px;">
                        </a>
                      </td>
                      <td style="padding: 8px;">
                        <a href="https://instagram.com/dcufotosoc" target="_blank"
                          style="text-decoration: none;">
                          <img src="https://i.imgur.com/w7DUF2P.png" alt="Instagram"
                            style="width: 48px; height: 48px;">
                        </a>
                      </td>
                      <td style="padding: 8px;">
                        <a href="mailto:committee@dcufotosoc.ie" target="_blank"
                          style="text-decoration: none;">
                          <img src="https://i.imgur.com/ssNBtrm.png" alt="Email"
                            style="width: 48px; height: 48px;">
                        </a>
                      </td>
                      <td style="padding: 8px;">
                        <a href="https://dcufotosoc.ie" target="_blank"
                          style="text-decoration: none;">
                          <img src="https://i.imgur.com/XCberko.png" alt="Website"
                            style="width: 48px; height: 48px;">
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Footer Section -->
            <table width="600" cellpadding="0" cellspacing="0" border="0"
              style="background-color: white; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <tr>
                <td style="padding: 16px; text-align: center;">
                  <p style="font-size: 16px; color: #000000; margin: 0 0 24px;">
                    DCU Fotosoc © 2003 - 2025. Newsletter Generator by
                    <a href="https://www.jakefarrell.ie/" target="_blank"
                      style="color: #1e40af; text-decoration: none;">Jake
                      Farrell</a>
                  </p>
                  <i style="color: #000000;">If you would like to stop receiving
                    these emails, please contact
                    <a href="mailto:secretary@dcufotosoc.ie"
                      style="color: #1e40af; text-decoration: none;">secretary@dcufotosoc.ie</a>
                    to unsubscribe.
                  </i>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
  };

  const downloadHTML = () => {
    const htmlContent = generateNewsletterHTML();
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "newsletter.html";
    link.click();

    URL.revokeObjectURL(url);
  };

  const copyHTMLToClipboard = async () => {
    const htmlContent = generateNewsletterHTML();
    try {
      await navigator.clipboard.writeText(htmlContent);
      alert("HTML copied to clipboard! 🚀");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };


  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "50%", padding: "24px", overflowY: "scroll", backgroundColor: "#f8fafc" }}>
        <div style={{ marginBottom: "16px" }}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
          />

          <label>Written By</label>
          <input
            type="text"
            value={writtenBy}
            onChange={(e) => setWrittenBy(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
          />

          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <button
              onClick={downloadHTML}
              style={{
                flex: 1,
                backgroundColor: "#1e40af",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Download HTML
            </button>
            <button
              onClick={copyHTMLToClipboard}
              style={{
                flex: 1,
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
        
        <div className="editor-content">
          <MDXEditor
            markdown={markdown}
            onChange={handleMarkdownChange}
            plugins={[
              headingsPlugin(),
              quotePlugin(),
              listsPlugin(),
              thematicBreakPlugin(),
              linkPlugin(),
              imagePlugin({ imageUploadHandler }),
              linkDialogPlugin({
                linkAutocompleteSuggestions: [
                  "https://dcufotosoc.ie",
                  "https://www.instagram.com/dcufotosoc",
                ],
              }),
              toolbarPlugin({
                toolbarClassName: "my-classname",
                toolbarContents: () => (
                  <>
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                    <BlockTypeSelect />
                    <CreateLink />
                    <InsertImage />
                    <ListsToggle />
                  </>
                ),
              }),
            ]}
          />
        </div>

      </div>
      <div style={{ width: "50%", padding: "24px", backgroundColor: "#f1f5f9", overflowY: "scroll" }}>
        <h2>Preview:</h2>
        <iframe
          title="Newsletter Preview"
          srcDoc={generateNewsletterHTML()}
          style={{ width: "100%", height: "90vh", border: "1px solid #ccc", backgroundColor: "white" }}
        />
      </div>
    </div>
  );
}

export default App;