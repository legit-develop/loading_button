const searchButton = document.querySelector("#search-button");
const searchButtonContent = document.querySelector("#search-button div");
console.log(searchButtonContent);

searchButton.addEventListener("click", toggleButton);

function toggleButton() {
  searchButtonContent.classList.toggle("loading");
}
