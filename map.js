//METODO MAP

var numeros=[];//multiplicar cada uno de los eementos de numero *2

/*
console.log("Array original:"+ numeros);//me muestra el array
console.log(" Array * 2:"+ numerosMultiplicados);//me muestra el resultado de la cuenta
/*la funcion puede no recibir parametros,
 son los mismo que en el forEach. */


//esto es para hacer un array de 1000 y
// luego a cada uno sumarle 10. 


for (var i= 0; i<=1000; i++) {
	numeros[i]=i;
};

console.log(numeros);

var numerosMultiplicados= numeros.map(function(numero){

	return numero +10; 
});
	
console.log(numerosMultiplicados);




var upper=["dulce de leche", "frutilla", "sambayon", "chocolate"];

var nuevoupper= upper.map(function(e){

	 return e.toUpperCase();
	 
});
console.log(nuevoupper);

var array =[10,4,5,90,11,11,34,8,2,2,7,0]; //devolver un array nuevo que no contenga los repetidos

//ver repetidos.js
