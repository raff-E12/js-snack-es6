//SNACK 1:
//Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

//Soluzione del Relativo Problema Richesto:

const bikes = [
    {nome: 'CicloSprint', peso: 10},
    {nome: 'Speedster', peso: 12},
    {nome: 'VeloFly', peso: 15},
    {nome: 'GiroMatic', peso: 14}, 
    {nome: 'EcoCruiser', peso: 11}
]

const BikesCalcWeightGen = (bike)=>{
    let result_conf = 0
    for (let i = 0; i < bike.length; i++) {
        if (bike[i].peso <= bike[i].peso) {
            result_conf = `>> La bici con il peso minore rispetto alle altre è: ${bike[i].nome} con ${bike[i].peso}KG.`;
            break
        }
    }
    return result_conf;
}

console.log(BikesCalcWeightGen(bikes));
