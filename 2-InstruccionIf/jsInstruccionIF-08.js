function mostrar()
{
	var edad;
	var estadoCivil;

	edad =parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	//Respeto la mayuscula en Soltero, tal cual está escrito en la pagina
	if (edad>18 && estadoCivil == "Soltero") {
		alert("Es soltero y no es menor");
		
	}
	


}//FIN DE LA FUNCIÓN