/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var calculoConversion;


    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura =parseInt(temperatura);

    //Realizo el calculo para pasar de Fahrenheit a Centigrados
    calculoConversion = (temperatura - 32) / 1.8;

    //Formula para determinar cantidad de números despues de la coma que deseo que me muestre
    calculoConversion = calculoConversion.toFixed(0);

    alert(temperatura  + " grados fahrenheit son " + calculoConversion + " grados centígrados");

 

}

function CentigradosFahrenheit () 
{
    var temperatura;
    var calculoConversion;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura =parseInt(temperatura);

    calculoConversion = (temperatura * 1.8) + 32;
    calculoConversion = calculoConversion.toFixed(0);

    alert(temperatura + " grados centígrados son " + calculoConversion + " grados fahrenheit");

}
