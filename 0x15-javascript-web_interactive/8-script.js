async function fetchMovies() {
  const movieList = document.querySelector('#list_movies');

  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/films/?format=json');
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();
    data.results.forEach((movie) => {
      const listItem = document.createElement('li');
      listItem.textContent = movie.title;
      movieList.appendChild(listItem);
    });
  } catch (error) {
    const listItem = document.createElement('li');
    listItem.textContent = 'Could not load the movies.';
    movieList.appendChild(listItem);
    console.error(error);
  }
}

fetchMovies();
