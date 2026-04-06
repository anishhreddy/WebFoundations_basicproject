const inputname = document.getElementById("nameinput");
const startbtn = document.getElementById("startbtn");
const output = document.getElementById("output");

const darkmodebtn = document.getElementById("darkmodebtn");

const homebtn = document.getElementById("btnn");
const list = document.getElementById("ulx");

const textinput = document.getElementById("contactInput");
const submitbtn = document.getElementById("submitBtn");

submitbtn.addEventListener("click", () => {
  const message = textinput.value.trim();

  if (message === "") {
    alert("Please enter a message before submitting.");
  } else {
    alert("message submitted successfully!!");
  }
});

homebtn.addEventListener("click", () => {
  list.classList.toggle("active");
});

const resumebtn = document.getElementById("resumebtn");

const messages = [
  "You're going to build something amazing today!",
  "Keep pushing, you're doing great!",
  "Every expert was once a beginner.",
  "Code. Break. Fix. Repeat.",
  "Consistency beats motivation.",
  "Start small, build big.",
];

startbtn.addEventListener("click", () => {
  const name = inputname.value.trim();

  if (name === "") {
    alert("Please Enter your name");
    return;
  }

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  output.innerText = `Hello ${name},Welcome to MOSSxACM WebDev wrkshop! ${randomMessage} `;
});

darkmodebtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (darkmodebtn.innerText === "Dark Mode") {
    darkmodebtn.innerText = "Light Mode";
  } else {
    darkmodebtn.innerText = "Dark Mode";
  }
});

resumebtn.addEventListener("click", () => {
  window.location.href = "res.html";
});
