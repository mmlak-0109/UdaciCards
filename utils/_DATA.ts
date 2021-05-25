import { Flashcard } from './helpers'
import dayjs from 'dayjs';

export const DECKS_STORAGE_KEY = 'UdaciCards:decks'

// React
let q1: Flashcard = {
  id: 'ko2din042rzlbz32bbl2c',
  question: 'What is React?',
  answer: 'A library for managing user interfaces',
  interval: 0,
  repetition: 0,
  efactor: 2.5,
  dueDate: dayjs(Date.now()).toISOString(),
}

let q2: Flashcard = {
  id: 'xknz00phtpdkncgudx712',
  question: 'Where do you make Ajax requests in React?',
  answer: 'The componentDidMount lifecycle event',
  interval: 0,
  repetition: 0,
  efactor: 2.5,
  dueDate: dayjs(Date.now()).toISOString(),
}

// Javascript
let q3: Flashcard = {
  id: 'o5iv0kilqag7fkg51ges',
  question: 'What is a closure?',
  answer: 'The combination of a function and the lexical environment within which that function was declared.',
  interval: 0,
  repetition: 0,
  efactor: 2.5,
  dueDate: dayjs(Date.now()).toISOString(),
}

export const decks = {
  'a1paw3arzvmsjzunbqldc8' : {
    id: 'a1paw3arzvmsjzunbqldc8',
    title: 'React',
    dateCreated: new Date().toLocaleDateString(),
    cardCount: 2,
    questions: [
      q1,
      // q2,
    ]
  },
  'fm71encsnjcqqpewbqrzz' : {
    id: 'fm71encsnjcqqpewbqrzz',
    title: 'JavaScript',
    dateCreated: new Date().toLocaleDateString(),
    cardCount: 1,
    questions: [
      q3
    ]
  }
}