var numero="450995356623370";
var esSegundoDigito= true;
var total=0;
console.log(numero);
var verificador=0;

for(var i = numero.length - 1; i >= 0 ; i--){
	var x= parseInt(numero.charAt(i));
		if (esSegundoDigito==true){
			x=x*2;
		  if (x>9) {
			x-=9;
		}
		total+=x;
	    esSegundoDigito=false;
	}
	else {
		total+=parseInt(numero.charAt(i));
		esSegundoDigito=true;
			
	}
}

/*var suma=0;*/
console.log("El total es: "+total);

verificador= 10-(total%10);
console.log(verificador);

/*suma= total/10;
console.log(suma);
verificador=(Math.ceil(suma)*10)-total;
console.log(verificador);*/


