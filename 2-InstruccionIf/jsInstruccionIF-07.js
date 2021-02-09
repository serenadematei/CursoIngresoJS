function mostrar()
{
	var edad;
	var estadoCivil;


	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	//soltero va entre comillas, ya que es una opcion que ofrece la pc y NO una variable definida
	//RESPETAR LA MAYUSCULA EN "Soltero", sino no funciona. 
	if (edad < 18 && estadoCivil != "Soltero") {
		alert("Es muy pequeño para no ser soltero")
	}


	


}//FIN DE LA FUNCIÓN