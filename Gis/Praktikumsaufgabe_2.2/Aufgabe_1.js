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
        console.log(val);
        return val;
    }
    min(10, 3, 6, 8, 3);
    //b)
    function isEven(value) {
        if (value == 0) {
            console.log("ist gerade");
            return true;
        }
        if (value == 1) {
            console.log("ist ungerade");
            return false;
        }
        if (value < 0) {
            return isEven(-x);
        }
        else
            return isEven(value - 2);
    }
    isEven(10);
    let student1 = { vorname: "Max", nachname: "Mustermann", matrikelnummer: 12345, studiengang: "OMB", semester: 1 };
    let student2 = { vorname: "Moritz", nachname: "Müller", matrikelnummer: 23124, studiengang: "MIB", semester: 2 };
    let student3 = { vorname: "Ben", nachname: "Bücher", matrikelnummer: 45754, studiengang: "MKB", semester: 3 };
    let studierendeArray = [];
    studierendeArray.push(student1, student2, student3);
    function addStudent(vorname, nachname, matrikelnummer, studiengang, semester) {
        let student4 = { vorname, nachname, matrikelnummer, studiengang, semester };
        studierendeArray.push(student4);
    }
    function showInfo(studiliste) {
        for (let i = 0; i < studiliste.length; i++) {
            console.log(studiliste[i].vorname, studiliste[i].nachname, studiliste[i].matrikelnummer, studiliste[i].studiengang);
        }
    }
    addStudent("Sven", "Meier", 64572, "MKB", 5);
    showInfo(studierendeArray);
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=Aufgabe_1.js.map