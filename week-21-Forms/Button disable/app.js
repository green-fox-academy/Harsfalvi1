window.addEventListener("DOMContentLoaded", () => {
  const form = document.forms["button-disable"];
  form.addEventListener("change", (event) => {
    //If you choose Dog or Cat, it should enable the sign up button
    const dog = form.querySelector("#dog");
    const cat = form.querySelector("#cat");
    const signupButton = form.querySelector("#signup-button");
    if (dog.checked || cat.checked) {
      signupButton.disabled = false;
      signupButton.addEventListener("click", displayAlertSuccessfull);
    } else {
      signupButton.disabled = true;
      signupButton.removeEventListener("click", displayAlertSuccessfull);
    }
    //If you choose Yes for cat facts, it should enable the I love cats button
    const yes = form.querySelector("#yes");
    const no = form.querySelector("#no");
    const catButton = form.querySelector("#cat-button");
    if (yes.checked) {
      catButton.disabled = false;
      catButton.addEventListener("click", displayAlertSuccessfull);
    } else {
      catButton.disabled = true;
      catButton.removeEventListener("click", displayAlertSuccessfull);
    }
    //If you pick Victor and no to cat facts it should enable the sign up button only
    //Clicking this time should display: Sigh, we still added you to the cat facts list
    const viktor = form.querySelector("#viktor");
    if (viktor.checked && no.checked) {
      signupButton.disabled = false;
      signupButton.addEventListener("click", displayAlertExeption);
    } else {
      signupButton.removeEventListener("click", displayAlertExeption);
    }
  });
  //Clicking on a button should alert:
  //Thank you, you've successfully signed up for cat facts

  function displayAlertSuccessfull(event) {
    event.preventDefault();
    alert("Thank you, you've successfully signed up for cat facts");
  }

  function displayAlertExeption(event) {
    event.preventDefault();
    alert("Sigh, we still added you to the cat facts list");
  }
});
