/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var suma;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    primerPrecio= parseInt (primerPrecio);
    segundoPrecio= parseInt (segundoPrecio);
    tercerPrecio= parseInt(tercerPrecio);

    suma = primerPrecio + segundoPrecio + tercerPrecio;
    alert("La suma de los tres precios es de " + suma);
	
}
function Promedio () 
{
	var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var suma;
    var promedio;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    primerPrecio= parseInt (primerPrecio);
    segundoPrecio= parseInt (segundoPrecio);
    tercerPrecio= parseInt(tercerPrecio);

    suma = primerPrecio + segundoPrecio + tercerPrecio;
    
    promedio = suma / 3;
    alert("El promedio de los tres precios es de " + promedio);
}
function PrecioFinal () 
{
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var suma;
    var calculoAumento;
    var resultado;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;

    primerPrecio= parseInt (primerPrecio);
    segundoPrecio= parseInt (segundoPrecio);
    tercerPrecio= parseInt(tercerPrecio);


    suma = primerPrecio + segundoPrecio + tercerPrecio;
    calculoAumento = suma * 21/100;
    resultado = suma + calculoAumento;
     
    alert("El precio final de los tres productos más el IVA es de "+ resultado);

    
    
	
}