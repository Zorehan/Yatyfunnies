



//Ruller terningen  
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

//Ruller 5 terninger 
function rollDice(numOfDice = 5) {
    let diceResults = [];
    for (let i = 0; i < numOfDice; i++) {
        //TODO ----------- (colour mood is comming for you)
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


//eventhandler der skal rulle terningerne 


//---------------------------------------------------------------------------------
//Select hvilken boks slaget skal gemmes i:
function selectDice(){
    
}

//X-er
function numberOfCategory(dice, number) {
    return dice.filter(die => die === number).reduce((sum, die) => sum + die, 0);
}

//Et par
function onePair(dice) {
    const counts = countDice(dice);
    for (let i = 6; i > 0; i--) {
        if (counts[i] >= 2) {
            return i * 2;
        }
    }
    return 0;
}

//To par
function twoPairs(dice) {
    const counts = countDice(dice);
    let pairs = [];
    for (let i = 6; i > 0; i--) {
        if (counts[i] >= 2) {
            pairs.push(i);
            if (pairs.length === 2) {
                return pairs[0] * 2 + pairs[1] * 2;
            }
        }
    }
    return 0;
}

//tre par
function threeOfAKind(dice) {
    const counts = countDice(dice);
    for (let i = 6; i > 0; i--) {
        if (counts[i] >= 3) {
            return i * 3;
        }
    }
    return 0;
}

//fire par
function fourOfAKind(dice) {
    const counts = countDice(dice);
    for (let i = 6; i > 0; i--) {
        if (counts[i] >= 4) {
            return i * 4;
        }
    }
    return 0;
}

//fuldt hus
function fullHouse(dice) {
    const counts = countDice(dice);
    let three = 0, two = 0;
    for (let i = 6; i > 0; i--) {
        if (counts[i] === 3) {
            three = i;
        } else if (counts[i] === 2) {
            two = i;
        }
    }
    return (three && two) ? three * 3 + two * 2 : 0;
}

//lille straight
function smallStraight(dice) {
    const sorted = [...new Set(dice)].sort();
    return JSON.stringify(sorted) === JSON.stringify([1, 2, 3, 4, 5]) ? 15 : 0;
}

//stor straight
function largeStraight(dice) {
    const sorted = [...new Set(dice)].sort();
    return JSON.stringify(sorted) === JSON.stringify([2, 3, 4, 5, 6]) ? 20 : 0;
}

//chance
function chance(dice) {
    return sumDiceResults(dice);
}

//yatzy 
function yatzy(dice) {
    return dice.every(die => die === dice[0]) ? 50 : 0;
}