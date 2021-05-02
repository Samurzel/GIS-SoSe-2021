"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    //Aufgabe_1
    function min(...outputs) {
        let val = outputs[0];
        for (let i = 0; i < outputs.length; i++) {
            if (outputs[i] < val) {
                val = outputs[i];
            }
        }
        return val;
    }
    min(10, 3, 6, 8, 3);
    //b)
    function isEven(value) {
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
    let student1 = { vorname: "Max", nachname: "Mustermann", matrikelnummer: 12345, studiengang: "OMB", semester: 1 };
    let student2 = { vorname: "Moritz", nachname: "Müller", matrikelnummer: 23124, studiengang: "MIB", semester: 2 };
    let student3 = { vorname: "Ben", nachname: "Bücher", matrikelnummer: 45754, studiengang: "MKB", semester: 3 };
    let studierenden = [student1, student2, student3];
    function showInfo(...studenten) {
        console.log(studenten[0]);
    }
    showInfo(student1);
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=Aufgabe_1.js.map