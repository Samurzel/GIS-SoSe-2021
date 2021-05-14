"use strict";
let abc = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function backwards(a) {
    let c = [];
    for (let i = a.length - 1; i >= 0; i--) {
        c.push(a[i]);
    }
    return c;
}
console.log(backwards(abc));
//b)
let cba = [10, 11, 23, 34, 56];
function join(erstesArray, zweitesArray) {
    let extraArray = [];
    extraArray = erstesArray;
    for (let i = 0; i < zweitesArray.length; i++) {
        extraArray.push(zweitesArray[i]);
    }
    console.log(extraArray);
    return extraArray;
}
join(abc, cba);
//c)
function split(array, erster, zweiter) {
    let platzhalter = [];
    for (let i = erster; i <= zweiter; i++) {
        platzhalter.push(array[i]);
    }
    console.log(platzhalter);
    return platzhalter;
}
split(abc, 3, 7);
//# sourceMappingURL=Aufgabe_2.js.map