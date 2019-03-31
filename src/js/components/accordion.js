export default class Accordion {
  constructor(el = {}) {
    this.el = el;
    this.accordions = Array.from(this.el.children);
    this.buttons = this.accordions.map(acc => acc.firstElementChild);

    const self = this;
    this.buttons.forEach(btn => {
      btn.addEventListener('click', function onAccordionButtonClick() {
        self.button = this;
        self.dropdown();
      });
    });
  }

  dropdown() {
    // Current content
    const content = this.button.nextElementSibling;
    document.documentElement.style.setProperty(
      '--acc-max-height',
      `${content.scrollHeight}px`
    );
    content.parentElement.classList.toggle('active');

    // Other contents
    const currentIndex = this.accordions.indexOf(content.parentElement);
    const others = this.accordions.filter((el, i) => i !== currentIndex);

    others.forEach(el => {
      el.classList.remove('active');
    });
  }
}
