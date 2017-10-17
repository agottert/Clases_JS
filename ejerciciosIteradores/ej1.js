

/*Ejercicio 1 - Cargar de forma automática incremental, un array de números a partir de un largo
dado por el usuario.*/
/*var arreglo= new Array(10)*/



var n=prompt("Escriba un numero:");

var x=parseInt(n);

var a=[];
//a[400]=1000;

for (var i=0; i<x; i++) {
	//array.push(i);
	a[i]=i+1;

}
console.log(a);


/* 
var numero=prompt("Escriba un numero:");
var auto=[];
for (var i=1; i<numero; i++) {
	auto=i;
    console.log(auto);	

---------------------------------------------------------------------------------------

}*/
