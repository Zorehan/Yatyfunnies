let diceRoll = new Array(5)

let checked = [false,false,false,false,false]

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
function diceRoller(){
    checkCheck()
    diceUpdate()
    diceImgUpdate()
    console.log(checked)
    console.log(diceRoll)



}

function checkCheck(){
    let check
    for(let i = 0; i < checked.length;i++){
        check = document.getElementById("reroleDice" + (i + 1))
        checked[i] = check.checked
        
    }
}

function diceUpdate(){
    let dice = rollDice()
    for(let i = 0; i < diceRoll.length; i++){
        if(checked[i] !== true){
            diceRoll[i] = dice[i]
        }
    }

}

function diceImgUpdate(){
    imgThrow()
    imgRolling()
    for(let i = 0; i < 5; i++){
        if(checked[i]!== true){
        document.getElementById('dice' + (i + 1)).src = "diceSetsFolder/whiteDice/dice-"+ diceRoll[i] +".png"
        }
    }

}

function imgThrow(){
    for(let i = 0; i < 5; i++){
        if(checked[i] !== true){
        document.getElementById('dice' + (i + 1)).src = "diceThrow/dice-cup.png"
        }
    }
    wait(500)
   

}

function imgRolling(){
    for(let i = 0; i < 5; i++){
        if(checked[i] !== true){
        document.getElementById('dice' + (i + 1)).src = "diceThrow/cubes.png"
        }
    }
    setTimeout(1000)
    wait(500)
}

let wait = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}


//---------------------------------------------------------------------------------
//Select hvilken boks slaget skal gemmes i:
function selectDice(){
    
}

//X-antal af en ternnig 
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