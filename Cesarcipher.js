

var palabra=['h', 'x', 'y','z'];
var letras=['a', 'b', 'c','d', 'e', 'f','g', 'h', 'i','j', 'k', 'l','m', 'n', 'o', 'p','q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z' ];
var cifrado=[];

 /*var cba=['a', 'b', 'c','d', 'e', 'f','g', 'h', 'i','j', 'k', 'l',
 'm', 'n', 'o', 'p','q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z' ];*/


 for (var i=0; i<palabra.length; i++) {

 	for (var j=0; j<letras.length; j++) {

 		if (palabra[i]==letras[j]){
 			cifrado[i]=letras[(3+j) % letras.length]; //para que vuelva a empezar cuando termina
 			console.log("La palabra encriptada: "+cifrado[i], "Palabra no encriptada:"+palabra[i] );

 		}

 		
 	}


 	
 }


