
var array=["Frutilla", "limon","naranja","pera"];

var btnListar=document.getElementById('listar');
var btnLimpiar=document.getElementById('limpiar');// recupero el boton
btnListar.addEventListener('mouseover', myFunction);// mouseout es cuando sacas el mouse

var box=document.getElementById('box');

box.addEventListener('mouseover',changecolor);

function changeColor(){

	box.setAtributte(back,'pink');
}

btnLimpiar.addEventListener('click',limpiar);
//paramentros=(evento + funcion)


var ul=document.getElementById('lista');

function myFunction(){
  
  for (var i=0; i<array.length; i++) {
  	
  	var li= document.createElement('li');
  	li.textContent= array[i];
  	ul.appendChild(li);	
  }
  

}

var lis=document.getElementsByTagName('li');
 
 function limpiar (){
 	for (var i=0; i<array.length; i++) {
  		ul.removeChild(lis[0]);
  }
  
}