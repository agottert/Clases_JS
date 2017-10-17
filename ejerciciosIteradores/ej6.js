/*
Ejercicio 6 – Dados los siguientes arreglos:
X = [“a”,”l”,”f”,”a”];
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”]
Crear un bloque de código que permita determinar si:
• Ambos arreglos son iguales
• Cuál de los dos es más largo
• Cuantas letras tienen en común
*
*/

var x= ["a","l","f","a"];
var y= ["a","l","f","a","j","o","r"];
//var c=0;
//var cc=0;
var ccc=0;
var z=[];

if ( x.length!==y.length){
	console.log( "los arrays son distintos");
	if (x.length>y.length){
		console.log( "El array x es más largo que el y");
	} else { 
	    console.log( "El array y es más largo que el x");
	}

} else {
	console.log( "los arrays son iguales de largo");
}

for (var i=0; i<x.length; i++) {

	for (var j=0;j<y.length; j++) {

	 	if (y[j]===x[i]){

	 		// recorro z buscando y[j]
	 		var estaContenido = false;
	 		for (var k = 0; k < z.length ; k++) {
	 			if (z[k] === y[j]) {
	 				estaContenido = true;/*(bandera)*/
	 			}
	 		}

	 	    if (!estaContenido) {
	 	    	z[z.length]=y[j];
	 			ccc=ccc+1;
	 	    }
        }
	}
}
console.log("Cantidad de coincidencias:"+ccc);
console.log(z);






/* 
var xL=x.length;
var yL=y.length;

var  distinto = false;
if (xL== yL){

	for(i=0;i<xL; i++){
		if (x[i] != y[i]){
			distinto=true;
	
		}
	
}else{
	if (xL>yL){
		console.log("X es mas largo");
		N=yL;
		M=xL;
	
	}else{ 
	    console.log("Y es mas largo");
	    N=yL;
		M=xL;
	
	}
}
var cont=0;
for (i=0; i<N; i++){
	for (j=0; j<yL; j++){
		if (x[i]==y[j]){
	
		cont++;

		}


	
	}

	
	
	
}

*/
/*for (var i=0; i<=x.length-1; i++) {
	c=c+1;
}
console.log("Numero de posiciones de array x: "+c);

for (var a=0; a<=y.length-1; a++) {
	cc=cc+1;
	
}
console.log("Numero de posiciones de array y: "+cc);

if (cc!==c){
	console.log("Los arrays x e y no son iguales");
} else{ 
	console.log("Los arrays son iguales");
}
if (c>cc){
	console.log("El array x es mayor a el array y con: "+c+ "posiciones.");
} else{ 
	console.log("El array y es mayor a el array x con "+cc+" posiciones.");
}

for (var i=0; i<=x.length-1; i++) {

	 for (var a=0; a<=y.length-1; a++) {
	 	if (y[a]===x[i]){
	 		ccc=ccc+1;
	 	}
	 

	 }
	

}

	console.log(" Cantidad de coincidencias:"+(ccc);


*/
