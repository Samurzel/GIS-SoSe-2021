function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func1();
    console.log(x);
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}

function func2(): void {
    console.log("Gute");
}
//a)Ausgabe: Alles Klar? Logo!
//b) a1() -> Alles, console.log(x) -> Klar, func1(), console.log("Logo!") -> Logo }, 

function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while( i > 0);
}

a2();
//9 -> -1 ->8 -> -1 ... Erster Durchlauf direkt ohne Prüfung, nach jedem Durchlauf geprüft.

