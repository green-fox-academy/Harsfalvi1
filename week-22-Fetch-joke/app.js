//The button should start a fetch-based request.
// You can use this API.
// Store the result in your container.
// Handle your promise's rejected status also (show some error message).
// You can implement more awesome design than the example 😃
window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const button = document.getElementsByTagName("button")[0];

  button.addEventListener("click", async () => {
    try {
      const response = await fetch("https://api.icndb.com/jokes/random");
      if (response.ok) {
        const p = document.createElement("p");
        const data = await response.json();
        p.textContent = data.value.joke;
        container.appendChild(p);
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  });
});
