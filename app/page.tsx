"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Searchbar from "./components/searchbar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [startIdx, setStartIdx] = useState(0);

  const getMovieRequest = async () => {
    const randomWords = [
      "action",
      "adventure",
      "comedy",
      "drama",
      "romance",
      "horror",
      "thriller",
      "sci-fi",
      "fantasy",
      "animation",
      "family",
      "mystery",
      "crime",
      "documentary",
      "biography",
      "history",
      "war",
      "western",
      "musical",
      "sport",
      "superhero",
      "spy",
      "teen",
      "holiday",
      "heist",
      "zombie",
      "vampire",
      "alien",
      "robot",
      "monster",
      "magic",
      "time travel",
      "apocalypse",
      "post-apocalyptic",
      "cyberpunk",
      "dystopian",
      "futuristic",
      "paranormal",
      "psychological",
      "surreal",
      "satire",
      "mockumentary",
      "found footage",
      "cult",
      "silent",
      "noir",
      "neo-noir",
      "biographical",
      "environmental",
      "political",
      "social",
      "religious",
      "spiritual",
      "educational",
      "coming of age",
      "slice of life",
      "courtroom",
      "medical",
      "naval",
      "aviation",
      "space",
      "underwater",
      "mountain climbing",
      "jungle",
      "desert",
      "forest",
      "urban",
      "suburban",
      "rural",
      "island",
      "road trip",
      "time period",
      "future",
      "past",
      "present",
      "alternate reality",
      "parallel universe",
      "dream",
      "nightmare",
      "hallucination",
      "illusion",
      "vision",
      "reality",
      "memory",
      "flashback",
      "flashforward",
      "dream sequence",
      "nightmare sequence",
      "hallucination sequence",
      "illusion sequence",
      "vision sequence",
      "reality sequence",
      "memory sequence",
      "found footage",
      "experimental",
      "avant-garde",
      "absurdist",
      "surrealist",
      "expressionist",
      "impressionist",
      "minimalist",
      "realist",
      "modernist",
      "postmodernist",
      "constructivist",
      "cubist",
      "futurist",
      "abstract",
      "contemporary",
      "classical",
      "traditional",
      "folk",
      "street",
      "urban",
      "graffiti",
      "outsider",
      "naive",
      "primitive",
      "raw",
      "visionary",
      "intuitive",
      "conceptual",
      "abstract expressionist",
      "minimalist",
      "postminimalist",
      "pop",
      "op",
      "op art",
      "kinetic",
      "environmental",
      "installative",
      "performance",
      "land",
      "earth",
      "site-specific",
      "spatial",
      "sound",
      "light",
      "intermedia",
      "multimedia",
      "transmedia",
      "cross-media",
      "postmedia",
      "hypermedia",
      "interactive",
      "virtual",
      "augmented",
      "mixed",
      "hybrid",
      "open-source",
      "free culture",
      "remix",
      "mashup",
    ];

    const getRandomWord = () => {
      return randomWords[Math.floor(Math.random() * randomWords.length)];
    };

    const randomQuery = getRandomWord();
    const url = `https://www.omdbapi.com/?s=${randomQuery}&apikey=263d22d8`;

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
        setVisibleMovies(responseJson.Search.slice(0, 10));
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="bg-neutral-900 container mx-auto py-8 px-4">
      <Navbar />
      <Searchbar />
      {/* Movies Section */}
      <div className="flex flex-wrap">
        {visibleMovies.map((movie, index) => (
          <div key={index} className="w-1/5 p-4 relative">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-auto rounded"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300">
              <h2 className="text-lg font-bold mt-2 text-white text-center absolute inset-x-0 bottom-0 mb-4">
                {movie.Title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
