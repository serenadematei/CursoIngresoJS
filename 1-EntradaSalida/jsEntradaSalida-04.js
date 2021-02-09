/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//var nombre;

	//nombre = prompt("Ingrese su nombre","Por ej Juan");

	// document.getElementById("txtIdNombre").value = nombre


	var descripcion;
	var precioProducto;
	var aumento;
	var precioFinal;

	descripcion = prompt("Ingrese descripción del producto");
	document.getElementById("txtIdNombre").value = precioProducto
	
	precioProducto =parseInt(precioProducto);

	aumento = precioProducto * 30/100
	precioFinal = precioProducto + aumento

	alert("Este producto es "+descripcion + " y su precio final con el aumento del 30% es "+ precioFinal)
}

