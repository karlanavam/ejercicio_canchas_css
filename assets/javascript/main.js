
var botonCanchaFoot = document.getElementById("botonFootball");
botonCanchaFoot.addEventListener('click', mostrarCanchaFoot);
botonCanchaFoot.addEventListener('dblclick', ocultarCanchaFoot);

function mostrarCanchaFoot () {
	var canchaFoot = document.getElementById('canchaFoot');
	canchaFoot.style.display = "block";
}


function ocultarCanchaFoot () {
	var canchaFoot = document.getElementById('canchaFoot');
	canchaFoot.style.display = "none";
}