const terreLune = 384400;
let transportVitesse = [
    { nom: 'homme à pieds', vitesse: 10 },
    { nom: 'cheval pur sang', vitesse: 65 },
    { nom: 'voiture ferrari', vitesse: 325 },
    { nom: 'avion jet', vitesse: 740 },
    { nom: 'avion de ligne A380', vitesse: 1185 },
    { nom: 'fuséee Apollon 11', vitesse: 5500 }
];

for (let i = 0; i < slider.length; i++) {
    let heure = terreLune /slider[i];

    let slider = document.getElementById("myRange");
    let duree = document.getElementById("temps");
    duree.innerHTML = terreLune / slider[i];

    slider.duree = function () {
        duree.innerHTML = this.value;
    }
}




