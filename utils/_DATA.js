// TODO: Add storage key and create functions in api file to
// handle data fetches, etc.

export const DECKS_STORAGE_KEY = 'UdaciCards:decks'

export const decks = {
  'a1paw3arzvmsjzunbqldc8' : {
    id: 'a1paw3arzvmsjzunbqldc8',
    title: 'React',
    dateCreated: new Date().toLocaleDateString(),
    cardCount: 2,
    questions: [
      {
        id: 'ko2din042rzlbz32bbl2c',
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        id: 'xknz00phtpdkncgudx712',
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  'fm71encsnjcqqpewbqrzz' : {
    id: 'fm71encsnjcqqpewbqrzz',
    title: 'JavaScript',
    dateCreated: new Date().toLocaleDateString(),
    cardCount: 1,
    questions: [
      {
        id: 'o5iv0kilqag7fkg51ges',
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}