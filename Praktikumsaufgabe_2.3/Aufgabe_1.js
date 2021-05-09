"use strict";
var Aufgabe2_3_1;
(function (Aufgabe2_3_1) {
    let add = document.getElementById("add");
    let wrapper = document.querySelector(".wrapper");
    let reload = document.getElementById("reload");
    class Rechteck {
        createDivSize() {
            this.height = Math.floor(Math.random() * 200 + 10);
            this.width = Math.floor(Math.random() * 300 + 40);
        }
        createDiv(r) {
            let x = Math.floor(Math.random() * 850);
            let y = Math.floor(Math.random() * 350 + 250);
            let newDiv = document.createElement("div");
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
    function reloadFunction() {
        location.reload();
    }
    function addFunction() {
        let r = new Rechteck();
        r.createDivSize();
        r.createDiv(r);
    }
    reload.addEventListener("click", reloadFunction);
    add.addEventListener("click", addFunction);
})(Aufgabe2_3_1 || (Aufgabe2_3_1 = {}));
//# sourceMappingURL=Aufgabe_1.js.map