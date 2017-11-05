function changeColor(color){

		var e=document.getElementById('test');
		e.style.color=color;
	}


function validar(contra){

	var a=document.getElementById('exampleInputPassword1');//el id de password
	
	if (a.value=="mago3311"){
		alert('Es correcto')

	}else {alert('La Password es incorrecta')
 }

}
//function validar()

var user =document.getElementById('user');
var pass =document.getElementById('pass');

if (user.value=="" OR pass.value.lenght==0){

	alert("Amboscampos son obligatorios")
}
