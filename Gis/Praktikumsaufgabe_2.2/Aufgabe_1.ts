namespace Aufgabe1 {
    //Aufgabe_1

    function min(...outputs: number[]): number {
        let val: number = outputs[0];
        for (let i: number = 0; i < outputs.length; i++) {
            if (outputs[i] < val) {
                val = outputs[i];
            }
        }
        console.log(val);
        return val;
    }
    min(10, 3, 6, 8, 3);

    //b)

    function isEven(value: number): boolean {

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

    let studierendeArray: Student[] = [];

    studierendeArray.push(student1, student2, student3);

    function addStudent(vorname: string, nachname: string, matrikelnummer: number, studiengang: string, semester: number): void {
        let student4: Student = {vorname, nachname, matrikelnummer, studiengang, semester };
        studierendeArray.push(student4);
    }

    function showInfo(studiliste: Student[]): void {
        for (let i: number = 0; i < studiliste.length; i++) {
            console.log(studiliste[i].vorname, studiliste[i].nachname, studiliste[i].matrikelnummer, studiliste[i].studiengang);
        }
    }

    addStudent("Sven", "Meier", 64572, "MKB", 5);

    showInfo(studierendeArray);
}