import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [movie, setMovie] = useState(null);
    const apikey = "98b27d02f25b4e33622f36e3388e56c1"

    const searchMovie = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}`
            );
            const data = await response.json();
            if (data.results.length > 0) {
                setMovie(data.results[0]);
            } else {
                setMovie(null);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie..."
            />
            <button onClick={searchMovie}>Search</button>

            {movie && (
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                </div>
            )}
        </div>
    );
};

export default SearchBar;