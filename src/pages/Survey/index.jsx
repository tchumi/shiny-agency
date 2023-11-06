import { Link, useParams } from 'react-router-dom'
import PageWrapper from '../../utils/style/PageWrapper'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  return (
    <PageWrapper>
      <div>
        <h1>Questionnaire 🧮</h1>
        <h2>Question {questionNumber}</h2>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {questionNumberInt === 10 ? (
          <Link to="/results">Résultats</Link>
        ) : (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        )}
      </div>
    </PageWrapper>
  )
}
export default Survey
