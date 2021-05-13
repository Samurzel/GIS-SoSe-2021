namespace Aufgabe02 {

    let wrapper: HTMLElement = document.getElementById("wrapper");
    //2a)
    class Sim {
        kopf: string;
        torso: string;
        beine: string;
        //2b)
        chooseKopf(_kopf: string): void {
            this.kopf = _kopf;
        }

        chooseTorso(_torso: string): void {
            this.torso = _torso;
        }

        chooseBeine(_beine: string): void {
            this.beine = _beine;
        }
    }
    //3b)
    let sim: Sim = new Sim();
    for (let i: number = 0; i < bilderKopf.length; i++) {
        let imgElem: HTMLImageElement = document.createElement("img");
        imgElem.src = bilderKopf[i];
        imgElem.id = String("Kopf Nummer" + i);
        imgElem.alt = imgElem.id;
        imgElem.className = "bild";
        wrapper.appendChild(imgElem);
    }
    //3c)
    let kopfAuswahl: NodeListOf<HTMLElement> = document.querySelectorAll(".bild");

    function hoverSelect(element: HTMLElement): void {
        kopfAuswahl.forEach(element => {
            element.style.border = "6px solid black";
        });

        element.style.border = "6px solid red";
    }

    kopfAuswahl.forEach(element => {
        element.addEventListener("click", function (): void {
            sim.chooseKopf(element.id);
            hoverSelect(element);
            console.log(sim.kopf += " ist gerade ausgewählt");
        });
    });
}