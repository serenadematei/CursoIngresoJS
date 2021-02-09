function mostrar()
{
	//tomo la edad 

	var edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//pregunto si no estoy dentro del rango (forma contraintuitiva)
	if( !(edad >=13 && edad <=17)){
		alert("No es adolescente")
		
    }

	//pregunto si estoy dentro del rango
	//if (edad < 13 || edad > 17) {
	 // alert ("No es adolescente");
	  

}//FIN DE LA FUNCIÓN