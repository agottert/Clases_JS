

var nombre='Fido';
var nombres=['Lala','Po','Dipsy','Fido'];

/*function buscadoNemo(nombre, nombres){
	var encontrado=false;
	for (var i=0 ; i<nombres.length; i++) {
		
		if nombre==nombres[i]{
			encontrado=true


		}
		
	}
	return encontrado;
}*/


function buscadoNemo(nombre, nombres){
	
	for (var i=0 ; i<nombres.length; i++) {
		
		if nombre==nombres[i]{
			return true;// no sigo recorriendo el for, d ela otra manera no es posible. Elimino la bandera
        }
		
	}
	return false;
}

if (buscandoNemo(nombre, nombres)===true);





