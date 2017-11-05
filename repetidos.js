


var array =[10,4,5,90,11,11,34,8,2,2,7,0]; //devolver un array nuevo que no contenga los repetidos
var unicos=[];


array.forEach(function(e){
	var bandera=false;
     unicos.forEach(function(e2){
        if (e===e2){
          bandera=true;
		}
     })
        if (bandera===false){
      unicos.push(e);
      }
});
console.log(unicos);

/*for (var i=0; i<array.length; i++) {
	var bandera=false;

	for (var j=0;j<unicos.length; j++) {
		
		if (array[i]===unicos[j]){
           
			bandera=true;
		}
}

      if (bandera===false){
      unicos.push(array[i]);
      }
}
console.log(unicos);*/




var nuevoarray=[...new Set ([1,1,4,6,7,6,6,9])]
console.log(nuevoarray)

var nuevoarray2=[...new Set (array)]
console.log(nuevoarray2);