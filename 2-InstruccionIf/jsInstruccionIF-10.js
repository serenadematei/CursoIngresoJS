function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;

	//Math.floor(Math.random()*10) es la formula para retornar un interger random from 0 to 9(10 EXCLUSIVE)
	notaRandom = Math.floor(Math.random()*11 );


	if (notaRandom == 9 || notaRandom == 10) {
		alert(notaRandom + " Excelente");
	}
	else if (notaRandom > 4 && notaRandom < 9) {
		alert(notaRandom + " Aprobó");
	    }
		else if (notaRandom < 4) {
			alert(notaRandom + " Vamos, la próxima se puede");
		}	
		
	
		



}//FIN DE LA FUNCIÓN