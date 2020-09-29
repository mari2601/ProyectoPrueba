/* condicionales- es un grupo de instrucciones que se pueden ejecutar o no dependiendo de si se cumple una condicion */

/* creamos una funcion llamada color */
function color () {
    /* pedimos el color y lo almacenamos en una variable */
    let colorUsuario= prompt("Ingrese un color en INGLES");
    let colorEsperado= "red";
    /* el color ingresado es igual al esperado? */

    let minuscula = colorUsuario.toLowerCase();






    if (minuscula== colorEsperado) {
        /* este bloque de codigo*/
        document.write("<h1 style='color: red' > el color es RED!! </h1>")
        
    } else {
        /* ejecute este otro bloque de codigo */
        document.write("<h1> Noooo es Red!! el color ingresado fue " + colorUsuario + "</h1>")
    }
}

/* Operados de comparacion
== IGUALES 

!= No es igual 2y  2
=== estrictamente igual deben ser del mismo dato
!== desigualdad estricya diferente tipo de dato 
> mayor que    
>= meyor o igual que 
< mnor que 
<= menor o igual 
*/

function year() {
    let yearIngreso= prompt("Ingrese un año!");
    
    if (yearIngreso != 2020) {
        alert("se equivoco de añooo");
    } else {
    alert("Estas en el año correcto");
    }
}

/* mayor de edad */

function edad() {
     let edadIngreso =prompt("Ingresa tu edad");
      if (edadIngreso > 18 && edadIngreso <=80) {
          alert("Eres legal!!");
      } else if (edadIngreso <=17 && edadIngresada>=0) {
          alert("Eres un niño!!");
      }
}
/* OPERADORES LOGICOS
&& and o y
|| or o o
!NOT */


function paises() {
    let pais= prompt("Ingrese su pais").toLowerCase();
if (pais == "colombia" || pais == "ecuador" || pais == "peru") {
    alert("Este pais habla español")
} else {
    alert("Ahi no se habla español, que idioma se habla alla!")
}
}


function impostor() {
    let impostor= true; 

    if (impostor == !true) {
        alert("Eres tripulante")
    } else {
        alert("Eres un impostor")
    }
}




























