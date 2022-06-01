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

document.addEventListener("DOMContentLoaded", async () => {
  const genreSelect = document.querySelector("#genre-select");
  const genres = await getGenres();

  genres.forEach((genre) => {
    genreSelect.innerHTML += `<option value="${genre.id}">${genre.genre}</option>`;
  });
});
