import Range from '@/components/range';

window.addEventListener('DOMContentLoaded', () => {
  const ranges = [];

  $.each('.range', el => {
    ranges.push(new Range(el));
  });
});
