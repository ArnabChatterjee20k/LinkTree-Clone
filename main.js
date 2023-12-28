const OPTIONS_CLASS_MAP = {
  links: "user-links",
  details: "user-data-details",
};

const linksTab = document.querySelector(`.${OPTIONS_CLASS_MAP.links}`);

const detailsTab = document.querySelector(`.${OPTIONS_CLASS_MAP.details}`);

const linksContainer = document.querySelector(`.links-add-section`);
const detailsContainer = document.querySelector(`.links-details-section`);

linksContainer.style.display = "flex";
detailsContainer.style.display = "none";

const container = document.querySelector(".container");

linksTab.addEventListener("click", () => {
  linksContainer.style.display = "flex";
  detailsContainer.style.display = "none";
});

detailsTab.addEventListener("click", () => {
  detailsContainer.style.display = "flex";
  linksContainer.style.display = "none";
});

const platforms = ["github", "youtube", "linkedin", "twitter"];
const platformLinksMap = {};
platforms.map((p) => {
  platformLinksMap[p] = "";
});

function generateLinks(){
  
}