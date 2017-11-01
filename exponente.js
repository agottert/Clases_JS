 
/*Ejercicio 1: Escribir una función que dado un número X (base) y un número N (potencia),
devuelva el resultado de realizar XN*/

 function funcion(base, exponente){
 	//si es 0 no entra al for por eso funciona, no pusimos <= exponente

 	var resultado=1;
 	for (var i=0; i<exponente; i++) {

 		resultado=resultado*base 		
 	}
 	return resultado;
 }

 var potencia= funcion (10.25,0);
 console.log(potencia);