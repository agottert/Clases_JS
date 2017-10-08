
/*Ejercicio 1 – Un sistema de fidelización de usuarios implementa la siguiente regla para la
adquisición de productos del catálogo. Se pide determinar la lógica de canje.
- El producto X que se desea canjear tiene un valor determinado en cantidad de puntos.
- Si el cliente que lo quiere canjear tiene la cantidad de puntos requerida realiza
directamente el canje.
- Si el cliente tiene el 50% de los puntos requeridos, podrá completar el canje con dinero,
en ese caso cada peso equivaldrá a 3 puntos.
- Si el cliente tiene el 50% de los puntos requeridos, pero a su vez tiene categoría
premium, la relación pesos puntos será 1 a 5.
*/



var puntos=500;
var canje=1000;
var premium=true;
var pesos;

if (canje>=canje){
	console.log("Puede realizar el canje");
} else if (puntos>=canje *0.5 && premium==false){
	pesos=(caanje-puntos)/3;
	console.log("Usted podra completar su canje con $"+pesos+".")
}else if (puntos>=canje *0.5 && premium==true){
	pesos=(caanje-puntos)/5;
	console.log("Usted podra completar su canje con $"+pesos+" ")
} else { console.log ("Sus puntos no le alcanzan, lo sentimos.")

}

/*
if (canje>=canje){
	
	} else if(premium==true){ up=/5;
		}else {up=1/3;}
	
	if (puntos>=0.5*canje){
	  faltantes=(canje-puntos);
	  pesos=up *faltantes;
	  else {no faltantes
	  }	




*/


