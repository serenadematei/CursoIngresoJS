/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	//var resto;
	var suma;
	var promedio;
	var modulo;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor=document.getElementById("txtIdNumeroDivisor").value;

	dividendo = parseInt(dividendo);
	divisor =parseInt(divisor);

    //resto = dividendo % divisor

	suma = divisor + dividendo
	promedio = suma /2 
	modulo= dividendo % divisor 
	
	console.log("La suma es " + suma + "El promedio es " + promedio + "El modulo es " + modulo);
	
	alert("El resto es "+ resto);


}
