//Variáveis
const screen1 = document.querySelector('#screen1')
const screen2 = document.querySelector('#screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
//----------------------------------------------

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleEnterClick)
//--------------------------------------------------

//Função Callback proveninente do 1º evento acima
function handleTryClick(loadPage) {
  //Em outras palavras, não faça o padrão que, nesse caso, do formulário, seria envia-lo recarregando a página
  loadPage.preventDefault()
  // ---------------------------------------
  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) === '') {
    alert('Por favor, insira um número')
    return
  }

  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert('Por favor, insira um número entre 0 e 10')
  }

  if (Number(inputNumber.value) == randomNumber) {
    // Se o nº for igual, ou seja, tiver acertado, vai remover o a class 'HIDE' da SEGUNDA página e COLOCAR na primeira.
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document.querySelector('#screen2 h2').innerText = `Você acertou em ${xAttempts} tentativas `
  }

  inputNumber.value = ''

  xAttempts++
}

//Função Callback proveninente do 2º evento acima
function handleResetClick(){
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}



// DESAFIOS:

// 1) Pegar a função do 'keydown' e jogar para fora junto com as outras funções 'callbacks'.
function handleEnterClick(pressEnter) {
  if(pressEnter.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
}
}
// 2) Fazer um limite para só poder deixar o input escolher entre os números 0 e 10.
// Este exercicio está resolvido dentro da função handleTryClick

// 3) Colocar a validação de que tem que ter um número digitado no INPUT para para computar a jogada.
// Este exercicio está resolvido dentro da função handleTryClick