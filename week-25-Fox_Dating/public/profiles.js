document.addEventListener("DOMContentLoaded", async (event) => {
  event.preventDefault();

  const linkWithusername = window.location.href.split("/");
  const username = linkWithusername[4];

  const response = await fetch(`/api/users/${username}`, {
    method: "GET",
  });

  if (response.ok) {
    const data = await response.json();
    const nickname = document.querySelector("#nickname");
    nickname.innerHTML = `<b>${data.nickname}(${data.age}, ${data.gender})</b>`;
    const aboutMe = document.querySelector("#about");
    aboutMe.innerHTML = `"${data.self_description}"`;
    const picture = document.querySelector("#picture");
    picture.setAttribute("src", `${data.profile_picture_url}`);
    picture.setAttribute("alt", `${username}`);
    const matching = document.querySelector("#matching");
    matching.setAttribute(`href`, `/match/${username}`);
  } else {
    window.location.assign(`/error.html`);
  }
});
