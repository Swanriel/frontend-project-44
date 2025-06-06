const isEven = number => number % 2 === 0

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const question = String(number)
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export { generateRound }
