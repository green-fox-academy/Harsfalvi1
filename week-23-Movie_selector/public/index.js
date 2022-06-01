async function getGenres() {
  try {
    const response = await fetch("/api/genres");
    if (response.ok) {
      const data = await response.json();
      return data.genres;
    } else {
      console.error(response.statusText);
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}
//
async function getMovies(genre_id) {
  try {
    let response;
    if (!genre_id) {
      response = await fetch("/api/movies");
    }
    response = await fetch(`/api/movies?genre_id=${genre_id}`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data.movies;
    } else {
      console.error(response.statusText);
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}

async function createList(genre_id) {
  let movies = await getMovies(genre_id);
  let options = '<option value="">Select a genre</option>';

  movies.forEach((movie) => {
    options += `<option value="${movie.title}">${movie.title}</option>`;
  });
  return options;
}

document.addEventListener("DOMContentLoaded", async () => {
  const genreSelect = document.querySelector("#genre-select");
  const genres = await getGenres();

  genres.forEach((genre) => {
    genreSelect.innerHTML += `<option value="${genre.id}">${genre.genre}</option>`;
  });

  const movieSelect = document.querySelector("#movie-select");

  movieSelect.innerHTML = await createList();
  const selectedMovie = document.querySelector("#selected-movie");

  genreSelect.onchange = async () => {
    movieSelect.innerHTML = await createList(genreSelect.value);
    selectedMovie.textContent = "-";
  };

  movieSelect.onchange = () => {
    selectedMovie.textContent = movieSelect.value || "-";
  };
});

