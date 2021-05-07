namespace Aufgabe1 {
//Aufgabe_1

function min(...outputs: number[]): number {
    let val: number = outputs[0];
    for (let i: number = 0; i < outputs.length; i++) {
        if (outputs[i] < val) {
            val = outputs[i];
        }
    }
    return val;
}
min(10, 3, 6, 8, 3);

//b)

function isEven(value: number): boolean {
    if (value <= 1) {
        if (value == 0) {
            return true;
        }
        else if (value == 1) {
            return false;
        }
        else {
            value -= 2;
            isEven(value);
            return false;
        }
    }
}
isEven(10);

//c)

interface Student {
    vorname: string;
    nachname: string;
    matrikelnummer: number;
    studiengang: string;
    semester: number;
}
let student1: Student = { vorname: "Max", nachname: "Mustermann", matrikelnummer: 12345, studiengang: "OMB", semester: 1 };
let student2: Student = { vorname: "Moritz", nachname: "Müller", matrikelnummer: 23124, studiengang: "MIB", semester: 2 };
let student3: Student = { vorname: "Ben", nachname: "Bücher", matrikelnummer: 45754, studiengang: "MKB", semester: 3 };

let studierenden: Student[] = [student1, student2, student3];

function showInfo(...studenten: Student[]): void {
console.log(studenten[0]);
}
showInfo(student1, student2, student3);
}

