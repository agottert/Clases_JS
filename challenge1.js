
/*Objetivo: Ordenamiento de Burbujeo y de Pivote
Pautas: generar un array que contenga 15 elementos
generados aleatoriamente (números enteros) y realizar
los códigos correspondientes a ambos métodos de ordenamiento.
Ambos métodos deben estar encapsulados en una función y
devolver el array ordenado de mayor a menor.*/

var array=[];


for (var i=0; i<15;i++){
array[i]=Math.floor(Math.random()*100);
}

console.log(array);


function quickSort(arr, left, right){
   
   var pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}
  
  function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}


 console.log(quickSort(array,0, array.length-1));    


/* 
var arr[8,3,10,2,5];

tomar un pivote el del medio
busco el pivote... 

var p= length/2; redondeando para abajo o para arriba

var p=2; indice del pivoe

while ()
if (arr[i]>arr[p]){

  swap=arr[p];
  arr[p]=arr[i];
  arr[i]=swap;
  
} ordeno 












*/



