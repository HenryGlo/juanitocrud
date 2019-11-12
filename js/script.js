function input() {
	var fabricante = $("input#fabricante").val();
	var modelo = $("input#modelo").val();
	var monto = $("input#monto").val();
	var año = $("input#año").val();
	var ubicacion = $("input#ubicacion").val();
	var propietario = $("input#propietario").val();
	var arrayinput = [fabricante, modelo, monto, año, ubicacion, propietario];
	if (localStorage.getItem('datos')) {
		var array1 = [];
		array1 = JSON.parse(localStorage.getItem("datos"));
		array1.push(arrayinput);
		localStorage.setItem('datos', JSON.stringify(array1));
	} else {
		localStorage.setItem('datos', JSON.stringify([]));
		var array1 = [];
		array1 = JSON.parse(localStorage.getItem("datos"));
		array1.push(arrayinput);
		localStorage.setItem('datos', JSON.stringify(array1));
	}
}

function datoshtml() {
	var datos = JSON.parse(localStorage.getItem("datos"));
	console.log(datos);
	datos.forEach(function (datos, id) {
		$(".table tbody").append("<tr><td>" + datos[0] + "</td><td>" + datos[1] + "</td><td>" + datos[3] + "</td><td>" + datos[4] + "</td><td>" + datos[5] + "</td><td id='eliminar'>Eliminar</td>/tr>");
	});
}

$(document).ready(function () {
	$("#guardar").click(function () {
		input();
		location.reload();
	});
	datoshtml();
});