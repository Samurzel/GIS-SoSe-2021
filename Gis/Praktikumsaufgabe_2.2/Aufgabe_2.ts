
let abc: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function backwards(a: number[]): number[] {
    let c: number[] = [];
    for (let i: number = a.length - 1; i >= 0; i--) {
        c.push(a[i]);
    }
    return c;
}
console.log(backwards(abc));


//b)

let cba: number[] = [10, 11, 23, 34, 56];


function join(erstesArray: number[], zweitesArray: number[]): number[] {
    let extraArray: number[] = [];
    extraArray = erstesArray;

    for (let i: number = 0; i < zweitesArray.length; i++) {
        extraArray.push(zweitesArray[i]);
    }
    console.log(extraArray);
    return extraArray;
}

join(abc, cba);


//c)

function split(array: number[], erster: number, zweiter: number): number[] { //Durch index out of Bounds Exceptions, die man custom werfen kann.
    let platzhalter: number[] = [];
    for (let i: number = erster; i <= zweiter; i++) {
        platzhalter.push(array[i]);
    }
    console.log(platzhalter);
    return platzhalter;
}

split(abc, 3, 7);
