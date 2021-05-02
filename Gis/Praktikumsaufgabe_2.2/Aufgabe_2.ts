namespace Aufgabe2 {

let abc: number[] = [1, 2, 3, 4, 5];
function backwards(): void {
abc.reverse();
console.log(abc);
}
backwards();

}

let cars: string[] = ["audi", "ford"];
let motorcycles: string[] = ["kawasaki", "yamaha"];

function join(): void {
Array.prototype.push.apply(cars, motorcycles);

console.log(cars);
}
join();