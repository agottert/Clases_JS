


var random= Math.floor(math.random()*10);//el *10 es porque ramdom es de 0 a 1

console.log(random);

/*.round(,2) para que quede en dos digitos, tiene dos parametros, el ultimo es cant de decimales
.floor() redondea para abajo
.ceil() redondea para arriba
*/
var disfraces=[]
function randomHalloween (disfraces){
	posicion=Math.floor((Math.floor)*(disfraces.length-1));
	return disfraces[posicion];
	// elijo el disfraz en esa posicion

}