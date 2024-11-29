const API_KEY = "f4e3711c";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMoviesByTitle = async (title) => {
  try {
    // const url = `${BASE_URL}?s=${title.replace(/ /g, "+")}&type=${type}&apikey=${API_KEY}`;
    const url = `${BASE_URL}?s=${title.replace(/ /g, "+")}&apikey=${API_KEY}`;
    const response = await fetch(url);
    console.warn(response)
    if (!response.ok) {
      throw new Error("Failed to fetch data from OMDb API.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
};

export { API_KEY, BASE_URL }