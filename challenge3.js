
var nivel1=["torta","oreja","nariz","magia", "pluma","lente","termo","pieza","otoño","plaza"];
var nivel2=["terraza","programa","natacion","pileta","camello","tiburon","pintura","digital","madrina","hermana"];
var nivel3=["programacion","maravilloso","desafiante","peregrino","audiovisual","sensorial","alpinismo","editorial","psicodelico","sublimacion"];


function primernivel(){
  var puntos=0;
  for (var i=0; i<4; i++) {
    var copia=nivel1.slice()
    var posicion=Math.floor(Math.random() * copia.length);
    var palabra=copia.splice(posicion, 1)[0];
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
    if (puntos>=75){
      console.log ('Felicidades pasaste al segundo nivel');
      segundonivel();
    } else {
      console.log('NO PASASTE SEGUNDO NIVEL AÚN');
    }  
  }

  if(puntos<75){
    console.log('Perdiste en primer nivel');
    var volver= prompt('Deseas volver a jugar? Indica si o no:');
    if (volver==="si"){
      primernivel();
    } else {
      console.log('Gracias por jugar')
    }
  }
  
}

primernivel();


function segundonivel(){
  var puntos=0;
  for (var i=0; i<4; i++) {
    var copia=nivel2.slice()
    var posicion=Math.floor(Math.random() * copia.length);
    var palabra=copia.splice(posicion, 1)[0];
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
    if (puntos>=120){
      console.log ('Felicidades pasaste al tercer nivel');
       tercernivel();
    } else {
      console.log('NO PASASTE TERCER NIVEL AÚN');
    }  
  }

  if(puntos<120){
    console.log('Perdiste en segundo nivel');
    var volver= prompt('Deseas volver a jugar? Indica si o no:');
    if (volver==="si"){
      primernivel();
    } else {
      console.log('Gracias por jugar')
    }
  }
  
  
}

function tercernivel(){
  var puntos=0;
  for (var i=0; i<4; i++) {
    var copia=nivel3.slice()
    var posicion=Math.floor(Math.random() * copia.length);
    var palabra=copia.splice(posicion, 1)[0];
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
    if (puntos>=180){
      console.log ('FELICIDADES GANASTE EN TERCER NIVEL');
      var volver= prompt('Deseas volver a jugar? Indica si o no:');
      if (volver==="si"){
        primernivel();
      } else {
        console.log('Gracias por jugar');
      }
    } else {
      console.log('NO TERMINASTE EL ÚLTIMO NIVEL AÚN');
    }
  }

  if(puntos<180){
    console.log('PERDISTE EN TERCER NIVEL, IGUAL SOS RE GROSO POR HABER LLEGADO');
    var volver= prompt('Deseas volver a jugar? Indica si o no:');
    if (volver==="si"){
      primernivel();
    } else {
      console.log('Gracias por jugar');
    }
  }
  
}


