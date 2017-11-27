
$(document).ready(function(){
   $('#enviar').click(function(){

   	var nombre=$('#nombre').val();
   	var apellido= $('#apellido').val();
   	var documento=$('#documento').val();
   	var sel=$('#tipodocumento');
   	var fecha=$('#nacimiento').val();

   	if(nombre==""){
   		$('#mensaje1').fadeIn();
   		return false;
   	}else{
   		$('#mensaje1').fadeOut();
   	}
   	if (apellido==""){
   		$('#mensaje2').fadeIn();
   		return false;
   	}else{
   		$('#mensaje2').fadeOut();
    }
    
    
   	
   	if (documento==""){
   		$('#mensaje4').fadeIn();
   		return false;
   	}else{
   		$('#mensaje4').fadeOut();
   	}

   
   if (sel.val()==""){
   	$('#mensaje5').fadeIn();
   	return false;

   }

   if(isNaN(Date.parse(fecha))){
   	alert('fecha incorrecta');
   }
   });



});