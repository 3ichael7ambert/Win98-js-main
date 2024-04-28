// function startMenu () {
// }

// function minimizedWindows() {

// }

// const windowsVersion=[win98,winXP,win7,win10,win11];

//////////////////
////START MENU////
const startMenuButton = document.getElementById("start-menu-button");
const startMenu = document.getElementById("start-menu");
const taskbar = document.getElementById("taskbar");
const startButton = document.getElementById("start-button");

// Function to toggle the visibility of the start menu
function toggleStartMenu() {
  startMenu.style.display =
    startMenu.style.display === "block" ? "none" : "block";
}

startMenuButton.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleStartMenu();
});

document.addEventListener("click", function (event) {
  if (startMenu.style.display === "block") {
    toggleStartMenu();
  }
});

// Add click event listeners to the submenus to close the start menu when a submenu item is clicked
const submenuLinks = document.querySelectorAll("#start-menu ul ul li a");

for (let i = 0; i < submenuLinks.length; i++) {
  const submenuLink = submenuLinks[i];

  submenuLink.addEventListener("click", function (event) {
    event.stopPropagation();

    toggleStartMenu();

    alert(`You clicked on ${submenuLink.innerText}`);
  });
}

////////
//TIME//
const currentTimeDiv = document.getElementById("current-time");

function updateCurrentTime() {
  const currentTimeDiv = document.getElementById("current-time");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;

  currentTimeDiv.textContent = timeString;
}

// Update the current time every second
setInterval(updateCurrentTime, 1000);

// Call the function once at the beginning to avoid a delay
updateCurrentTime();
