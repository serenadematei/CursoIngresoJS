function mostrar()
{
	var edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13) {
		alert("Es un niño");
	} 
	else if (edad > 18) {
		alert ("Es un adulto");
	    } 
	    else if (edad >=13 && edad<=17) {
			alert("Es un adolescente");
		}
		
	
	 



}//FIN DE LA FUNCIÓN