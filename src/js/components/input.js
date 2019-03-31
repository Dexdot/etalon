export default class Input {
  constructor(el) {
    this.el = el;
    this.input = $.qs('.input__field', this.el);

    this.setup();
  }

  setup() {
    this.keyup();
  }

  keyup() {
    this.input.addEventListener('keyup', () => {
      if (this.input.value.length > 0) {
        this.el.classList.add('input--filled');
      } else {
        this.el.classList.remove('input--filled');
      }
    });
  }
}
