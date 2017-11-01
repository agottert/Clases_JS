/*Ejercicio 2: Escribir una función que, dado un número pasado como parámetro,
 determine si es primo.*/

 

 function primo(n){
    if (n==2){
    	return true
    } 
    
 	if ((n%2==0)&&(n=1)){
 		return false;
 	}
 	
 	return true;
 }

 console.log(primo(-12));
 /*
   if (n===1){
   	return =false;
	
   } else if (){
   	return=true;
	
   }
   else {
      for (var x=n; x>1;x--){
	       if(n%x===0{
	       			console.log('El numero ${n} NO ES PRIMO');
	       			return false;
	       } 
	       }
	       console.log('El numero ${n} ES PRIMO');
	       return true;
	
	   }
    }

console.log(primo(15));

 */
 