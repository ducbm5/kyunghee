import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/register", async (req, res) => {
    const { fullName, phone, email, birthYear, need } = req.body;
    
    console.log("New Registration Received:", { fullName, phone, email, birthYear, need });

    // --- Google Sheets Integration ---
    // Replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SHEET_WEB_APP_URL = process.env.VITE_GOOGLE_SHEET_URL || "";

    if (GOOGLE_SHEET_WEB_APP_URL) {
      try {
        // Use a background task for the fetch to Google Sheets to not block the response
        fetch(GOOGLE_SHEET_WEB_APP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName,
            phone,
            email,
            birthYear,
            need,
            timestamp: new Date().toLocaleString('vi-VN')
          })
        }).catch(err => console.error("Background fetch error:", err));
        
        console.log("Data sending to Google Sheets initiated");
      } catch (error) {
        console.error("Error initiating send to Google Sheets:", error);
      }
    } else {
      console.warn("VITE_GOOGLE_SHEET_URL not set. Data only logged to console.");
    }

    return res.status(200).json({ 
      message: "Registration successful",
      data: { fullName, phone }
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
