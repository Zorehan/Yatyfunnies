



//Ruller terningen  
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

//Ruller 6 terninger 
function rollDice(numOfDice = 6) {
    let diceResults = [];
    for (let i = 0; i < numOfDice; i++) {
        //TO DO -----------
        //Stop terningerne fra at rulle igen
        diceResults.push(rollDie());
    }
    return diceResults;
}

//Lægger tallene sammen
function sumDiceResults(diceResults) {
    return diceResults.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

//Udregner totalsummen af alle slag 
let totalSum = sumDiceResults(diceRoll); 
console.log("Sum of dice rolls:", totalSum);



//eventhandler der skal rulle terningerne 


//---------------------------------------------------------------------------------
//Select hvilken boks slaget skal gemmes i:


//1-er

//2-er

//3-er

//4-er

//5-er

//6-er

//Et par

//To par

//tre par

//fire par

//fuldt hus

//lille straight

//stor straight

//chance

//yatzy 