
var array=["Frutilla", "limon","naranja","pera"];

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