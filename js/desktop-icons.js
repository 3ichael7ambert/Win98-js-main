const desktopIcon = document.getElementById("desktop-icon");

let offsetX, offsetY;

desktopIcon.addEventListener("mousedown", (e) => {
  offsetX = e.clientX - desktopIcon.getBoundingClientRect().left;
  offsetY = e.clientY - desktopIcon.getBoundingClientRect().top;

  document.addEventListener("mousemove", moveIcon);
  document.addEventListener("mouseup", stopMovingIcon);
});

function moveIcon(e) {
  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;

  desktopIcon.style.left = x + "px";
  desktopIcon.style.top = y + "px";
}

function stopMovingIcon() {
  document.removeEventListener("mousemove", moveIcon);
  document.removeEventListener("mouseup", stopMovingIcon);
}
