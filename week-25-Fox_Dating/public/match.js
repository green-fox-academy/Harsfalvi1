document.addEventListener("DOMContentLoaded", async (event) => {
  event.preventDefault();

  let target_username = await getRandomProfile();
  const source_username = window.location.href.split("/")[4];

  const likeButton = document.querySelector("#like");
  likeButton.addEventListener("click", async (event) => {
    await getMatch();
    await getRandomProfile();

    const dislikeButton = document.querySelector("#dislike");
    dislikeButton.addEventListener("click", async (event) => {
      await getRandomProfile();
    });
  });

  async function getMatch() {
    try {
      const response = await fetch("/api/likes", {
        method: "POST",
        body: JSON.stringify({ source_username, target_username }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.ok && data.matched) {
        alert("It's a match");
      }
      target_username = await getRandomProfile();
    } catch (error) {
      console.error(error);
    }
  }

  async function getRandomProfile() {
    const username = window.location.href.split("/")[4];

    const response = await fetch(`/api/random-user?username=${username}`, {
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      const loggedIn = document.querySelector("#logged");
      loggedIn.innerHTML = `You are logged in as <a href="/profiles/${username}">${username}</a>`;
      const nickname = document.querySelector("#nickname");
      nickname.innerHTML = `<b>${data.nickname}(${data.age}, ${data.gender})</b>`;
      const aboutMe = document.querySelector("#about");
      aboutMe.innerHTML = `"${data.self_description}"`;
      const picture = document.querySelector("#picture");
      picture.setAttribute("src", `${data.profile_picture_url}`);
      return data.username;
    } else {
      window.location.assign(`/error.html`);
    }
  }
});
