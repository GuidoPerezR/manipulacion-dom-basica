const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const subtitulo = document.getElementsByClassName('subtitulo')
const subsubtitulo = document.getElementById('subsubtitulo')
const input = document.querySelector('input')

console.log(input.value)

console.log({
    h1, p, subsubtitulo, subtitulo
})

h1.innerHTML = "iiiih te cambie. Wachate esto." //Cambiar codigo html pero libre de ataque

p.innerText = "soy mas seguro we" //Cambiar codigo solo a texto mas seguro

subsubtitulo.innerHTML = "";

const img = document.createElement('img');
img.setAttribute('src', 'https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudio-blanco_155003-13189.jpg?w=2000');
subsubtitulo.append(img);