let liste =[];


function kofferInhalt() {
    for (let i = 0; i < 5; i++) {
        liste.push(prompt("Pack was in den Koffer: "));
    }
}

kofferInhalt();

console.log(liste);

