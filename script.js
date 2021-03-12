function createLetter() {
  const message = document.getElementById('carta-texto');
  const letter = document.getElementById('carta-gerada');
  const helper = message.value.split(' ');
  for (let index = 0; index < helper.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = helper[index];
    letter.appendChild(span);
  }
}

function createBtn() {
  const createBtn = document.getElementById('criar-carta');
  createBtn.addEventListener('click', createLetter);
}

createBtn();