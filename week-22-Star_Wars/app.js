async function getPeople(searchTerm) {
  const url = `https://swapi.dev/api/people/?search=${searchTerm}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      console.error(response.statusText);
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}

async function getFilmTitle(filmURL) {
  try {
    const response = await fetch(filmURL);
    if (response.ok) {
      const data = await response.json();
      return data.title;
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
  const button = document.querySelector("button");
  button.onclick = async function () {
    const input = document.querySelector("input");
    const people = await getPeople(input.value);

    const personListUL = document.querySelector("#people");
    personListUL.innerHTML = "";

    people.forEach((person) => {
      const personLI = document.createElement("li");
      personLI.textContent = person.name;
      personListUL.appendChild(personLI);

      li.onclick = function () {
        const movieListUL = document.querySelector("#movies");
        movieListUL.innerHTML = "";

        person.films.forEach(async (filmURL) => {
          const filmTitle = await getFilmTitle(filmURL);
          const movieData = document.createElement("li");
          movieData.innerHTML += `<li>${filmTitle.title} - ${filmTitle.release_date}</li>`;
          movieListUL.appendChild(movieData);
        });
      };
      personListUL.appendChild(list);
    });
  };
});

//nincs kész
