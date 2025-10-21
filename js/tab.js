class Tabs {
  constructor(selector) {
    this.aboutBlockContainer = document.querySelector(selector);
    if (!this.aboutBlockContainer) return; // no tabs on this page

    this.aboutButtons =
      this.aboutBlockContainer.querySelectorAll(".about__button");
    this.aboutContents =
      this.aboutBlockContainer.querySelectorAll(".about__content");

    this.aboutButtons.forEach((aboutButton) => {
      aboutButton.addEventListener("click", (event) =>
        this.aboutClicked(event)
      );
    });
  }

  aboutClicked(event) {
    const clickedButton = event.currentTarget;
    const aboutID = clickedButton.dataset.tab;
    const detailsElement = this.aboutBlockContainer.querySelector(
      `.about__content[data-tab-content="${aboutID}"]`
    );
    this.aboutButtons.forEach((button) => {
      button.classList.remove("currently-selected-tab");
    });
    this.aboutContents.forEach((content) => {
      content.classList.remove("currently-selected-tab");
    });
    clickedButton.classList.add("currently-selected-tab");
    detailsElement.classList.add("currently-selected-tab");
  }
}

export default function initTabs() {
  new Tabs(".about-block");
}
