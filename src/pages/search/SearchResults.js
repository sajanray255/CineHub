// SearchResults.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cards from "../../components/card/card";

const SearchResults = () => {
  const { query } = useParams(); // Extract query from the URL
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch the search results based on the query parameter
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${query}`);
        setMovies(res.data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, [query]); // Run the effect when the query parameter changes

  return (
    <div className="movie__list">
      <h2 className="list__title">{("TOP RESULTS FOR : ").toUpperCase() + `${query}`}</h2>
      
      <div className="list__cards">
        {movies && movies.length > 0 ? (
          movies.map(movie => (
            <Cards key={movie.id} movie={movie} />  // Use a key for performance
          ))
        ) : (
          <div className="no-results">No Results Found !!! </div>  // Show message when no results
        )}
      </div>
    </div>
  );
  
};

export default SearchResults;
