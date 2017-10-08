
var dturno=prompt("Es doble turno?");
var almuerzo=prompt("Valor del almuerzo");
var distancia =prompt("Cual es la distancia a la colonia?");
var costo =prompt("Cual es el costo de la colonia?");

if (distancia>10) { 
	if (costo+almuerzo<1500) { 
		alert("Anote a su hijo. Puede Contratar transporte");
    } else if (dturno=="si" && almuerzo==0 && costo<2800) {
    	alert(" Anote a su hijo");
    } else { 
    	alert("no anote a su hijo");
    }
} else  {
	if (costo>1500*1.2){
		alert("no anota a su hijo");
	} else { 
		if (almuerzo<(costo*0.15)){
			alert("Anote a su hijo con almuerzo incluido");
		} else{
			alert("Anote a su hijo pero sin almuerzo");
		}
	}
}