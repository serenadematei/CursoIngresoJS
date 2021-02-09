/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 var importe;
 var aumento;
 var resultado;
 

 resultado = document.getElementById("txtIdResultado").value;
 importe = document.getElementById("txtIdSueldo").value;
 importe = parseInt(importe);
 

 aumento = importe * 10/100
 resultado = importe + aumento;
	

 document.getElementById("txtIdResultado").value = resultado
}
