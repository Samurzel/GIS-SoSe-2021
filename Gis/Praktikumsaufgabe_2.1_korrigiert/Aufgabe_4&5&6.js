"use strict";
//Aufgabe_4 a)
let a = "Hallo";
console.log(a);
func1(a);
console.log(a);
func2();
func3();
console.log(a);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let a = "Blubb";
    console.log(a);
}
function func3() {
    a = "Test";
}
//Hallo Bla Hallo Blubb Hallo. Ich bin davon ausgegangen, dass Test nicht ausgegeben wird, da es sich meiner Meinung nach um eine lokale Variable handelt die nicht in func3 ausgeführt wird
//Beide haben einen Namen, haben beide einen Bezeichner wie zb. void, eine Variable ist min. ein Wert, eine Funktion führt eine Anweisung aus
//Aufgabe_5 a)
function multiply(x, y) {
    x *= y;
    console.log(x);
}
multiply(2, 3);
//b)
function max(x, y) {
    if (x > y) {
        console.log(x);
    }
    else {
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
function leapyear() {
    let i;
    for (i = 1900; i <= 2020; i++)
        if (i % 4 == 0) {
            if (i % 100 !== 0) {
                console.log(i + "ist ein Schaltjahr");
            }
            else if (i % 400 == 0) {
                console.log(i + "ist ein sogar ein besonderes Schaltjahr");
            }
        }
}
leapyear();
//Aufgabe_6 a)
function loop() {
    let raute = "";
    let i;
    for (i = 0; i < 7; i++)
        console.log(raute += "#");
}
loop();
//b)
function fizz() {
    let i;
    for (i = 1; i <= 100; i++)
        if (i % 3 == 0) {
            console.log("fizz");
        }
        else if (i % 5 == 0) {
            console.log("buzz");
        }
        else {
            console.log(i);
        }
}
fizz();
//c) 
function buzzfizz() {
    let i;
    for (i = 1; i <= 100; i++)
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 == 0) {
            console.log("buzz");
        }
        else if (i % 3 == 0) {
            console.log("fizz");
        }
        else {
            console.log(i);
        }
}
buzzfizz();
//d)
function schach(höhe, breite) {
    let raute = "";
    let i = 0;
    let x = 0;
    let y = 0;
    while (y < höhe) {
        do {
            if (i % 2 == 0) {
                raute += " ";
                i++;
                x++;
            }
            else {
                raute += "#";
                i++;
                x++;
            }
        } while (x < breite);
        console.log(raute);
        x = 0;
        raute = "";
        y++;
        i++;
    }
}
schach(16, 16);
//# sourceMappingURL=Aufgabe_4&5&6.js.map