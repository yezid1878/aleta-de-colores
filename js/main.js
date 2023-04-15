const d = document;

const $btn = d.getElementById("btn"),
  $span = d.getElementById("color"),
  colores = ["pink", "#f00", "rgba(160,55,84,0.5)", "#e5e5e5", "yellow"];

$btn.addEventListener("click", (e) => {
  const random = Math.floor(Math.random() * colores.length);

  document.body.style.backgroundColor = colores[random];
  $span.textContent = colores[random];
});
