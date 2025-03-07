//SNACK 2:
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//Soluzione del Relativo Problema Richiesto

const teams = [
    {squadra:'Fulmini Rossi', punti:0, falli:0},
    {squadra:'Aquilotti Blu', punti:0, falli:0},
    {squadra:'Draghi Verdi', punti:0, falli:0},
    {squadra:'Leoni Gialli', punti:0, falli:0},
    {squadra:'Tigri Nere', punti:0, falli:0},
]

const HandleTeamsPointsGen = ()=>{
    let Teams_Name = [];
    let Teams_Falls = [];
    let index = 0

    while (index < teams.length) {
        let falls_teams =  Math.ceil(Math.random() * 30);
        let points_teams = Math.ceil(Math.random() * 100);
        let points = teams[index].punti = points_teams;
        let falls = teams[index].falli = falls_teams;
        Teams_Name.push(teams[index].squadra);
        Teams_Falls.push(falls);
        index++
    }

    let result_squad = `Le Squadre partecipanti sono: ${Teams_Name.join(', ')}`;
    let result_falls = `I Falli di ogni squadra sono: [${Teams_Falls.join('-')}]`;
    let result_par = `>> ${result_squad}, ${result_falls}.`;
    
    return result_par
}

console.log(HandleTeamsPointsGen());

