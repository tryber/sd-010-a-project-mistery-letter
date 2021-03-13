const letterP = document.getElementById('carta-gerada');
function clearAll() {
  while (letterP.firstChild) {
    letterP.removeChild(letterP.firstChild);
  }
}

document.getElementById('criar-carta').addEventListener('click', clearAll);

function generateLetter() {
  const str = document.getElementById('carta-texto').value;
  const arr = str.split(' ');
  for (let index = 0; index < arr.length; index += 1) {
    const tagSpan = document.createElement('span');
    tagSpan.innerText = arr[index];
    letterP.appendChild(tagSpan);
  }
  if (str === '' || str === ' ') {
    letterP.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

document.getElementById('criar-carta').addEventListener('click', generateLetter);
