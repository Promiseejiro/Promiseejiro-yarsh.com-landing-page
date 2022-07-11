// initialization
const year = document.querySelector(".year");
const date = new Date();
year.textContent = date.getFullYear();
const popUp = document.querySelector(".coming-soon-pop-up");
const featureContainers = document.querySelectorAll(".feature-item");
const closePopBtn = document.querySelector(".close-pop-btn");
// function

const showPopUp = () => {
  popUp.style.display = "block";
};

const closePopUp = () => {
  popUp.style.display = "none";
};
// events
featureContainers.forEach((item) => {
  item.addEventListener("click", showPopUp);
});
closePopBtn.addEventListener("click", closePopUp);
