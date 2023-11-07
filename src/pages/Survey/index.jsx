import { Link, useParams } from 'react-router-dom'
import PageWrapper from '../../utils/style/PageWrapper'
import { useEffect } from 'react'
import { useState } from 'react'
import { Loader } from '../../utils/style/Atoms'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.question};
  color: ${colors.question};
`

const QuestionContent = styled.span`
  margin: 30px;
  color: ${colors.question};
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: white;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`
function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchSurvey() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/survey`)
        const { surveyData } = await response.json()
        setSurveyData(surveyData)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchSurvey()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }
  return (
    <PageWrapper>
      <SurveyContainer>
        <QuestionTitle>Question {questionNumber}</QuestionTitle>
        {isDataLoading ? (
          <Loader />
        ) : (
          <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
        )}
        <LinkWrapper>
          <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
          {surveyData[questionNumberInt + 1] ? (
            <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
          ) : (
            <Link to="/results">Résultats</Link>
          )}
        </LinkWrapper>
      </SurveyContainer>
    </PageWrapper>
  )
}
export default Survey
