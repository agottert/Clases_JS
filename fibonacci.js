
//N DE MESES, este ejemplo no da ...
/*function fibonacci (N){
    var x=1;
	for (var i=0; i<=N; i++) {
		x=x(i-1)+x(i-2);
		

    }
    console.log('Cant de conejos:'+ x);

}

fibonacci(12);*/

/*function fibonacci (mes){
    var n1=0;
    var n2=1;
    var n3;
	

	for (var i=0; i<mes; i++) {
		n3=n1+n2;
		n1=n2;
		n2=n3;
	}
    return n3;
    
}

console.log(fibonacci(12));*/




/*function fibonacci(n){

	var n3;
	var x=1;
	for (var i=0; i<=n; i++) {
		x=fibonacci(i-1)+fibonacci(i-2);
		
	}
	return(x);
}
console.log(fibonacci(20));*/



function fibonacci(num){

	if (num<=1) return 1;
	return fibonacci(num-1)+ fibonacci(num-2)
}

var cantConejos =fibonacci(7);
console.log(cantConejos);
