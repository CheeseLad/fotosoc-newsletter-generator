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
  StrikeThroughSupSubToggles,
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

import generateNewsletterHTML from "./generateNewsletterHTML";

async function imageUploadHandler(image) {
  const formData = new FormData();
  formData.append("image", image);

  const response = await fetch(`${import.meta.env.VITE_API_URL}/upload-image`, {
    method: "POST",
    body: formData,
  });

  const json = await response.json();

  if (!json.success) {
    throw new Error("Image upload failed: " + json.error);
  }

  return json.link;
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

  const [subject, setSubject] = useState(
    "AND IF THE ELEVATOR TRIES TO BRING US DOWN"
  );
  const [author, setAuthor] = useState(
    "Conor Purcell - DCU Fotosoc Secretary 2025/26"
  );
  const [emailList, setEmailList] = useState([]);
  const [csvFile, setCsvFile] = useState(null);
  const [csvUploadError, setCsvUploadError] = useState("");
  const [sendPassword, setSendPassword] = useState("");
  const [sendingStatus, setSendingStatus] = useState("");

  const [template, setTemplate] = useState("fotosoc");

  const handleMarkdownChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  const downloadHTML = () => {
    const htmlContent = generateNewsletterHTML(
      markdown,
      subject,
      author,
      template
    );
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "newsletter.html";
    link.click();

    URL.revokeObjectURL(url);
  };

  const copyHTMLToClipboard = async () => {
    const htmlContent = generateNewsletterHTML(
      markdown,
      subject,
      author,
      template
    );
    try {
      await navigator.clipboard.writeText(htmlContent);
      alert("HTML copied to clipboard! 🚀");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div style={{ display: "flex", height: "95vh" }}>
      <div
        style={{
          width: "50%",
          padding: "12px",
          overflowY: "scroll",
          backgroundColor: "white",
        }}
      >
        {/*<select onChange={(e) => setTemplate(e.target.value)} value={template}>
        <option value="fotosoc">DCU Fotosoc</option>
        <option value="mps">DCU MPS</option>
        <option value="redbrick">Redbrick</option>
      </select>*/}

        <div style={{ marginBottom: "16px", display: "flex", flexDirection: "column", width: "100%" }}>
          <label style={{ marginBottom: "4px" }}>Email Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ width: "97%", padding: "12px", marginBottom: "16px", border: "1px solid #d1d5db", borderRadius: "8px", fontSize: "14px", outline: "none" }}
          />

          <label style={{ marginBottom: "4px" }}>Email Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ width: "97%", padding: "12px", marginBottom: "16px", border: "1px solid #d1d5db", borderRadius: "8px", fontSize: "14px", outline: "none" }}
          />

          <div style={{ display: "flex", gap: "8px", width: "100%" }}>
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
                whiteSpace: "nowrap"
              }}
            >
              Download Email HTML
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
                whiteSpace: "nowrap"
              }}
            >
              Copy Email HTML to Clipboard
            </button>
          </div>
        </div>

        {import.meta.env.VITE_LISTMONK_MODE === "false" && (

        <div style={{ marginBottom: "16px" }}>
          <label>
            Upload Society Member Email List CSV{" "}
            <i>
              (Get the file{" "}
              <a
                href="https://cp.dcuclubsandsocs.ie/members/export/all"
                target="_blank"
              >
                here
              </a>
            </i>){" "}
          </label>
          <br></br>
          <input
            type="file"
            accept=".csv"
            onChange={async (e) => {
              const file = e.target.files[0];
              if (!file) return;

              setCsvFile(file); // Optional: if you still want to track it in state

              const formData = new FormData();
              formData.append("csv", file);

              try {
                const response = await fetch(
                  `${import.meta.env.VITE_API_URL}/upload-csv`,
                  {
                    method: "POST",
                    body: formData,
                  }
                );

                const result = await response.json();
                if (response.ok) {
                  setEmailList(result.emails);
                  setCsvUploadError("");
                } else {
                  setCsvUploadError(result.error || "Failed to upload CSV");
                }
              } catch (error) {
                console.error("Error uploading CSV:", error);
                setCsvUploadError("Something went wrong");
              }
            }}
            style={{ marginBottom: "8px", marginTop: "4px" }}
          />

          {csvUploadError && (
            <div style={{ color: "red", marginTop: "8px" }}>
              {csvUploadError}
            </div>
          )}
        </div>
        )}

        {emailList.length > 0 && (
          <div
            style={{
              marginTop: "16px",
              backgroundColor: "#ffffff",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "8px",
              maxHeight: "200px",
              overflowY: "scroll",
            }}
          >
            <strong>Emails ({emailList.length}):</strong>
            <ul
              style={{ listStyleType: "none", padding: "0", margin: "8px 0" }}
            >
              {emailList.map((email, index) => (
                <li key={index} style={{ fontSize: "14px", padding: "2px 0" }}>
                  {email}
                </li>
              ))}
            </ul>
          </div>
        )}

        {import.meta.env.VITE_LISTMONK_MODE === "false" && (

        <div style={{ marginTop: "24px" }}>
          <label>Send Password</label>
          <input
            type="password"
            value={sendPassword}
            onChange={(e) => setSendPassword(e.target.value)}
            placeholder="Enter password"
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "8px",
              marginTop: "4px",
            }}
          />

          <button
            onClick={async () => {
              setSendingStatus("Sending...");
              try {
                const response = await fetch(
                  `${import.meta.env.VITE_API_URL}/send-emails`,
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      password: sendPassword,
                      author: author,
                      subject: subject,
                      emails: emailList,
                      newsletterHtml: generateNewsletterHTML(
                        markdown,
                        subject,
                        author,
                        template
                      ),
                    }),
                  }
                );

                const result = await response.json();
                if (response.ok) {
                  setSendingStatus("✅ Emails sent successfully!");
                } else {
                  setSendingStatus(`❌ Error: ${result.error}`);
                }
              } catch (error) {
                console.error(error);
                setSendingStatus("❌ Failed to send emails.");
              }
            }}
            style={{
              backgroundColor: "#1e40af",
              color: "white",
              border: "none",
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            Send Emails
          </button>

          {sendingStatus && (
            <div
              style={{
                marginTop: "8px",
                marginBottom: "8px",
                color: sendingStatus.includes("❌") ? "red" : "green",
              }}
            >
              {sendingStatus}
            </div>
          )}
        </div>
        )}

        <div className="editor-content" style={{ border: "1px solid #d1d5db", borderRadius: "8px"}}>
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
                toolbarClassName: "toolbar",
                toolbarContents: () => (
                  <>
                    <UndoRedo />
                    <BlockTypeSelect />
                    <BoldItalicUnderlineToggles />
                    <StrikeThroughSupSubToggles />
                    <ListsToggle />
                    <CreateLink />
                    <InsertImage />
                  </>
                ),
              }),
            ]}
          />
        </div>
      </div>
      <div
        style={{
          width: "50%",
          padding: "12px",
          overflowY: "hidden",
          overflowX: "hidden",
        }}
      >
        <iframe
          title="Newsletter Preview"
          srcDoc={generateNewsletterHTML(markdown, subject, author, template)}
          style={{
            width: "100%",
            height: "93vh",
            border: "1px solid #d1d5db", 
            borderRadius: "8px",
            backgroundColor: "white",
          }}
        />
      </div>
    </div>
  );
}

export default App;
