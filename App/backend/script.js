const fs = require('fs');
const {json} = require("express");
const path = '/Users/florian.ranaivoson/Documents/Documents - MacBook Pro de Florian/PERSO/Dev/projetTacos/backend/assos.json';

const buffer = fs.readFileSync(path);
const assos = JSON.parse(buffer);

for(let asso of assos) {
    console.log(asso.nom);
}
console.log('length: ',assos.length)
