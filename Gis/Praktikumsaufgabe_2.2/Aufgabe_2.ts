namespace Aufgabe2 {

    let abc: number[] = [1, 2, 3, 4, 5];
    let cba: number[] = [1, 2, 3, 4, 5];
    let u: number = 4;
    function backwards(): void {
        for (let i: number = 0; i < abc.length; i++) {
            cba[u] = abc[i];
            u--;
        }
        abc = cba;
        console.log(abc);
    }
    backwards();




    let cars: string[] = ["audi", "ford"];
    let motorcycles: string[] = ["kawasaki", "yamaha"];
    let x: string;

    function join(): void {
        for (let i: number = 0; i < motorcycles.length; i++) {
            x = motorcycles[i];
            cars.push(x);
        }

        console.log(cars);
    }
    join();

}