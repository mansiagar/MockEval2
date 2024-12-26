let nav = document.querySelector("#nav");
let navbar = () => {
  let Navbar = ` <div>
      <a href="index.html">Home</a>
      <a href="quiz.html">Quiz</a>
      <a href="questions.html">Questions</a>
    </div>`;
  nav.innerHTML = Navbar;
};
navbar();
