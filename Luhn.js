var number="4509953566233704";
var isSecondDigit= false;
var total=0;
console.log(number);

for(var i = number.length - 1; i >= 0 ; i--){
	var x= parseInt(number.charAt(i));
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

console.log("The total is: "+total);


// operador Ternario 
//alert(total%10===0 ? "bien ahi" : "mal ahi");

// Normalmente sería 
if (total%10===0){
	alert("Correct number");
}
else {
	alert("Incorrect number");
}





