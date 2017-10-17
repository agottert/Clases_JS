/* Ejercicio 4 - Dado el arreglo de números del punto 3,
 mostrar por pantalla el valor máximo y su posición.*/

var x=[10,24,36,7,98,11,14,20];
var max=x[0];
var posicion=0;

for (var i=0 ; i<x.length; i++) {//con esto accedo a los elementos del arreglo
	if (x[i]>max){
		max=x[i];
		posicion=i;
	}
}

/*
var mayor;
var x=[10,24,36,7,98,11,14,20];
for (var i=0 ; i<x.length-1; i++) {//con esto accedo a los elementos del arreglo
	if (x[i]>x[i+1]){
		max=x[i];
		posicion=i; 

		IGUAL ESTA NO ES LA MANERA CORRECTA PORQUE ME HACE COMPARACION
		EN POSICION 8 QUE ES UNA POSICION QUE NO EXISTE. 
	}
}
*/
console.log(x);
console.log(max);
console.log(posicion);




