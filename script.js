const API_KEY = '9af6ef62';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export async function fetchMovies(query){
    
        const res = await fetch(`${API_URL}&s=${query}`);
        const data = await res.json();
        return data.Search || [];
    
}