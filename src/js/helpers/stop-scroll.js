const html = document.querySelector('html');

const freezeVp = e => {
  e.preventDefault();
};

const disable = () => {
  html.classList.add('no-scroll');

  document.body.addEventListener('touchmove', freezeVp, false);
};
const enable = () => {
  html.classList.remove('no-scroll');

  document.body.removeEventListener('touchmove', freezeVp, false);
};

export default { disable, enable };
