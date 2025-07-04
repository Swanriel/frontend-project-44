import { runGame } from '../index.js'
import { getRandomNumber } from '../helpers/random.js'

const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b))

const generateRound = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = String(findGCD(num1, num2))
  return [question, correctAnswer]
}

const description = 'Find the greatest common divisor of given numbers.'

export default () => runGame(description, generateRound)
