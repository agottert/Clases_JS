


//var random= Math.floor(math.random()*10);//el *10 es porque ramdom es de 0 a 1

//console.log(random);

/*.round(,2) para que quede en dos digitos, tiene dos parametros, el ultimo es cant de decimales
.floor() redondea para abajo
.ceil() redondea para arriba
*/
// var disfraces=["unicornio","Alice in Wonderland","Pikachu", "Hello Kitty", "Charlotte Caniggia", "Alex Caniggia", "Gogo Yubari", "Audrey Hepburn breakfast at Tiffanys", "orejas de tigre", "Doctora", "coneja", "Cleopatra", "estudiante de slytherin"];

var disfraces=["unicornio","Alice in Wonderland","Pikachu"];
function randomHalloween (){
	var copia = disfraces.slice(); // copia el array
	var posicion=Math.floor(Math.random() * copia.length);
	var guardar= copia[posicion];
	delete copia[posicion];
	return guardar;
	// elijo el disfraz en esa posicion
}

/*
function randomHalloween (){
	posicion=Math.floor(Math.random()*(disfraces.length-1));
	return disfraces[posicion];
	// elijo el disfraz en esa posicion
}*/
console.log(randomHalloween());
console.log(disfraces);