"use strict";
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
//Hallo Bla Hallo Blubb Hallo. Ich bin davon ausgegangen, dass Test nicht ausgegeben, da es sich meiner Meinung nach um eine lokale Variable handelt die nicht in func3 ausgeführt wird
//Beide haben einen Namen, haben beide einen Bezeichner wie zb. void, eine Variable ist min. ein Wert, eine Funktion führt eine Anweisung aus
//Aufgabe_5 a)
function multiply(x, y) {
    return x * y;
}
let mul = multiply(5, 4);
console.log(mul);
//b)
function max(x, y) {
    if (x > y) {
        // return x;
        console.log(x);
    }
    else {
        // return y;
        console.log(y);
    }
}
max(9, 6);
//c)
function zählen() {
    let i = 1;
    let x = 1;
    while (i < 100) {
        i++;
        x += i;
    }
    console.log(x);
}
zählen();
//d)
function random() {
    let i = Math.floor(Math.random() * 100);
    console.log(i);
}
function random2() {
    for (let i = 0; i < 10; i++) {
        random();
    }
}
random2();
//e)
function factorial(n) {
    if (n < 1)
        return 1;
    else if (n == 0)
        return 1;
    else {
        return (n * factorial(n - 1));
    }
}
console.log(factorial(5));
//f)
function leapyear(x) {
    let result;
    if (x % 4 && )
        result = "positiv";
    else if (result = "positiv")
        x % 100;
    result = "negativ";
}
//# sourceMappingURL=Aufgabe_4.js.map