import Range from '../components/range';

const items = document.querySelectorAll('.range');
const ranges = Array.from(items).map(item => new Range(item));
