function mainMenuHandler(ev) {
  document.querySelector(".global-nav").classList.toggle("show");
  if (document.querySelector(".global-nav").classList.contains("show")) {
    ev.currentTarget.setAttribute("aria-expanded", true);
  } else {
    ev.currentTarget.setAttribute("aria-expanded", false);
  }


  console.log("toggle");
}

function subMenuHandler(ev) {
  // find the closest li ancestor, then find the submenu inside of that li and toggle the show class
  ev.currentTarget
    .closest("li")
    .querySelector(".global-nav__submenu")
    .classList.toggle("show");
  // toggle the rotate class on the button icon that was clicked
  ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
}

export default function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const subMenuToggles = document.querySelectorAll(
    ".global-nav__split-button__toggle"
  );
  // when the main menu button is clicked:
  menuButton.addEventListener("click", mainMenuHandler);
  subMenuToggles.forEach((toggle) => {
    //for each submenu toggle
    toggle.addEventListener("click", subMenuHandler);
  });
}