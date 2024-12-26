import { baseUrl } from "./baseUrl.js";

let form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = form.email.value;
  let password = form.password.value;
  let userObj = { email, password };

  fetch(`${baseUrl}/user`)
    .then((res) => res.json())
    .then((data) => {
      let user = data.filter((el) => el.email == email);
      if (user.length != 0) {
        if (user[0].password == password) {
          alert("login success");
          window.location.href = "quiz.html";
        } else {
          alert("incorrect password");
        }
      } else {
        alert("incorrect email");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
