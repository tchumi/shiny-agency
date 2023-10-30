import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const [question, setQuestion] = useState(1)
  const [goToResults, setGoToResults] = useState(false)

  return goToResults ? (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Fin du questionnaire</h2>
      <Link to="/results">Résultats</Link>
    </div>
  ) : (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {question}</h2>
      <button onClick={() => question > 1 && setQuestion(question - 1)}>
        Question précédente
      </button>
      {question === 10 && (
        <button onClick={() => setGoToResults(true)}>Résultats</button>
      )}
      {question < 10 && (
        <button onClick={() => setQuestion(question + 1)}>
          Question suivante
        </button>
      )}
    </div>
  )
}
export default Survey
