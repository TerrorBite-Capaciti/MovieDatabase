const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Define TMDB API details
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, "build")));

// API routes
// Add the recommended, search, and other routes here...
// Example route for fetching data from TMDB
app.get("/api/recommended", async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY, language: "en-US", page: 1 },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Serve the React frontend for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
