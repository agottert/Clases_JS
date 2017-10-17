/*Ejercicio 5 - 
Dado el siguiente arreglo de números
 x = [10,24,36,7,98,11,14,20,98,14,10], mostrar por pantalla el valor máximo
 y la cantidad de veces que se repite.*/

var x=[10,24,36,7,98,11,14,20,98,14,10];
var max=x[0];

var c=0;

for (var i=0 ; i<x.length; i++) {
	if (x[i]>max){
		max=x[i];
		c=0;
	}

	if (x[i]==max){
		c=c+1;
	}
	
}


/*                                             */

console.log(x);
console.log(max);
console.log(c)


