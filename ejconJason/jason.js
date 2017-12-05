 

 
var jdatos={"nombre": "Jana","apellido":"dominguez","edad":34,"foto":null};
console.log(jdatos);

var jdatosjason= JSON.stringify(jdatos);
console.log(jdatosjason);


$(document).ready(function(){
 $('body').append($('<a href=jason.html?x='+jdatosjason+'>Link </a>'));
 
});

