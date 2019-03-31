window.addEventListener('DOMContentLoaded', () => {
  $.each('.js-counter', el => {
    const dec = $.qs('.js-counter-minus', el);
    const inc = $.qs('.js-counter-plus', el);

    const num = $.qs('.js-counter-num', el);
    const input = $.qs('.js-counter-input', el);

    // Decrement
    dec.addEventListener('click', () => {
      const value = +input.value;

      if (value !== 1) {
        const newValue = value - 1;
        input.value = newValue;
        num.textContent = newValue;
      }
    });

    // Increment
    inc.addEventListener('click', () => {
      const value = +input.value;
      const newValue = value + 1;

      input.value = newValue;
      num.textContent = newValue;
    });
  });
});
