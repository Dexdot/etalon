import Input from '@/components/input';

window.addEventListener('DOMContentLoaded', () => {
  const inputs = [];

  $.each('.input', el => {
    inputs.push(new Input(el));
  });
});
