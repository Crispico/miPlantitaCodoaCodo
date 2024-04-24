


let barraInicio = document.getElementById("barraInicio");

let botonba = document.getElementById("botonba");
let botonac = document.getElementById("botonac");
let botonin = document.getElementById("botonInicio");
let botoncn= document.getElementById("botoncn");

const textoPD = document.getElementById("textopd");
const textoAC = document.getElementById("textoac");

let textoInicio = `<div class="poductos" id="textopd">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias libero aut unde esse, provident nihil omnis explicabo. Labore iusto asperiores, dolorem vero eveniet natus similique ut quas eius molestiae quae?</div>`;

let textoPlantas = `<div class="poductos" id="textopd">
<div class="hijoProducto" style="background-image: url(repositorio/crasas-en-maceta_00483489_21c54e9d_1333x2000.jpg);"></div>
<div class="hijoProducto" style="background-image: url(repositorio/Diphembachia--370x500.webp);"></div>
<div class="hijoProducto" style="background-image: url(repositorio/pexels-nadiye-odabasi-10467814-scaled.jpg);"></div>
<div class="hijoProducto" style="background-image: url(repositorio/tronco-de-brasil-pinterest_e9b3d66c_1000x1500.jpg)"></div>


</div>`;

let textoAccesorios = `<div class="accesorios" id="textoac">
<div class="hijoAccesorios" style="background-image: url(repositorio/ab620af9-cf30-484b-8eb8-7c31a211601a1-cae54e59c629895c4016570535528993-240-0.jpeg)"></div>
<div class="hijoAccesorios" style="background-image: url(repositorio/IMG_7777-scaled.webp);"></div>
<div class="hijoAccesorios" style="background-image: url(repositorio/Sesion-de-estudio-212-1-1-500x500.webp);"></div>
<div class="hijoAccesorios" style="background-image: url(repositorio/D_NQ_NP_938219-MLA70369161350_072023-O.webp);"></div>


</div>`;

let textocontacto = `<div class="poductos" id="textopd"><a href="https://mail.google.com/">Gomexg4@gmail.com</a>
 </div>`;




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



