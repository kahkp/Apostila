var inputTamanho = document.querySelector('[name=tamanho]')
var inputTamanho = document.querySelector('[name=valortamanho]')

function mostraTamanho(){
    outputTamanho.value = inputTamanho.value

}
inputTamanho.oninput = mostraTamanho