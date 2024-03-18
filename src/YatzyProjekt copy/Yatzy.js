let dice = []
let turnCount = 1;

function rollDice() {
  dice = [];
  
  
  
  for (let i = 0; i < 5; i++) {
    dice.push(Math.floor(Math.random() * 6) + 1);
  }

let turnId = document.querySelector("#turn")  
turnId.innerHTML = "Turn: " + turnCount
turnCount++;


  if (turnCount === 4) {
    document.querySelector('.roll-button').disabled = true;
    
  }


  updateDiceUI();
  

  updateScore();
}

function playDiceSound() {
  const audio = new Audio('dice-142528.mp3');
  audio.play();
}

function updateDiceUI() {
  const diceElements = document.querySelectorAll('.die');
  diceElements.forEach((die, index) => {
    if(!die.isHold){
    die.src = `dice${dice[index]}.png`; 
    }
  });
}



function holdButton(id) {
  const die = document.getElementById(id);
  if (!die.isHold) {
    die.isHold = true;
    die.style.opacity = 0.5;
  } else {
    die.isHold = false;
    die.style.opacity = 1;
  }
}


function resetHoldButtons() {
  document.querySelectorAll('.die').forEach((die, index) => {
    dice[index] = Math.floor(Math.random() * 6) + 1; 
    die.style.opacity = 1; 
});
}


document.querySelector('.roll-button').addEventListener('click', rollDice);
addListenerToInput();

function addListenerToInput() {
  let inputs = document.querySelectorAll('.inputValue')
  for (let element of inputs) {
    element.addEventListener('click', getAllInputValues)
  }
}

function getAllInputValues() {
  let inputElements = document.querySelectorAll('.inputValue');
  let values = {};

  for (let element of inputElements) {
    let id = element.id;
    let value = element.value;
    values[id] = value;
  }
  console.log(values)
  return values;
}

function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.select();
}


document.querySelector('.new-game-button').addEventListener('click', () => {

  resetHoldButtons();
  

});




function updateScore() {
  document.getElementById('1-s').value = sameValuePoints(1);
  document.getElementById('2-s').value = sameValuePoints(2);
  document.getElementById('3-s').value = sameValuePoints(3);
  document.getElementById('4-s').value = sameValuePoints(4);
  document.getElementById('5-s').value = sameValuePoints(5);
  document.getElementById('6-s').value = sameValuePoints(6);
  
  document.getElementById('one-pair').value = onePairPoints();
  document.getElementById('two-pairs').value = twoPairPoints();
  document.getElementById('three-same').value = threeSamePoints();
  document.getElementById('four-same').value = fourSamePoints();
  document.getElementById('full-house').value = fullHousePoints();
  document.getElementById('small-straight').value = smallStraightPoints();
  document.getElementById('large-straight').value = largeStraightPoints();
  document.getElementById('chance').value = chancePoints();
  document.getElementById('yatzy').value = yatzyPoints();
  

  const totalScore = sameValuePoints(1) + sameValuePoints(2) + sameValuePoints(3) + sameValuePoints(4) + sameValuePoints(5) + sameValuePoints(6) + bonus() + onePairPoints() + twoPairPoints() + threeSamePoints() + fourSamePoints() + fullHousePoints() + smallStraightPoints() + largeStraightPoints() + chancePoints() + yatzyPoints();
  document.getElementById('total').value = totalScore;

0
  const sum = sameValuePoints(1) + sameValuePoints(2) + sameValuePoints(3) + sameValuePoints(4) + sameValuePoints(5) + sameValuePoints(6);
  document.getElementById('sum').value = sum;

  const bonus = bonus();
  document.getElementById('bonus').value = bonus;
}




function frequency() {
  let freq = {};
  for (let i = 0; i < dice.length; i++) {
    let faceValue = dice[i];
    if (freq[faceValue]) {
      freq[faceValue]++;
    } else {
      freq[faceValue] = 1;
    }
  }
  return freq;
}

function sameValuePoints(value) {
  let freq = frequency();
    return freq[value] * value;
}

function onePairPoints() {
  let freq = frequency();
    for (let value in freq) {
        if (freq[value] >= 2) {
        return value * 2;
        }
    }
}

function twoPairPoints() {
  let freq = frequency();
  let pairCount = 0;
  let points = 0;
  for (let value in freq) {
    if (freq[value] >= 2) {
      pairCount++;
      points += value * 2;
    }
  }
  if (pairCount >= 2) {
    return points;
  } else {
    return 0;
  }
}

function threeSamePoints() {
  let freq = frequency();
    for (let value in freq) {
        if (freq[value] >= 3) {
        return value * 3;
        }
    }
}

function fourSamePoints() {
  let freq = frequency();
    for (let value in freq) {
        if (freq[value] >= 4) {
        return value * 4;
        }
    }
}

function fullHousePoints() {
    let freq = frequency();
    let three = false;
    let two = false;
    for (let value in freq) {
        if (freq[value] === 3) {
        three = true;
        }
        if (freq[value] === 2) {
        two = true;
        }
    }
    if (three && two) {
        return chancePoints();
    } else {
        return 0;
    }
}

function smallStraightPoints() {
  let sortedDice = dice.sort();
  if (
    (sortedDice[0] === 1 && sortedDice[1] === 2 && sortedDice[2] === 3 && sortedDice[3] === 4) ||
    (sortedDice[1] === 2 && sortedDice[2] === 3 && sortedDice[3] === 4 && sortedDice[4] === 5) ||
    (sortedDice[2] === 3 && sortedDice[3] === 4 && sortedDice[4] === 5 && sortedDice[5] === 6)
  ) {
    return 15;
  } else {
    return 0;
  }
}

function largeStraightPoints() {
  let sortedDice = dice.sort();
  if (
    (sortedDice[0] === 1 && sortedDice[1] === 2 && sortedDice[2] === 3 && sortedDice[3] === 4 && sortedDice[4] === 5) ||
    (sortedDice[1] === 2 && sortedDice[2] === 3 && sortedDice[3] === 4 && sortedDice[4] === 5 && sortedDice[5] === 6)
  ) {
    return 20;
  } else {
    return 0;
  }
}

function chancePoints() {
  let sum = 0;
  for (let i = 0; i < dice.length; i++) {
    sum += dice[i];
  }
  return sum;
}

function yatzyPoints() {
  let freq = frequency();
  for (let value in freq) {
    if (freq[value] === 5) {
      return 50;
    }
  }
  return 0;
}

function sum(){
  let sum = 0;
  for (let i = 0; i < dice.length; i++) {
    sum += dice[i];
  }
  return sum;

}


function bonus(){
  let sum = 0;
  if(sum() >= 63){
    return 50;
  }
    return 0;
  }
  



