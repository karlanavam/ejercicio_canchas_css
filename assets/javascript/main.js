 //Botones cancha football
var botonCanchaFoot = document.getElementById("botonFootball");
botonCanchaFoot.addEventListener('click', mostrarCanchaFoot);
botonCanchaFoot.addEventListener('dblclick', ocultarCanchaFoot);

 //Botones cancha basketball
var botonCanchaBasket = document.getElementById('botonBasketball');
botonCanchaBasket.addEventListener('click', mostrarCanchaBasket);
botonCanchaBasket.addEventListener('dblclick', ocultarCanchaBasket);

//Botones cancha Tennis
var botonCanchaTennis = document.getElementById('botonTennis');
botonCanchaTennis.addEventListener('click', mostrarCanchaTennis);
botonCanchaTennis.addEventListener('dblclick', ocultarCanchaTennis);

 //Funciones cancha football
function mostrarCanchaFoot () {
	var canchaFoot = document.getElementById('canchaFoot');
	canchaFoot.style.display = "block";
}
function ocultarCanchaFoot () {
	var canchaFoot = document.getElementById('canchaFoot');
	canchaFoot.style.display = "none";
}

 //Funciones cancha basketball
function mostrarCanchaBasket () {
	var canchaBasket = document.getElementById('canchaBasket');
	canchaBasket.style.display = "block";
}
function ocultarCanchaBasket () {
	var canchaBasket = document.getElementById('canchaBasket');
	canchaBasket.style.display = "none";
}

//Funciones cancha Tennis
function mostrarCanchaTennis () {
 var canchaTennis = document.getElementById('canchaTennis');
 canchaTennis.style.display = "block";
}
function ocultarCanchaTennis () {
 var canchaTennis = document.getElementById('canchaTennis');
 canchaTennis.style.display = "none";
}
