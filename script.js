// Exercise 1: Even or Odd Checker
function evenOrOddChecker() {
  const number = parseInt(prompt("Enter a number"));
  if (number % 2 === 0) {
    alert("The number is even");
  } else {
    alert("The number is odd");
  }
}

// Exercise 2: Basic Calculator
function basicCalculator() {
  const num1 = parseFloat(prompt("Enter first number"));
  const operator = prompt("Enter operator (+, -, *, /)");
  const num2 = parseFloat(prompt("Enter second number"));
  let result;

if (operator === "+") {
    result = num1 + num2;
    alert(`The addition of numbers is = ${result}`);
  } else if (operator === "-") {
    result = num1 - num2;
    alert(`The subtraction of numbers is = ${result}`);
  } else if (operator === "*") {
    result = num1 * num2;
    alert(`The multiplication of numbers is = ${result}`);
  } else if (operator === "/") {
    result = num1 / num2;
    alert(`The division of numbers is = ${result}`);
  } else {
    alert("Invalid operator");
    return;
  }
}

// Exercise 3: Voting Eligibility Checker
function votingEligibilityChecker() {
  const age = parseInt(prompt("Enter your age"));
  if (age >= 18) {
    alert("You are eligible to vote");
  } else {
    alert("You are not eligible to vote yet");
  }
}

// Exercise 4: Print Numbers from 1 to 10
function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Exercise 5: Multiplication Table Generator
function multiplicationTableGenerator() {
  const number = parseInt(prompt("Enter a number"));
  for (let i = 1; i <= 12; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

// Exercise 6: Grade Checker
function gradeChecker() {
  const score = parseInt(prompt("Enter your score (0–100)"));
  if (score >= 70 && score <= 100) {
    alert("Excellent");
  } else if (score >= 50 && score <= 69) {
    alert("Good");
  } else if (score < 50) {
    alert("Needs Improvement");
  } else {
    alert("Invalid score");
  }
}

// Exercise 7: Guess the Number Game
function guessTheNumberGame() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const guess = parseInt(prompt("Guess a number between 1 and 5"));
  if (guess === randomNumber) {
    alert("You guessed right!");
  } else {
    alert(`Wrong guess. The number was ${randomNumber}`);
  }
}

// Exercise 8: FizzBuzz Challenge
function fizzBuzzChallenge() {
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

evenOrOddChecker();
// basicCalculator();
// votingEligibilityChecker();
// printNumbers();
// multiplicationTableGenerator();
// gradeChecker();
// guessTheNumberGame();
// fizzBuzzChallenge();