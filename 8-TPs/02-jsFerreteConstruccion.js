/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
    var largoTerreno;
    var anchoTerreno;
    var metroCuadrado;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    //calculo el espacio total del terreno
    metroCuadrado = largoTerreno * anchoTerreno;


    // multiplico el espacio total del terreno por 3 (ya que se solicitan 3 hilos de alambre)
    resultado1 = metroCuadrado * 3;

    alert("La cantidad de alambre que se requiere para su terreno rectangular es de " + resultado1 + " metros");


}
function Circulo () 
{ 

    var radioTerreno;
    var circunferencia;
    var resultado2;

    radioTerreno = document.getElementById("txtIdRadio").value;
    radioTerreno =parseInt(radioTerreno); 

    //calculo la circunferencia del terreno
    circunferencia = 2 * 3.14 * radioTerreno;
 

    //multiplico la circunferencia por 3 (ya que se solicitan 3 hilos de alambre)
    resultado2 = circunferencia * 3;

    alert("La cantidad de alambre que se requiere para su terreno circular es de " + resultado2 + " metros");
	
}
function Materiales () 
{
    var largoTerreno;
    var anchoTerreno;
    var metroCuadrado;
    var bolsasCemento;
    var bolsasCal;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);

    //calculo el espacio total del terreno
    metroCuadrado = largoTerreno * anchoTerreno;

    //calculo la cantidad de bolsas de cemento que necesito

    bolsasCemento = metroCuadrado * 2;

    //calculo la cantidad de bolsas de cal que necesito

    bolsasCal = metroCuadrado * 3;


    alert("Para la construccion de su terreno rectancular necesitará " + bolsasCal + " bolsas de cal y " + bolsasCemento + " bolsas de cemento");

}