#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { generateRound } from '../src/games/progression.js'

const description = 'What number is missing in the progression?'

runGame(description, generateRound)
