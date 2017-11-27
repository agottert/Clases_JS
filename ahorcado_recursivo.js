function ahorcado(nivel){

  var palabrasNivel, puntos_para_ganar;
  switch (nivel) {
    case 1:
      palabrasNivel = nivel1.slice();
      puntos_para_ganar = 75;
      break;
    case 2:
      palabrasNivel = nivel2.slice();
      puntos_para_ganar = 120;
      break;
    case 3:
      palabrasNivel = nivel3.slice();
      puntos_para_ganar = 170;
      break;
    default:
      return false;
  }

  var puntos=0;
  for (var i=0; i<4; i++) {
    var posicion=Math.floor(Math.random() * palabrasNivel.length);
    var palabra=palabrasNivel.splice(posicion, 1)[0];
    console.log(palabra);
    
    var vidas=7
    var aciertos=0;  
    var letras_usadas=[];

    while(vidas>0) {
      var letra_repetida=false;
      var letra=prompt('Escriba una letra');

      for (var z=0 ; z<letras_usadas.length; z++) {
        if (letra==letras_usadas[z]){
          letra_repetida=true;
        }
      }

      if (letra_repetida==true) {
        alert('Ya escribiste la letra: ' + letra + ', ingresa otra'); 
      }
      
      if (letra_repetida==false){
        var temporal= aciertos;
        for (var k=0; k<palabra.length; k++) {
          if (letra==palabra[k]){
            console.log(letra);
            puntos=puntos+5;
            aciertos++;
            letras_usadas.push(letra);
          }
        }
        if (temporal==aciertos){
         vidas--;
         console.log('Tenes: '+ vidas + ' vidas!')
        }
        if (aciertos==palabra.length){
          console.log('ganaste');
          break;
        }
      }
    }
    console.log(puntos)
    if (puntos>=puntos_para_ganar){
      console.log ('Felicidades pasaste al nivel ' + (nivel + 1));
      ahorcado(nivel + 1);
    } else {
      console.log('NO PASASTE AL NIVEL ' + (nivel + 1) + ' AÚN');
    }  
  }

  if(puntos<puntos_para_ganar){
    console.log('Perdiste en el nivel ' + nivel);
    var volver= prompt('Deseas volver a jugar? Indica si o no:');
    if (volver==="si"){
      ahorcado(nivel);
    } else {
      console.log('Gracias por jugar');
    }
  }
}
ahorcado(1);