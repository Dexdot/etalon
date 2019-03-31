import init from 'autosize';

// Init fn
const autosize = field => {
  const setParentHeight = (child, height) => {
    child.parentElement.style.height = `${height}px`;
  };

  init(field);

  field.addEventListener('autosize:resized', function onAutosizeResized() {
    const height = +this.style.height.split('px')[0];
    setParentHeight(this, height);
  });

  // Set initital height
  setParentHeight(field, +field.style.height.split('px')[0]);
};

// Init
window.addEventListener('DOMContentLoaded', () => {
  $.each('.js-autosize', el => {
    autosize(el);
  });
});

export default autosize;
