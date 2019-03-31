export default class Range {
  constructor(el, { min, max } = { min: 0, max: 100 }) {
    // DOM
    this.DOM = { el };
    this.DOM.input = $.qs('input', this.DOM.el);
    this.DOM.track = $.qs('.range__track', this.DOM.el);

    // min & max values
    this.min = this.DOM.input.min || min;
    this.max = this.DOM.input.max || max;

    // Handlers
    this.initEvents();

    // Draw on init
    this.draw(this.DOM.input.value);
  }

  initEvents() {
    // Draw on input
    this.DOM.input.addEventListener('input', () => {
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
