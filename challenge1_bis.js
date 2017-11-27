

/*
ESTE ES EL CODIGO ORDENADO DE MANERA ASCENDENTE

var arr=[3,8,10,2,7,9,5,4,1];

var p= arr.length-1;
var swap;



for (p=arr.length-1; p>0; p--){
    
    for (var i=0; i<p; i++) {

	 if (arr[i]>arr[p]){
     swap=arr[p];
     arr[p]=arr[i];
     arr[i]=swap;

	}
  }

}

console.log(arr);*/

//CODIGO PARA ORDENARLO DE MANERA DESCENDENTE
var arr=[3,8,10,2,7,9,5,4,1];

var p= arr.length-1;
var swap;



for (p=arr.length-1; p>0; p--){
    
    for (var i=0; i<p; i++) {

	 if (arr[i]<arr[p]){
     swap=arr[p];
     arr[p]=arr[i];
     arr[i]=swap;

	}
  }

}

console.log(arr);

