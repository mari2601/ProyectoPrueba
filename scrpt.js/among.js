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

function tripulanteUno() {
    let tripulanteUno= true; 

    if (tripulanteUno == !true) {
        alert("Eres impostor")
    } else {
        alert("Huye del azul oscuro")
    }
}

function vago() {
    let vago= true; 

    if (vago == !true) {
        alert("Eres tripulante")
    } else {
        alert("No hace nada")
    }
}

function luz() {
    let tripulanteDos= true; 

    if (tripulanteDos== !true) {
        alert("Eres impostor")
    } else {
        alert("Esta arreglando la luz")
    }
}

function tripulanteTres() {
    let tripulanteTres= true; 

    if (tripulanteTres== !true) {
        alert("Eres impostor")
    } else {
        alert("Se mete por la alcantarilla")
    }
}

function tripulanteCuatro() {
    let tripulanteCuatro= true; 

    if (tripulanteCuatro== !true) {
        alert("Eres impostor")
    } else {
        alert("Saca la basura")
    }
}

function impostorDos() {
    let impostorDos= true; 

    if (impostorDos== !true) {
        alert("Eres tripulante")
    } else {
        alert("Asesina al rojo")
    }
}

function tripulanteQuinto() {
    let tripulanteQuinto= true; 

    if (tripulanteQuinto== !true) {
        alert("Eres impostor")
    } else {
        alert("Es un vago")
    }
}
function tripulanteSeis() {
    let tripulanteSeis= true; 

    if (tripulanteSeis== !true) {
        alert("Eres impostor")
    } else {
        alert("Esta mirando las camaras")
    }
}
function tripulanteSiete() {
    let tripulanteSiete= true; 

    if (tripulanteSiete== !true) {
        alert("Eres impostor")
    } else {
        alert("Esta muerto")
    }
}
function tripulanteOcho() {
    let tripulanteOcho= true; 

    if (tripulanteOcho== !true) {
        alert("Eres impostor")
    } else {
        alert("Persigue al naranja")
    }
}
function tripulanteNueve() {
    let tripulanteNueve= true; 

    if (tripulanteNueve== !true) {
        alert("Eres impostor")
    } else {
        alert("Esta corriendo por todo lado")
    }
}
function tripulanteDiez() {
    let tripulanteDiez= true; 

    if (tripulanteDiez== !true) {
        alert("Eres impostor")
    } else {
        alert("Arregla el cableado")
    }
}

function tripulanteOnce() {
    let tripulanteOnce= true; 

    if (tripulanteOnce== !true) {
        alert("Eres impostor")
    } else {
        alert("Oprime el boton de emergencia")
    }
}
function tripulanteDoce() {
    let tripulanteDoce= true; 

    if (tripulanteDoce== !true) {
        alert("Eres impostor")
    } else {
        alert("Fue expulsado de la nave")
    }
}
