function mostrar()
{
	//tomo la edad  
	var edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
		alert("Es mayor de edad");
	}
	

	else  {
		
		alert("Es menor de edad")
	}
	

	alert("Fin de la funcion")

}//FIN DE LA FUNCIÓN