const movieSelector = document.querySelector("#movie");
const genreSelector = document.querySelector("#genre");

const selected = document.querySelector(".selected");
const movie = document.querySelector(".movie");

genreSelector.addEventListener("change", () => {
  for (let i = 0; i < movieSelector.length; i++) {
    const option = movieSelector.options[i];
    if (
      option.className !==
      genreSelector.options[genreSelector.selectedIndex].value
    ) {
      option.hidden = true;
    } else {
      option.hidden = false;
    }
  }
});

movieSelector.addEventListener("change", (e) => {
  movie.textContent = movieSelector.options[movieSelector.selectedIndex].text;
  selected.appendChild(movie);
});
