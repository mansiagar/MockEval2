import { baseUrl } from "./baseUrl.js";
let form = document.querySelector("#QuizForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let ques = form.Ques.value;
  let A = form.A.value;
  let B = form.B.value;
  let C = form.C.value;
  let D = form.D.value;
  let correct = form.correct.value;
  let QuesData = { ques, A, B, C, D, correct };

  // post data in to form
  fetch(`${baseUrl}/Question`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(QuesData),
  })
    .then(() => {
      alert("Question Added....");
    })
    .catch((err) => {
      alert("something went wrong...");
      console.log(err);
    });
});

// get all data from the api
let getdata = async () => {
  try {
    let res = await fetch(`${baseUrl}/Question`);
    let data = res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

window.onload = async () => {
  let arr = await getdata();
  displayData(arr);
};

// display function
let displayData = (arr) => {
  let cont = document.getElementById("cont");
  cont.innerHTML = "";
  arr.map((el, i) => {
    let card = document.createElement("div");
    let title = document.createElement("h4");
    title.textContent = `title : ${el.ques}`;

    let OptionA = document.createElement("h4");
    OptionA.textContent = `OptionA : ${el.A}`;

    let OptionB = document.createElement("h4");
    OptionB.textContent = `OptionB : ${el.B}`;

    let OptionC = document.createElement("h4");
    OptionC.textContent = `OptionC : ${el.C}`;

    let OptionD = document.createElement("h4");
    OptionD.textContent = `OptionD : ${el.D}`;

    let correct = document.createElement("h4");
    correct.textContent = `Correct Answer : ${el.correct}`;

    card.append(title, OptionA, OptionB, OptionC, OptionD, correct);
    cont.append(card);
  });
};
