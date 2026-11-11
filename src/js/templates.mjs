import spritePath from "../images/sprite.symbol.svg";

export function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

export function mediaCardTemplate(info) {
  return `<div class="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card__img">
    <h3 class="media-card__title">${info.name}</h3>
    </a>
   <p>${info.description}</p>
     </div>`;
}
function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}
function getVoicePhone(numbers) {
  const voice = numbers.find((number) => number.type === "Voice");
  return voice.phoneNumber;
}
export function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}<p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice}</p>
  </section>
    `;
}

export function alertTemplate(alert) {
  let alertType = "";
  // most of the alerts are one word and line up with the icons nicely. "Park Closure" is the exception
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
    <use xlink:href="${spritePath}#alert-${alertType}"></use>
  </svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div></li>`;
}

export function visitorCenterTemplate(center) {
  return `<li class="visitor-center">
  <h4>${center.name}</h4>
  <p>${center.description}</p>
  <p>${center.directionsInfo}</p>
  </li>`;
}

export function activityListTemplate(activities) {
  return activities.map((activity) => `<li>${activity.name}</li>`).join("");
}

export function globalHeaderTemplate() {
  return `<a href="index.html" class="site-title">
      <span class="logo" role="presentation"></span>
      <span>National Park Service</span>
    </a>
    <div class="global-header__right">
      <a class="search-icon" href="#park-footer">
        <svg class="icon">
          <use xlink:href="${spritePath}#search"></use>
        </svg>
        <span class="visually-hidden">Search</span>
      </a>
      <button id="global-nav-toggle" class="global-nav__toggle" aria-expanded="false" aria-label="Open Menu">
        <div class="global-nav__toggle--closed">
          <svg class="icon">
            <use xlink:href="${spritePath}#menu"></use>
          </svg>
          <span class="visually-hidden">Open</span> Menu
        </div>
        <div class="global-nav__toggle--open">
          <svg class="icon">
            <use xlink:href="${spritePath}#close"></use>
          </svg>
          Close
        </div>
      </button>
    </div>
    <nav class="global-nav">
      <h2 class="global-nav__section-heading section-heading--green">Explore this Park</h2>
      <ul class="global-nav__list">
        <li>
          <div class="global-nav__split-button">
            <a href="#">Plan Your Visit</a>
            <button class="global-nav__split-button__toggle">
              <span class="visually-hidden">Toggle submenu for Plan Your Visit</span>
              <svg class="icon" role="presentation" focusable="false">
                <use xlink:href="${spritePath}#arrow"></use>
              </svg>
            </button>
          </div>
          <ul class="global-nav__submenu" aria-label="Plan Your Visit submenu">
            <li><a href="#">Find a Park</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Passes</a></li>
            <li><a href="#">Trip Ideas</a></li>
          </ul>
        </li>
      </ul>
      <h2 class="global-nav__section-heading section-heading--blue">Explore the National Park Service</h2>
      <ul class="global-nav__list">
        <li>
          <div class="global-nav__split-button">
            <a href="#">Plan Your Visit</a>
            <button class="global-nav__split-button__toggle">
              <span class="visually-hidden">Toggle submenu for Plan Your Visit</span>
              <svg class="icon" role="presentation" focusable="false">
                <use xlink:href="${spritePath}#arrow"></use>
              </svg>
            </button>
          </div>
          <ul class="global-nav__submenu" aria-label="Plan Your Visit submenu">
            <li><a href="#">Find a Park</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Passes</a></li>
            <li><a href="#">Trip Ideas</a></li>
          </ul>
        </li>
        <li>
          <div class="global-nav__split-button">
            <a href="#">Learn & Explore</a>
            <button class="global-nav__split-button__toggle">
              <span class="visually-hidden">Toggle submenu for Learn & Explore</span>
              <svg class="icon" role="presentation" focusable="false">
                <use xlink:href="${spritePath}#arrow"></use>
              </svg>
            </button>
          </div>
          <ul class="global-nav__submenu" aria-label="Learn & Explore submenu">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Discover History</a></li>
            <li><a href="#">Explore Nature</a></li>
            <li><a href="#">Kids</a></li>
          </ul>
        </li>
        <li>
          <div class="global-nav__split-button">
            <a href="#">Get Involved</a>
            <button class="global-nav__split-button__toggle">
              <span class="visually-hidden">Toggle submenu for Get Involved</span>
              <svg class="icon" role="presentation" focusable="false">
                <use xlink:href="${spritePath}#arrow"></use>
              </svg>
            </button>
          </div>
          <ul class="global-nav__submenu" aria-label="Get Involved submenu">
            <li><a href="#">Donate</a></li>
            <li><a href="#">Partner</a></li>
            <li><a href="#">Volunteer</a></li>
            <li><a href="#">Work For Us</a></li>
          </ul>
        </li>
      </ul>
    </nav>`;
}