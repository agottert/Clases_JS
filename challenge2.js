

/*Challenge I - Level II
Objetivo: Juego Generala
Pautas: emular el juego de la generala teniendo en cuenta que el jugador podrá lanzar 5
dados, cuyos valores serán aleatorios.
Se deberá guardar en un arreglo los valores obtenidos del juego y el puntaje elegido.
Se considera ganador a quien consiga generala en 20 tiros de dados, de lo contrario el juego
 terminará y se mostrará el mayor puntaje obtenido.*/

 

for (var i = 0; i<20; i++) {
	var array=[];
	

  for (var j = 0; j<5; j++) {
 	
 	var dado=Math.ceil(Math.random()*6);
 	array[j]= dado
 	
 }
 array.sort();
 console.log (array);


}

function puntaje(dados){

}
