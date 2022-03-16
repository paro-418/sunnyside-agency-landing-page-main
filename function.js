let hamburger = document.getElementsByClassName("hamburger")[0];

let isClicked = false;
hamburger.addEventListener("click", () => {
  if (!isClicked) {
    isClicked = true;
  } else if (isClicked) {
    isClicked = false;
  }
  let options = document.getElementById("nav-ul");

  if (isClicked) {
    options.style.opacity = "1";
    options.style.pointerEvents = "auto";
    options.style.visibility = "visible";
  } else if (!isClicked) {
    options.style.opacity = "0";
    options.style.pointerEvents = "none";
    options.style.visibility = "hidden";
  }
});
