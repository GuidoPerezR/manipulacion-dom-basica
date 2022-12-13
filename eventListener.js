const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular')
const result = document.getElementById('result')
const formulario = document.getElementById('formulario')

//btn.addEventListener('click', btnOnClick)
/*
function btnOnClick(){
    a = Number(input1.value)
    b = Number(input2.value)
    let sumResult = a + b;
    result.innerText = "El resultado de la suma de los dos numeros es " + sumResult;
}*/

formulario.addEventListener('submit', sumarNumeros)

function sumarNumeros(event){
    event.preventDefault();
    a = Number(input1.value)
    b = Number(input2.value)
    let sumResult = a + b;
    result.innerText = "El resultado de la suma de los dos numeros es " + sumResult;
}
