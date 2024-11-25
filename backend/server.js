const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

// Routes to fetch data from TMDB API
// Add the recommended, search, and other routes here...

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
