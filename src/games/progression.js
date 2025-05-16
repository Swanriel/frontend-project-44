const generateRound = () => {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(1, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progression = Array.from({ length }, (_, i) => start + i * step)
  const correctAnswer = String(progression[hiddenIndex])

  const question = progression
    .map((num, i) => (i === hiddenIndex ? '..' : num))
    .join(' ')

  return [question, correctAnswer]
}

export { generateRound }
