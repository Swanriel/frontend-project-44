#!/usr/bin/env -S node --experimental-modules
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => number % 2 === 0;

let correctAnswersCount = 0;
const requiredCorrectAnswers = 3;

while (correctAnswersCount < requiredCorrectAnswers) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question("Your answer: ").toLowerCase();
  const correctAnswer = isEven(randomNumber) ? "yes" : "no";

  if (userAnswer === correctAnswer) {
    console.log("Correct!");
    correctAnswersCount += 1;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );
    console.log(`Let's try again, ${name}!`);
    process.exit();
  }
}

console.log(`Congratulations, ${name}!`);
