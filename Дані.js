// Можна використовувати TMDB API для завантаження фільмів
const apiKey = 'ваш_ключ_від_API_TMDb';  // Вставте сюди ваш ключ
const movieContainer = document.getElementById('movies');

// Завантажуємо популярні фільми
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
        const movies = data.results;

        // Виводимо фільми на сторінку
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            movieElement.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.overview}</p>
            `;

            movieContainer.appendChild(movieElement);
        });
    })
    .catch(error => console.log('Error loading movies:', error));