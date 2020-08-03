var letras = document.getElementById("letras");
var numeros = document.getElementById("numeros");
var letrasGuardadas = "";
var numerosGuardados = "";
var a1 = document.getElementById("a1");
var b2 = document.getElementById("b2");
var c3 = document.getElementById("c3");
var d4 = document.getElementById("d4");
var e5 = document.getElementById("e5");
var f6 = document.getElementById("f6");
var g7 = document.getElementById("g7");
var h8 = document.getElementById("h8");
var i9 = document.getElementById("i9");

function btnA1() {
    if (letrasGuardadas == "ABCDEFGHI") {
        numeros.innerHTML = "1";
        numerosGuardados = "1";
    } else {
        if (letrasGuardadas == "") {
            letras.innerHTML = "A";
            letrasGuardadas = "A";
        }
    }
}

function btnB2() {
    if (letrasGuardadas == "ABCDEFGHI" && numerosGuardados == "1") {
        numeros.innerHTML = "12";
        numerosGuardados = "12";
    } else {
        if (letrasGuardadas == "A") {
            letras.innerHTML = "AB";
            letrasGuardadas = "AB";
        } else {
            alert("falta una letra");
        }
    }
}

function btnC3() {
    if (letrasGuardadas == "AB") {
        letras.innerHTML = "ABC";
        letrasGuardadas = "ABC";
    } else {
        alert("falta una letra");
    }

}

function btnD4() {
    if (letrasGuardadas == "ABC") {
        letras.innerHTML = "ABCDEFGHI";
        letrasGuardadas = "ABCDEFGHI";
    } else {
        alert("falta una letra");
    }
}

// Sigan sigan ustedes (」￣▽￣」)


a1.onclick = function() {
    btnA1();
}
b2.onclick = function() {
    btnB2();
}
c3.onclick = function() {
    btnC3();
}
d4.onclick = function() {
    btnD4();
}
e5.onclick = function() {
    btnE5();
}
f6.onclick = function() {
    btnF6();
}
g7.onclick = function() {
    btnG7();
}
h8.onclick = function() {
    btnH8();
}
i9.onclick = function() {
    btnI9();
}