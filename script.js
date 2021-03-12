function createLetter() {
  const message = document.getElementById('carta-texto');
  const letter = document.getElementById('carta-gerada');
  const helper = message.value.split(' ');
  if (!message.value) {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    letter.innerText = '';
    for (let index = 0; index < helper.length; index += 1) {
      const span = document.createElement('span');
      span.innerText = helper[index];
      letter.appendChild(span);
    }
  }
}

function createBtn() {
  const createBtnInput = document.getElementById('criar-carta');
  createBtnInput.addEventListener('click', createLetter);
}

createBtn();
