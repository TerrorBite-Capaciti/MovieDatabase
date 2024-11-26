const API_KEY = 'your_api_key'; // Replace with your actual API key

// Helper function to fetch data from the API
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return { results: [] }; // Return an empty array in case of error
  }
};

export const fetchRecommended = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  return fetchData(url);
};

export const fetchComingSoon = async () => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  return fetchData(url);
};

export const searchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`;
  return fetchData(url);
};
