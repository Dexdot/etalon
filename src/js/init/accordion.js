import Accordion from '@/components/accordion';

window.addEventListener('DOMContentLoaded', () => {
  $.each('.js-accordion', el => {
    const acc = new Accordion(el);
  });
});
