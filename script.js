
const styles = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];
const classTypes = [styles, size, rotation, inclination];
let wordCount = 0;

window.onload = () => {
  const a = document.createElement('div');
  a.setAttribute('id', 'lastone');
  const b = document.querySelector('body');
  b.appendChild(a);
}