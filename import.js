import { fetchMovies} from './script.js';
import {displayMovies} from './display.js';

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const handleSearch = async () => {
    const query = searchInput.value.trim();
    if(query){
        const movies = await fetchMovies(query);
displayMovies(movies);
    }

};
searchButton.addEventListener('click', handleSearch);