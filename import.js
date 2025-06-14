import { fetchMovies , fetchTrending} from './script.js';
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
const updateTrendingMovies = async () => {
    console.log("Trending Movies...")
    const trendingMovies = await fetchTrending();
    displayMovies(trendingMovies);

};
setInterval(updateTrendingMovies , 10000);
searchButton.addEventListener('click', handleSearch);

