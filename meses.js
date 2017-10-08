var m =prompt("Escriba el nombre del mes en minuscula");
var dias31= " Tiene 31 días";
var dias30= " Tiene 30 días";
var dias28= " Tiene 28 días";

switch(m){
case "enero":
   alert(m+dias31);
break;
case "febrero":
   alert(m+dias28);
   break;
case "marzo": 
    alert(m+dias31);
	break;
case "abril": 
	alert(m+dias30);
	break;
case "mayo": 
	alert(m+dia31s);
	break;
case "junio": 
	alert(m+dias30);
	break;
case "julio": 
	alert(m+dias31);
	break;
case "agosto": 
	alert(m+dias31);
	break;
case "septiembre": 
	alert(m+dias30);
	break;
case "octubre": 
	alert(m+dias31);
	break;
case "noviembre": 
	alert(m+dias30);
	break;
case "diciembre": 
	alert(m+dias31);
	break;
default: 
     alert("Mes no valido");
     break;
}

/*otra opcion

var(month);

switch(month){
	case "febrero":console.log("El mes tiene 28 días");break;
	case "abril":console.log("El mes tiene 30 días");break;
	case "junio":console.log("El mes tiene 30 días");break;
	case "septiembre":console.log("El mes tiene 30 días");break;
	case "noviembre":console.log("El mes tiene 30 días");break;
	default:console.log("El mes tiene 31 días");break;

}

El mismo ejercicio pero con numeros
var m=parseInt(prompt("Escriba el nombre del mes en numero"));
var dias31= " Tiene 31 días";
var dias30= " Tiene 30 días";
var dias28= " Tiene 28 días";

switch(m){
case "1":
   alert("Enero"+dias31);
break;
case "2": 
    alert("Febrero"+dias31);
	break;
case "3": 
	alert("Marzo"+dias30);
	break;
case "4": 
	alert("Abril"+dia31s);
	break;
case "5": 
	alert("Mayo"+dias30);
	break;
case "6": 
	alert("Junio"+dias31);
	break;
case "7": 
	alert("Julio"+dias31);
	break;
case "8": 
	alert("Agosto"+dias30);
	break;
case "9": 
	alert("Septiembre"+dias31);
	break;
case "10": 
	alert("Octubre"+dias30);
	break;
case "11": 
	alert("Noviembre"+dias31);
	break;
case "12": 
	alert("Diciembre"+dias31);
	break;
default :
     alert("Mes no valido");
     break;
}



*/

