

/*Ejercicio 2 - Repetir el ejercicio anterior, ubicando 0 (ceros),en las
 posiciones pares y un valor que coincida con el índice
 en las posiciones impares.*/
var n=prompt("Escriba un numero:");

var x=parseInt(n);

var array=[];

for (var i=0; i<=n; i++) {
	array.push(i);
	if (i%2==0){
	array[i]=0;
    } else {
		array[i]=i;
		
	}

}
console.log(array);