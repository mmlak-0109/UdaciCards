const decks = {
  '1' : {
    id: '1',
    title: 'React',
    dateCreated: new Date('04-21-2021'),
    cardCount: 2,
    questions: [
      {
        id: 1,
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        id: 2,
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  '2' : {
    id: '2',
    title: 'JavaScript',
    dateCreated: new Date('04-21-2021'),
    cardCount: 1,
    questions: [
      {
        id: 1,
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export default decks