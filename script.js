const apiKey = 'aa46f3a0';

const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

const movies = [
  {
    title: 'The Wedding Party',
    year: 2016,
    poster: '1001123944.jpg',
    genre: 'Romance',
    rating: 4.5
  },
  {
    title: '30 Days in Atlanta',
    year: 2014,
    poster: '1001124033.jpg',
    genre: 'Comedy',
    rating: 4.2
  },
  {
    title: 'Half of a Yellow Sun',
    year: 2013,
    poster: '1001124046.jpg',
    genre: 'Drama',
    rating: 4.8
  }
];

function displayMovies() {
  const movieContainer = document.getElementById('movie-container');

  movies.forEach((movie) => {
    const movieDiv = document.createElement('div');
    movieDiv.className = 'movie-card';
    movieDiv.innerHTML = `
      <h2>${movie.title}</h2>
      <p>Year: ${movie.year}</p>
      <img src="${movie.poster}" alt="Movie Poster">
      <p>Genre: ${movie.genre}</p>
      <p>Rating: ${movie.rating}</p>
    `;
  });
}

displayMovies();

function searchMovies(searchInputValue) {
  if (searchInputValue === '') {
    alert('Please enter a movie title');
    return;
  }

  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${searchInputValue}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const movieContainer = document.getElementById('movie-container');
      movieContainer.innerHTML = '';

      data.Search.forEach((movie) => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie-card';

        movieDiv.innerHTML = `
          <h2>${movie.Title}</h2>
          <p>Year: ${movie.Year}</p>
          <img src="${movie.Poster}" alt="Movie Poster">
          <p>Genre: ${movie.Genre}</p>
          <p>Rating: ${movie.imdbRating}/5</p>
        `;

        movieContainer.appendChild(movieDiv);
      });
    });
}