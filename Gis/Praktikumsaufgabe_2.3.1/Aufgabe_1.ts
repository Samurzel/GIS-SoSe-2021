namespace Aufgabe2_3_1 {
    let add: HTMLElement = document.getElementById("add");
    let wrapper: HTMLElement = document.querySelector(".wrapper");
    let reload: HTMLElement = document.getElementById("reload");

    class Rechteck {
        height: number;
        width: number;


        createDivSize(): void {
            this.height = Math.floor(Math.random() * 200 + 10);
            this.width = Math.floor(Math.random() * 300 + 40);
        }

        createDiv(r: Rechteck): void {
            let x: number = Math.floor(Math.random() * 850);
            let y: number = Math.floor(Math.random() * 350 + 250);
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.style.position = "absolute";
            newDiv.style.backgroundColor = "green";
            newDiv.style.border = "3px solid black";
            newDiv.style.height = r.height + "px";
            newDiv.style.width = r.width + "px";
            newDiv.style.top = y + "px";
            newDiv.style.left = x + "px";
            wrapper.appendChild(newDiv);
        }
    }

    function reloadFunction(): void {
        location.reload();
    }

    function addFunction(): void {
        let r: Rechteck = new Rechteck();
        r.createDivSize();
        r.createDiv(r);
    }
    reload.addEventListener("click", reloadFunction);
    add.addEventListener("click", addFunction);
}