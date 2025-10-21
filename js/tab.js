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
      button.classList.remove("about__button--active");
    });
    this.aboutContents.forEach((content) => {
      content.classList.remove("about__content--active");
    });
    clickedButton.classList.add("about__button--active");
    detailsElement.classList.add("about__content--active");
  }
}

export default function initTabs() {
  new Tabs(".about-block");
}
