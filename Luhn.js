var numero="4509953566233704";
var esSegundoDigito= false;
var total=0;
console.log(numero);

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

console.log("El total es: "+total);


// operador Ternario 
//alert(total%10===0 ? "bien ahi" : "mal ahi");

// Normalmente sería 
if (total%10===0){
	alert("Bien ahi");
}
else {
	alert("Mal ahi");
}





