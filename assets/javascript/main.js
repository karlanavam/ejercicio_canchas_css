//VariablesGlobales
	var canchaFoot = document.getElementById('canchaFoot');
	var canchaBasket = document.getElementById('canchaBasket');
	var canchaTennis = document.getElementById('canchaTennis');

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
	canchaFoot.style.display = "block";
	canchaBasket.style.display = "none";
	canchaTennis.style.display = "none";
}

function ocultarCanchaFoot () {
	canchaFoot.style.display = "none";
	canchaBasket.style.display = "none";
	canchaTennis.style.display = "none";
}

 //Funciones cancha basketball
function mostrarCanchaBasket () {
	canchaBasket.style.display = "block";
	canchaFoot.style.display = "none";
	canchaTennis.style.display = "none";
}
function ocultarCanchaBasket () {
	canchaBasket.style.display = "none";
	canchaFoot.style.display = "none";
	canchaTennis.style.display = "none";
}

//Funciones cancha Tennis
function mostrarCanchaTennis () {
 canchaTennis.style.display = "block";
 canchaBasket.style.display = "none";
 canchaFoot.style.display = "none";
}
function ocultarCanchaTennis () {
 canchaTennis.style.display = "none";
 canchaBasket.style.display = "none";
 canchaFoot.style.display = "none";
}
