const menuBar = document.getElementById("menuBar");
const mainNav = document.getElementById("mainNav");
const closelink = document.getElementById("closeLink");

document.addEventListener("click", showMenu);
function showMenu(e) {
  if (e.target.id == "menuBar") {
    mainNav.classList.add("show");
  }
  if (e.target.id == "closeLink") {
    mainNav.classList.remove("show");
  }
}
