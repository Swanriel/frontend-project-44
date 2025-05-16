const generateRound = () => {
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b))

  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = String(findGCD(num1, num2))

  return [question, correctAnswer]
};

export { generateRound }
