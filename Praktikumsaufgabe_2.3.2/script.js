"use strict";
var Aufgabe02;
(function (Aufgabe02) {
    let wrapper = document.getElementById("wrapper");
    //2a)
    class Sim {
        //2b)
        chooseKopf(_kopf) {
            this.kopf = _kopf;
        }
        chooseTorso(_torso) {
            this.torso = _torso;
        }
        chooseBeine(_beine) {
            this.beine = _beine;
        }
    }
    //3b)
    let sim = new Sim();
    for (let i = 0; i < bilderKopf.length; i++) {
        let imgElem = document.createElement("img");
        imgElem.src = bilderKopf[i];
        imgElem.id = String(i + 1);
        imgElem.className = "bild";
        wrapper.appendChild(imgElem);
    }
    //3c)
    let kopfAuswahl = document.querySelectorAll(".bild");
    function hoverSelect(element) {
        kopfAuswahl.forEach(element => {
            element.style.border = "6px solid black";
        });
        element.style.border = "6px solid red";
    }
    kopfAuswahl.forEach(element => {
        element.addEventListener("click", function () {
            sim.chooseKopf(element.id);
            hoverSelect(element);
            console.log(sim.kopf += " ist gerade ausgewählt");
        });
    });
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=script.js.map