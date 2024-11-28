<<<<<<< HEAD
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
=======
import { API_KEY, BASE_URL } from './fetchMovies'

var movie_poster = [];

const randomListToSearch = [
    "bad boys",
    "spiderman",
    "the shining",
    "se7en",
    "ice age",
    "sonic the hedgehog",
    "the avengers: endgame",
    "deadpool"
]

async function search(randomName, i) {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=*${randomName}*&page=${i}*`
    await fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const num = data.Search.length; //to get the length of response, sometimes it's less than 10
        for(let j=0; j < num; j++){
        movie_poster.push(data.Search[j]);
        }
        // return movie_poster;    
    });
    return movie_poster;
>>>>>>> d9d7a1260a244a7e35e765e4607ee19f55e98a3b
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

<<<<<<< HEAD
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
=======
    for(let i=0; i < randomListToSearch.length; i++){
        await search(randomListToSearch[i], i);
    }

    return { Response: "True", Search: movie_poster };	
}
 //movie_poster now has top 100 list, and you can use it anywhere, remember to use JSON.stringify()

 export { fetchAll }
>>>>>>> d9d7a1260a244a7e35e765e4607ee19f55e98a3b
