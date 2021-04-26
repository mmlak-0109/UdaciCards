App.js (Root Component)
- Handle initial loading and final saving to AsyncStorage

Decks.js (Home Component)
- Retrieves and displays list of decks only
- Each deck displays name of deck and # of cards contained

AddDeck.js
- Local state hold user input for deck name
- Deck name and date of creation are dispatched to Redux

Stats.js
- Retrieves and displays data only

Cards.js
- Retrieves and displays data only

Cards.js (card edit modal)
- Local state holds questiona and answer text for given card
- Local state is updated with user input
  - Changes are dispatched to Redux (card data is overwritten)

AddCard.js
- Local state hold user input for card question and answer
- Local state are dispatched to Redux

Quiz.js
- Local state records number of correct/incorrect responses
- Dispatches quiz results info to Redux upon quiz completion

- QuizQuestion
  - Displays question only
- QuizAnswer
  - Displays answer and updates local state with button press
- QuizResults
  - Displays final score
