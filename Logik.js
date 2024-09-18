let diceResults = [1, 1, 1, 1, 1];
let diceHeld = [false, false, false, false, false];
let rollsLeft = 3;

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    if (rollsLeft > 0) {
        for (let i = 0; i < diceResults.length; i++) {
            if (!diceHeld[i]) {
                diceResults[i] = rollDie();
            }
        }
        updateDiceImages();
        rollsLeft--;
    }
}

function updateDiceImages() {
    for (let i = 0; i < diceResults.length; i++) {
        let diceImage = document.getElementById(`dice${i + 1}`);
        diceImage.src = `diceSetsFolder/whiteDice/dice-${diceResults[i]}.png`;

        if (diceHeld[i]) {
            diceImage.classList.add('held');
        } else {
            diceImage.classList.remove('held');
        }
    }
}

function selectDice(index) {
    index = index - 1; 
    diceHeld[index] = !diceHeld[index];  
    updateDiceImages();
}

function checkValidFields() {
    if (rollsLeft === 0) {
        let counts = countDice(diceResults);

        if (numberOfCategory(diceResults, 1) > 0) {
            document.getElementById("aces").disabled = false;
        }

        if (numberOfCategory(diceResults, 2) > 0) {
            document.getElementById("twos").disabled = false;
        }

        if (numberOfCategory(diceResults, 3) > 0) {
            document.getElementById("threes").disabled = false;
        }

        if (numberOfCategory(diceResults, 4) > 0) {
            document.getElementById("fours").disabled = false;
        }

        if (numberOfCategory(diceResults, 5) > 0) {
            document.getElementById("fives").disabled = false;
        }

        if (numberOfCategory(diceResults, 6) > 0) {
            document.getElementById("sixes").disabled = false;
        }

        if (onePair(diceResults) > 0) {
            document.getElementById("onePair").disabled = false;
        }

        if (twoPairs(diceResults) > 0) {
            document.getElementById("twoPairs").disabled = false;
        }


        if (threeOfAKind(diceResults) > 0) {
            document.getElementById("threeOfAKind").disabled = false;
        }

        if (fourOfAKind(diceResults) > 0) {
            document.getElementById("fourOfAKind").disabled = false;
        }

        if (fullHouse(diceResults) > 0) {
            document.getElementById("fullHouse").disabled = false;
        }

        if (smallStraight(diceResults) > 0) {
            document.getElementById("smallStraight").disabled = false;
        }

        if (largeStraight(diceResults) > 0) {
            document.getElementById("largeStraight").disabled = false;
        }

        if (yatzy(diceResults) > 0) {
            document.getElementById("yahtzee").disabled = false;
        }

        document.getElementById("chance").disabled = false;
    }
}
function countDice(dice) {
    let counts = {};
    for (let die of dice) {
        counts[die] = (counts[die] || 0) + 1;
    }
    return counts;
}

function rollButtonHandler() {
    rollDice();
    checkValidFields();
}
function numberOfCategory(dice, number) {
    return dice.filter(die => die === number).reduce((sum, die) => sum + die, 0);
}

function onePair(dice) {
    const counts = countDice(dice);
    for (let i = 6; i > 0; i--) {
        if (counts[i] >= 2) {
            return i * 2;
        }
    }
    return 0;
}

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

function threeOfAKind(dice) {
    const counts = countDice(dice);
    for (let i = 6; i > 0; i--) {
        if (counts[i] >= 3) {
            return i * 3;
        }
    }
    return 0;
}

function fourOfAKind(dice) {
    const counts = countDice(dice);
    for (let i = 6; i > 0; i--) {
        if (counts[i] >= 4) {
            return i * 4;
        }
    }
    return 0;
}

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

function smallStraight(dice) {
    const sorted = [...new Set(dice)].sort();
    return JSON.stringify(sorted) === JSON.stringify([1, 2, 3, 4, 5]) ? 15 : 0;
}

function largeStraight(dice) {
    const sorted = [...new Set(dice)].sort();
    return JSON.stringify(sorted) === JSON.stringify([2, 3, 4, 5, 6]) ? 20 : 0;
}

function chance(dice) {
    return dice.reduce((sum, die) => sum + die, 0);
}

function yatzy(dice) {
    return dice.every(die => die === dice[0]) ? 50 : 0;
}