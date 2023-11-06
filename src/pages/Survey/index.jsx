import { Link, useParams } from 'react-router-dom'
import PageWrapper from '../../utils/style/PageWrapper'
import { useEffect } from 'react'
import { useState } from 'react'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/survey`).then((response) =>
      response
        .json()
        .then(({ surveyData }) => setSurveyData(surveyData))
        .catch((error) => console.log(error)),
    )
  }, [])

  return (
    <PageWrapper>
      <div>
        <h1>Questionnaire 🧮</h1>
        <h2>Question {questionNumber}</h2>
        <h3>{surveyData[questionNumber]} </h3>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </div>
    </PageWrapper>
  )
}
export default Survey
