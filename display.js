export function displayMovies(movies) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';


    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
        <h3>${movie.Title}</h3>
        <img src = "${movie.Poster}" alt = "${movie.Title}" width = "150">
         <p>Year: ${movie.Year}</p>
        `;
         gallery.appendChild(card);
    });
    }
