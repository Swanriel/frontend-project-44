import { runGame } from '../index.js';
import { getRandomNumber } from '../helpers/random.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [String(number), correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runGame(description, generateRound);