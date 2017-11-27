var cajas
cajas[0].textContent="Hola mundo";// solo te permite agregar texto no formato html , no etiquetas como h1
primeraCaja.innerHTML ="<h1>Hola</h1>"// me permite agregar etiquetas, formato de html..
                                        //innerHtml , es una funcion que se aplua a primera Caja
//Crear otra caja y no ir al html

var caja=document.createElement('div');// le digo de que tipo va a ser.. este elemneto es hijo de section

var contenedor =document.getElementbyId('contenedor');// contiene todas las cajas
caja.createTextNode('Hola');
caja.setattribute('class','caja');// agregando la clase caja al div que se creo
contenedor.appendChild(caja);



// getElement me trae el elemento de html a js... ahora lo hacemos al reves. 

