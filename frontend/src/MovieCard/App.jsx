import MovieCard from "./MovieCard"; // Adjust the path based on your folder structure


//mock data for movies
const mockMovies = [
  {
    id: 1,
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w500/8h58BL2Fg9Rlj5tBXGojJ3LgNkJ.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
];

function App() {
  return (
    <div>
      <h1>Movie Database</h1>
      <MovieCard movies={mockMovies} />
    </div>
  );
}

export default App;
