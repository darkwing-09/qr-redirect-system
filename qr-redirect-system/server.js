const express = require("express");
const app = express();

// Sample redirect database
const links = {
    "event2026": "https://example.com",
    "google": "https://google.com"
};

app.get("/", (req, res) => {
    res.send("QR Redirect Server is Running 🚀");
});

app.get("/r/:code", (req, res) => {
    const code = req.params.code;
    const finalUrl = links[code];

    if (!finalUrl) {
        return res.status(404).send("Invalid QR Code");
    }

    console.log("---- SCAN DETECTED ----");
    console.log("Code:", code);
    console.log("IP:", req.ip);
    console.log("Time:", new Date());
    console.log("User-Agent:", req.headers["user-agent"]);
    console.log("-----------------------");

    res.redirect(finalUrl);
});

// IMPORTANT for Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
