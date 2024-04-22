


let barraInicio = document.getElementById("barraInicio");

let botonba = document.getElementById("botonba");
let botonac = document.getElementById("botonac");
let botonin = document.getElementById("botonInicio");
let botoncn= document.getElementById("botoncn");

const textoPD = document.getElementById("textopd");
const textoAC = document.getElementById("textoac");

let textoInicio = ``;

let textoPlantas = `<div class="hijoProducto"></div>
<div class="hijoProducto" ></div>
<div class="hijoProducto"></div>
<div class="hijoProducto"></div>
<div class="hijoProducto"></div>
<div class="hijoProducto"></div>
<div class="hijoProducto"></div>
<div class="hijoProducto"></div>
<div class="hijoProducto"></div>
<div class="hijoProducto"></div>
</div>`;

let textoAccesorios = `<div class="accesorios">
<div class="hijoAccesorios"></div>
<div class="hijoAccesorios"></div>
<div class="hijoAccesorios"></div>
<div class="hijoAccesorios"></div>
<div class="hijoAccesorios"></div>
<div class="hijoAccesorios"></div>
<div class="hijoAccesorios"></div>
<div class="hijoAccesorios"></div>
<div class="hijoAccesorios"></div>
<div class="hijoAccesorios"></div>
</div>`;

let textocontacto = `<a href="https://mail.google.com/">Gomexg4@gmail.com</a>`;





botonba.addEventListener("click", () => {
    console.log("click")
    textoPD.innerHTML = textoPlantas;

});


botonac.addEventListener("click", () => {
    console.log("click")
    textoPD.innerHTML = textoAccesorios;

});

botonin.addEventListener("click", () => {
    console.log("click")
    textoPD.innerHTML = textoInicio;

});

botoncn.addEventListener("click", () => {
    console.log("click")
    textoPD.innerHTML = textocontacto;

});



