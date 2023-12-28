const OPTIONS_CLASS_MAP = {
  links: "user-links",
  details: "user-data-details",
};

const linksTab = document.querySelector(`.${OPTIONS_CLASS_MAP.links}`);

const detailsTab = document.querySelector(`.${OPTIONS_CLASS_MAP.details}`);

const linksContainer = document.querySelector(`.links-add-section`);
const detailsContainer = document.querySelector(`.links-details-section`);

const container = document.querySelector(".container");

linksTab.addEventListener("click", () => {
  linksContainer.style.display = "block";
  detailsContainer.style.display = "none";
});

detailsTab.addEventListener("click", () => {
  detailsContainer.style.display = "block";
  linksContainer.style.display = "none";
});
