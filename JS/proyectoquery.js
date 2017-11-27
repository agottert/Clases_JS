

//$('#id')por ID
//$('.class')por clases
//$('#enviar')
//$('.caja')
// $ me indica que estoy trabajando con variables, con nodos
// vamos a cambiarle el display a l div

$(document).ready(function(){ //(document carga todo el documento , cuando  este cargado "ready" el documento hace la funcion..
   
   $('#box').hide();


   $('img').click(function(){
		$(this).hide()
	});


   $('#btn').click(function(){
		$('img').show();
	});

   $('.normal').click(function(){
		$(this).toggleClass('negrita');
	});
});

//.addClass('');
//.removeClass('');
//hide(); show();
//.prop('display','none'); hace lo mismo que el hide
//cmd+shift+ v te copia el codigo identado
//


