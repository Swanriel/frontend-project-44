#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { generateRound } from '../src/games/gcd.js'

const description = 'Find the greatest common divisor of given numbers.'

runGame(description, generateRound)
