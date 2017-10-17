/*Ejercicio 7 – Dado el siguiente array datos1 = [“Fido”,”Gomez”,26,15000.78,true] y
 datos2 = [“Gervasio”,”Fernandez”,32,28.550,false]
Determinar:
• ¿Cuál de los dos personajes es más viejo?
• ¿Cuál de los dos personajes está casado?
• Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, cuanto será el
monto a cobrar?*/

/*var datos1=["Fido","Gomez",26,15000.78,true];
var datos2 = ["Gervasio","Fernandez",32,28.550,false];
var aumento=0;
if ((datos1[2]>datos2[2])==true){
	console.log("Fido es mayor a Gervasio");
}else{
	console.log("Gervasio es mayor a Fido");
}


if ((datos2[4] && datos1[4])==true){
	console.log("Estan los dos casados")
} else if ((datos2[4]==false) && (datos1[4]==false)) {
	console.log("ninguno esta casado")
} else if ((datos2[4]==true) && (datos1[4]==false)) {
	console.log("Gervasio esta casado");
} else {
	console.log("Fido esta casado")
}


aumento = ((datos2[3]*0.125)+datos1[3]);
console.log("El sueldo con aumento de Fido es: $"+ aumento);

/*
*/
var aumento=0;
var datos1=["Fido","Gomez",26,15000.78,true];
var datos2 = ["Gervasio","Fernandez",32,28.550,false];
var i;
for (i=0; i<datos1.length;i++){
	   if (Number.isInteger(datos1[i]) && Number.isInteger(datos2[i])) {
			if (datos1[i]>datos2[i]){
				console.log("Fido es mayor");
	
			} else {
		        console.log("Fido es menor")
	
	        }

        }
     
     if (typeof(datos1[i])=="boolean" && typeof(datos2[i])=="boolean"){
     	 if (datos1[i]){
     	 	console.log("Fido es Casado");
	
     	 }
     	 if (datos2[i]===true /*como es booleano no es necesario poner true*/){
     	 	console.log(" Gervasio es Casado");
	     }

      }

      if (typeof(datos1[i])=="number" && typeof(datos2[i])=="number"){
      	if (Number.isInteger(datos1[i])==false && Number.isInteger(datos2[i])==false){
      	    aumento = ((datos2[i]*0.125)+datos1[i]);

      		console.log("El aumento es : $:"+ aumento.toFixed(2));


      	}
      }


  }

/*
(datos1[i].isInteger() && (datos1[i].isInteger())                                    (datos1[i]>datos2[i])         
 
0    false                     false                      false
1    false                     false                      false
2    true                      true                       true       Llego a la segunda parte... false
               
3    false                     false                      false

4    false                     false                      false

*/







	