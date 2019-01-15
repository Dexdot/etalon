export default class Range {
  constructor(el, { min, max } = { min: 0, max: 100 }) {
    // DOM
    this.DOM = { el };
    this.DOM.input = this.DOM.el.querySelector('input');
    this.DOM.track = this.DOM.el.querySelector('.range__track');

    // min & max values
    this.min = this.DOM.input.min || min;
    this.max = this.DOM.input.max || max;

    // Handlers
    this.initEvents();

    // Draw on init
    this.draw(this.DOM.input.value);
  }

  initEvents() {
    this.DOM.input.addEventListener('input', () => {
      // Draw on input
      this.draw(this.DOM.input.value);
    });
  }

  draw = val => {
    // Get percent value
    // Example: 50 => 0.5; 25 => 0.25; 100 => 1
    const scale = (val - this.min) / (this.max - this.min);

    // Set scaleX style
    this.DOM.track.style.transform = `scaleX(${scale})`;
  };
}
