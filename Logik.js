

//Læg tallene sammen

//Ruller terningen  
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

//rulle 6 terninger 
function rollDice(numOfDice = 6) {
    let diceResults = [];
    for (let i = 0; i < numOfDice; i++) {
        //TO DO -----------
        //Stop terningerne fra at rulle igen
        diceResults.push(rollDie());
    }
    return diceResults;
}







//Select hvilken boks slaget skal gemmes i 