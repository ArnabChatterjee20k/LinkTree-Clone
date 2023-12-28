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

let totalLinksAdded = 0

const addLinkButton = document.querySelector(".add-link-btn");
addLinkButton.addEventListener("click", (e) => {
  const linksEditor = document.querySelector(".all-links");
  const component = LinkComponent();
  linksEditor.innerHTML += component;
  const selector = document.getElementById(String(totalLinksAdded)).querySelector("select")
  selector.onchange = changePlatform

});

function LinkComponent() {
  return `<div class="links-viewer" id=${generateID()}>
            <div class="links-viewer-heading">
              <p>Link</p>
              <button>Remove</button>
            </div>
            <div class="links-viewer-links">
              <label for="platform">Platform</label>
              <select name="platform" id="platform" onchange="changePlatform()">
                ${platforms.map(
                  (platformName, index) =>
                    `<option value=${index}>${platformName}</option>`
                )}
              </select>

              <label for="link">Link</label>
              <input type="text" name="link" id="link"/>
            </div>
          </div>`;
}

function changePlatform(e){
  const platformValue = platforms[e.target.value] 
  console.log(platformValue)
}

function generateID(){
  totalLinksAdded+=1;
  return totalLinksAdded
}