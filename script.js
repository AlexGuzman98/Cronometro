//
// Práctica 10 - Cronómetro
//
let cronometro = 0 ; conteo = 0;
function iniciar(){
  const iniciar = document.getElementById('cronometro'); cronometro++;
  iniciar.innerHTML = cronometro;
}
function cont (){
    conteo = window.setInterval(iniciar, 1000);
}
const btninic = document.getElementById('iniciar');
btninic.addEventListener('click',cont);

function detener(){
    window.clearInterval(conteo);
}
const  btnstop =  document.getElementById('detener');
btnstop.addEventListener('click', detener);

function limpiar(){
    const clean = document.getElementById('cronometro');cronometro=0;
    clean.innerHTML = cronometro;
}
const btnclean = document.getElementById('limpiar');
btnclean.addEventListener('click',limpiar);

console.log('Esto es un cronómetro!');
