import React from "react";
import { Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./pages/HomeScreen";
import SearchResults from "./pages/SearchResults";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  );
};

export default App;
