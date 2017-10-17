var numero= [1,2,3,1,8,7,2,4];
console.log(numero);

var temporal;
var swap=true;

for (var n=0; n<=numero.length-1 && swap===true; n++) {
	
	swap=false;

for (var i = 0; i<=numero.length-2; i++) {
	/*SWAP: Si el numero es mayor a su siguiente ==> intercambio*/
	if ((numero[i]>numero[i+1])){
           temporal= numero[i];
           numero[i]=numero[i+1];
           numero[i+1]= temporal;
           console.log(numero);
           swap=true;
      
	}

 }
}

/*swap*/