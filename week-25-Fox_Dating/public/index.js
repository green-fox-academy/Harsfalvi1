document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#submit");
  button.addEventListener("click", async (event) => {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const nickname = document.querySelector("#nickname").value;
    const birth_year = document.querySelector("#year").value;
    const gender = document.querySelector('input[name="iam"]:checked').value;
    const target_gender = document.querySelector(
      'input[name="looking-for"]:checked'
    ).value;
    const self_description = document.querySelector("#aboutme").value;
    const profile_picture_url = document.querySelector("#url").value;

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        nickname,
        birth_year,
        gender,
        target_gender,
        self_description,
        profile_picture_url,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorMsg = await response.text();
      return;
    }

    window.location.assign(`/profiles/${username}`);

    document.querySelector("form").reset();
  });
});
