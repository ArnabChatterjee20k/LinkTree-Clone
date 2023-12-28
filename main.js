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

const addLinkButton = document.querySelector(".add-link-btn");
addLinkButton.addEventListener("click", (e) => {
  const linksEditor = document.querySelector(".all-links");
  const component = LinkComponent();
  linksEditor.innerHTML += component;
});

function LinkComponent() {
  return `<div class="links-viewer">
            <div class="links-viewer-heading">
              <p>Link</p>
              <button>Remove</button>
            </div>
            <div class="links-viewer-links">
              <label for="platform">Platform</label>
              <select name="platform" id="platform">
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
