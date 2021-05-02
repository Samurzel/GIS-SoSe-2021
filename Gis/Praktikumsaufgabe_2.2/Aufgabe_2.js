"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    let abc = [1, 2, 3, 4, 5];
    function backwards() {
        abc.reverse();
        console.log(abc);
    }
    backwards();
})(Aufgabe2 || (Aufgabe2 = {}));
let cars = ["audi", "ford"];
let motorcycles = ["kawasaki", "yamaha"];
function join() {
    Array.prototype.push.apply(cars, motorcycles);
    console.log(cars);
}
join();
//# sourceMappingURL=Aufgabe_2.js.map