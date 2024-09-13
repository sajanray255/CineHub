import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";  // Import search icon

const Header = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const searchMovies = async (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search/${query}`);
            setQuery("");
        }
    };

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://archive.org/download/cinehub.wtf-logo/cinehub.wtf-logo.png" alt="IMDB Logo" /></Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
            </div>

            {/* Search Form */}
            <form className="search-form" onSubmit={searchMovies}>
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    <FaSearch />  {/* Search icon */}
                </button>
            </form>
        </div>
    );
};

export default Header;
