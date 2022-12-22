// define options for gameMode
var gameStateArray = [
  "RollDiceModePlayerOne",
  "ChooseDiceOrderPlayerOne",
  "RollDiceModePlayerTwo",
  "ChooseDiceOrderPlayerTwo",
];

//set gameMode to Player One's Dice Rolls
var gameMode = gameStateArray[0];

//define variables for each die roll and the players' final values after ordering
//for player one
var diceRollOnePlayerOne = "";
var diceRollTwoPlayerOne = "";
var playerOneNumber = "";
//for player two
var diceRollOnePlayerTwo = "";
var diceRollTwoPlayerTwo = "";
var playerTwoNumber = "";

// dice roll function
var diceRoll = function () {
  diceOutput = Math.floor(Math.random() * 6) + 1;
  return diceOutput;
};

// game main function
var main = function (input) {
  var outputValue = "";
  //player 1 roll dice
  if (gameMode === gameStateArray[0]) {
    diceRollOnePlayerOne = diceRoll();
    diceRollTwoPlayerOne = diceRoll();
    if (diceRollOnePlayerOne === diceRollTwoPlayerOne) {
      outputValue =
        // if both dice value are the same (player skips the ordering)
        `🎲 Welcome Player 1 🎲 You rolled ${diceRollOnePlayerOne} on both dice! Your number is ${diceRollOnePlayerOne}${diceRollOnePlayerOne}. Time for Player 2 to roll!`;
      playerOneNumber =
        String(diceRollOnePlayerOne) + String(diceRollOnePlayerOne);
      gameMode = gameStateArray[2];
    } else {
      // send player 1 to order their dice
      outputValue = `🎲 Welcome Player 1 🎲 You rolled ${diceRollOnePlayerOne} on your first roll and ${diceRollTwoPlayerOne} on your second roll. Please select which die you would like to place in front by inputting '1' or '2'.`;
      gameMode = gameStateArray[1];
    }
  } else if (gameMode === gameStateArray[1]) {
    // player 1 order dice
    // input validation to check if number and then if it's 1 or 2
    var userOrder = Number(input);
    if (typeof userOrder === "number") {
      if (userOrder === 1) {
        // player 1 puts first dice roll in front
        playerOneNumber =
          String(diceRollOnePlayerOne) + String(diceRollTwoPlayerOne);
        gameMode = gameStateArray[2];
        outputValue = `Your number is ${playerOneNumber}. Time for Player 2 to roll!`;
      } else if (userOrder === 2) {
        // player 1 puts second dice roll in front
        playerOneNumber =
          String(diceRollTwoPlayerOne) + String(diceRollOnePlayerOne);
        gameMode = gameStateArray[2];
        outputValue = `Your number is ${playerOneNumber}. Time for Player 2 to roll!`;
      } else {
        outputValue = "Please enter either 1 or 2.";
      }
    } else {
      outputValue = "Please enter either 1 or 2.";
    }
    //player 2 roll dice
  } else if (gameMode === gameStateArray[2]) {
    diceRollOnePlayerTwo = diceRoll();
    diceRollTwoPlayerTwo = diceRoll();
    if (diceRollOnePlayerTwo === diceRollTwoPlayerTwo) {
      // test if the values are the same, then compare player 1 and player 2 number to see who won
      playerTwoNumber =
        String(diceRollTwoPlayerTwo) + String(diceRollTwoPlayerTwo);
      if (playerOneNumber > playerTwoNumber) {
        outputValue = `🎲 Welcome Player 2 🎲 You rolled ${diceRollOnePlayerTwo} on both dice! Your number is ${diceRollOnePlayerTwo}${diceRollOnePlayerTwo}! Player 1's number is ${playerOneNumber}. You lost!`;
        gameMode = gameStateArray[0];
      } else if (playerOneNumber < playerTwoNumber) {
        outputValue = `🎲 Welcome Player 2 🎲 You rolled ${diceRollOnePlayerTwo} on both dice! Your number is ${diceRollOnePlayerTwo}${diceRollOnePlayerTwo}! Player 1's number is ${playerOneNumber}. You won!`;
        gameMode = gameStateArray[0];
      } else {
        outputValue = `🎲 Welcome Player 2 🎲 You rolled ${diceRollOnePlayerTwo} on both dice! Your number is ${diceRollOnePlayerTwo}${diceRollOnePlayerTwo}! Player 1's number is ${playerOneNumber}. It's a tie!`;
        gameMode = gameStateArray[0];
      }
    } else {
      // send player 2 to order their dice
      outputValue = `🎲 Welcome Player 2 🎲 You rolled ${diceRollOnePlayerTwo} on your first roll and ${diceRollTwoPlayerTwo} on your second roll. Please select which die you would like to place in front by inputting '1' or '2'.`;
      gameMode = gameStateArray[3];
    }
  } else if (gameMode === gameStateArray[3]) {
    // check if input is number
    var userOrder = Number(input);
    if (typeof userOrder === "number") {
      if (userOrder === 1) {
        // player 2 puts first dice roll in front
        playerTwoNumber =
          String(diceRollOnePlayerTwo) + String(diceRollTwoPlayerTwo);
        if (playerTwoNumber > playerOneNumber) {
          outputValue = `Your number is ${playerTwoNumber}. Player 1's number is ${playerOneNumber}. You won!`;
          gameMode = gameStateArray[0];
        } else if (playerTwoNumber < playerOneNumber) {
          outputValue = `Your number is ${playerTwoNumber}. Player 1's number is ${playerOneNumber}. You lost!`;
          gameMode = gameStateArray[0];
        } else {
          outputValue = `Your number is ${playerTwoNumber}. Player 1's number is ${playerOneNumber}. It's a tie!`;
          gameMode = gameStateArray[0];
        }
      } else if (userOrder === 2) {
        // player 2 puts second dice roll in front
        playerTwoNumber =
          String(diceRollTwoPlayerTwo) + String(diceRollOnePlayerTwo);
        if (playerTwoNumber > playerOneNumber) {
          outputValue = `Your number is ${playerTwoNumber}. Player 1's number is ${playerOneNumber}. You won!`;
          gameMode = gameStateArray[0];
        } else if (playerTwoNumber < playerOneNumber) {
          outputValue = `Your number is ${playerTwoNumber}. Player 1's number is ${playerOneNumber}. You lost!`;
          gameMode = gameStateArray[0];
        } else {
          outputValue = `Your number is ${playerTwoNumber}. Player 1's number is ${playerOneNumber}. It's a tie!`;
          gameMode = gameStateArray[0];
        }
      } else {
        outputValue = "Please enter either 1 or 2.";
      }
    } else {
      outputValue = "Please enter either 1 or 2.";
    }
  }
  return outputValue;
};
