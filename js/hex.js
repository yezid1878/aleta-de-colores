const d = document;

const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ],
  $btn = d.getElementById("btn"),
  $span = d.getElementById("color");

$btn.addEventListener("click", (e) => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[random()];
    console.log(color);
  }

  document.body.style.backgroundColor = color;
  $span.textContent = color;
});

const random = () => Math.floor(Math.random() * hex.length);
