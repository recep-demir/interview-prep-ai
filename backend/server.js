require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 🔹 JSON verilerini parse et
app.use(express.json());

// 🔹 MongoDB bağlantısı
connectDB();

// 🔹 Test route (şimdilik)
app.get("/", (req, res) => {
  res.send("🚀 Backend çalışıyor!");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
