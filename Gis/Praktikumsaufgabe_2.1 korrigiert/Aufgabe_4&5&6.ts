/*
let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}
//Hallo Bla Hallo Blubb Hallo. Ich bin davon ausgegangen, dass Test nicht ausgegeben, da es sich meiner Meinung nach um eine lokale Variable handelt die nicht in func3 ausgeführt wird
//Beide haben einen Namen, haben beide einen Bezeichner wie zb. void, eine Variable ist min. ein Wert, eine Funktion führt eine Anweisung aus

//Aufgabe_5 a)

function multiply(x: number, y: number): number {
    return x * y;
}
let mul: number = multiply(5, 4);
console.log(mul);

//b)

function max(x: number, y: number): void {
    if (x > y) {
        // return x;
        console.log(x);
    } else {
        // return y;
        console.log(y);
    }
}
max(9, 6);


//c)

function zählen(): void {
    let i: number = 1;
    let x: number = 1;
    while (i < 100) {
        i++;
        x += i;
    }
    console.log(x);
}
zählen();

//d)
function random(): void {
    let i: number = Math.floor(Math.random() * 100);
    console.log(i);
}
function random2(): void {
    for (let i: number = 0; i < 10; i++) {
        random();
    }
}
random2();


//e)
function factorial(n: number): number {
    if (n < 1) return 1;
    else if (n == 0) return 1;
    else {
        return (n * factorial(n - 1));
    }
}

console.log(factorial(5));


//f)
*/
function leapyear(): void {
    let i: number;
    for (i = 1900; i <= 2020; i++)
        if (i % 4 == 0) {
            console.log(i + "ist ein Schaltjahr");
            if (i % 100 == 0) {
                if (i % 400 == 0) {
                    console.log(i + "ist ein sogar ein besonderes Schaltjahr");

                }
            }
        }
}
leapyear();