const API_KEY = "f4e3711c";
const BASE_URL = "https://www.omdbapi.com/";

// Fetch featured movies
export const fetchAll = async () => {
  try {
    const url = `${BASE_URL}?s=batman&apikey=${API_KEY}`; // Example query
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching featured movies:", error);
    return { Response: "False", Search: [] };
  }
};

// Fetch trending movies (This is an example. Replace with actual API if available)
export const fetchTrending = async () => {
  try {
    const url = `${BASE_URL}?s=trending&apikey=${API_KEY}`; // Example query for trending
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return { Response: "False", Search: [] };
  }
};

// Fetch coming soon movies (Replace with actual API if available)
export const fetchComingSoon = async () => {
  try {
    const url = `${BASE_URL}?s=upcoming&apikey=${API_KEY}`; // Example query for upcoming movies
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching coming soon movies:", error);
    return { Response: "False", Search: [] };
  }
};

// Fetch movie categories (This is a placeholder. Replace with actual categories list if available)
export const fetchCategories = async () => {
  try {
    return {
      Response: "True",
      Genres: ["Action", "Comedy", "Drama", "Sci-Fi", "Romance", "Horror"] // Example categories
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { Response: "False", Genres: [] };
  }
};
