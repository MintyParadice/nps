import { getParkData } from "./parkService.mjs";

function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

function mediaCardTemplate(info) {
  return `<div class="media-card">
  <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card__img">
    <h3 class="media-card__title">${info.name}</h3>
  </a>
  <p>${info.description}</p>
</div>`;
}

function getMailingAddress(addresses) {
  return addresses.find((address) => address.type === "Mailing");
}

function getVoicePhone(numbers) {
  const voice = numbers.find((number) => number.type === "Voice");
  return voice.phoneNumber;
}

function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div>
    <p>${mailing.line1}</p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
  </div>
  <h4>Phone:</h4>
  <p>${voice}</p>
</section>`;
}

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;
  document.querySelector("head > title").textContent = data.fullName;
  document.querySelector(".hero-banner > img").src = data.images[0].url;
  document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(data);
}

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.innerHTML = html.join("");
}

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.innerHTML = footerTemplate(data);
}

async function init() {
  try {
    const parkData = await getParkData();

    // built after the data arrives, since it uses parkData.images
    const parkInfoLinks = [
      {
        name: "Current Conditions &#x203A;",
        link: "conditions.html",
        image: parkData.images[2].url,
        description:
          "See what conditions to expect in the park before leaving on your trip!"
      },
      {
        name: "Fees and Passes &#x203A;",
        link: "fees.html",
        image: parkData.images[3].url,
        description: "Learn about the fees and passes that are available."
      },
      {
        name: "Visitor Centers &#x203A;",
        link: "visitor_centers.html",
        image: parkData.images[4].url,
        description: "Learn about the visitor centers in the park."
      }
    ];

    setHeaderInfo(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(parkInfoLinks);
    setFooter(parkData);
  } catch (err) {
    console.error("Failed to load park data:", err);
  }
}

init();
