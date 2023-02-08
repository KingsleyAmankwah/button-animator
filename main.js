var button = document.getElementById("btn");
var position;

button.addEventListener("mouseover", function () {
  position ? (position = 0) : (position = 150);
  button.style.transform = `translate(${position}px, 0px)`;
  button.style.transition = `all 0.2s ease`;
});
