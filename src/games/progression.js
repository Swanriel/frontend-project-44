import { runGame } from '../index.js'
import { getRandomNumber } from '../helpers/random.js'

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step)
}

const generateRound = () => {
  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(1, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progression = generateProgression(start, step, length)
  const correctAnswer = String(progression[hiddenIndex])

  const question = progression
    .map((num, i) => (i === hiddenIndex ? '..' : num))
    .join(' ')

  return [question, correctAnswer]
}

const description = 'What number is missing in the progression?'

export default () => runGame(description, generateRound)
