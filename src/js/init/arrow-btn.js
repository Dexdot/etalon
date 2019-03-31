window.addEventListener('DOMContentLoaded', () => {
  $.each('.arrow-btn', el => {
    el.addEventListener('mouseenter', () => {
      el.classList.add('arrow-btn--animated');
    });

    el.addEventListener('animationend', ({ animationName }) => {
      if (animationName === 'arrow') el.classList.remove('arrow-btn--animated');
    });
  });
});
