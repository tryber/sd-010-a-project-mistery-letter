const buttonGenLetter = document.getElementById('criar-carta');
const inputElement = document.getElementById('carta-texto');
const pElement = document.getElementById('carta-gerada');

function generateLetter() {
    const letterWords = inputElement.value.split(' ');
    let spans = document.querySelectorAll('#carta-gerada span');
    for (let indexS = 0; indexS < spans.length; indexS += 1) {
        spans[indexS].remove();
    }

    if (inputElement.value !== '') {
        if (inputElement.value !== '') {
            for (let i = 0; i < letterWords.length; i += 1) {
                const spanElement = document.createElement('span');
                const word = letterWords[i];
    
                if (word !== '') {
                    spanElement.innerText = letterWords[i];
                    pElement.appendChild(spanElement);
                }
            }
        }
    } else {
        pElement.innerText = 'Por favor, digite o conteúdo da carta.';
    }

}

buttonGenLetter.addEventListener('click', generateLetter);
