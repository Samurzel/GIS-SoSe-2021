"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    let abc = [1, 2, 3, 4, 5];
    let cba = [1, 2, 3, 4, 5];
    let u = 4;
    function backwards() {
        for (let i = 0; i < abc.length; i++) {
            cba[u] = abc[i];
            u--;
        }
        abc = cba;
        console.log(abc);
    }
    backwards();
    let cars = ["audi", "ford"];
    let motorcycles = ["kawasaki", "yamaha"];
    let x;
    function join() {
        for (let i = 0; i < motorcycles.length; i++) {
            x = motorcycles[i];
            cars.push(x);
        }
        console.log(cars);
    }
    join();
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe_2.js.map