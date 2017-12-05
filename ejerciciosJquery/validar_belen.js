$(document).ready({


	$('#registrate').on('click', function(event){

		event.preventDefault();
		if (validarRequeridos($('#nombre').val()==false)){
			msg="<li>El nombre es un campo requerido</li>";
			ul.append(msg);

		}

		var mail=$('#mail').val();
		if(validarRequeridos(mail)==false)){
		
	}
	})
});


/*Valido que el campo conenga caracteres
  @params campo/String
  return boolean
 */

function validarRequeridos(campo){

	trimm(campo);//saca los espacios de los extremos

	if(campo.length ==0)){
    return false
}
    return true;
}

function validarMail(mail){

  trimm(mail);
  emailRegex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (emailRegex.test(mail)){
  	return true;
  }

   return false;

}