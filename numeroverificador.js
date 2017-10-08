var number="450995356623370";
var isSecondDigit= true;
var total=0;
console.log(number);
var verifynumber=0;

for(var i = numero.length - 1; i >= 0 ; i--){
	var x= parseInt(numero.charAt(i));
		if (isSecondDigit==true){
			x=x*2;
		  if (x>9) {
			x-=9;
		}
		total+=x;
	    isSecondDigit=false;
	}
	else {
		total+=parseInt(number.charAt(i));
		isSecondDigit=true;
			
	}
}

/*var suma=0;*/
console.log("El total es: "+total);

verifynumber= 10-(total%10);
console.log(verifynumber);

/*suma= total/10;
console.log(suma);
verificador=(Math.ceil(suma)*10)-total;
console.log(verificador);*/


