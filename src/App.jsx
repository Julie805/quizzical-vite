import { useState } from 'react'
import Intro from "./Intro"
import Quiz from "./Quiz"

export default function App() {
  const [start, setStart] = useState(false)
  // Need to decide where this state is being tracked and set, here or in Intro.jsx
  const [userChoices, setUserChoices] = useState({
    number: 5,
    difficulty: "",
    category: "",
    isTimed: true
  });

  // All this does is call setUserChoices, so you can just pass that function instead of creating this extra one
  function handleUserChoices (number, difficulty, category, isTimed) {
    setUserChoices({
      ...userChoices,
      number: number,
      difficulty: difficulty,
      category: category,
      isTimed: isTimed
    });
  }

  // Removing setUserChoices just leaves setStart so you can just call it directly
  // function playAgain() {
  //   setStart(false)
  // }

  return (
    <main>
      <div>
        { start ?
          <Quiz
            playAgain={() => setStart(false)}
            number={userChoices.number}
            difficulty={userChoices.difficulty}
            category={userChoices.category}
            isTimed={userChoices.isTimed}
          /> :
          <Intro
            start={() => setStart(true)}
            handleUserChoices={handleUserChoices}
          />
        }
      </div>
    </main>
  )
}


