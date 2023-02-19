const thankYou = document.querySelector(".thank-you");
const mainContent = document.querySelector(".main-content");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  mainContent.style.display = "none";
  thankYou.style.display = "grid";
});
