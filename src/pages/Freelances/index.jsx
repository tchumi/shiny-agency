import Card from '../../components/Card'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import PageWrapper from '../../utils/style/PageWrapper'
import colors from '../../utils/style/colors'
import { useEffect } from 'react'
import { useState } from 'react'
import { Loader } from '../../utils/style/Atoms'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 350px 350px;
  align-items: center;
  justify-items: center;
  background-color: ${colors.frame};
`
const Title = styled.h1`
  color: white;
  padding-bottom: 30px;
  line-height: 50px;
  text-align: center;
`
const SubTitle = styled.h3`
  color: white;
  padding-bottom: 30px;
  line-height: 50px;
  text-align: center;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  const [isDataLoading, setDataLoading] = useState(true)
  const [error, setError] = useState(null)
  const [freelancersList, setFreelancersList] = useState([])

  useEffect(() => {
    async function fetchProfile() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList } = await response.json()
        setFreelancersList(freelancersList)
        console.log(freelancersList)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchProfile()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }
  return (
    <PageWrapper>
      <div>
        <SubTitle>
          Shiny will provide the best profile for your project ?
        </SubTitle>
        <Title>Find your supplier</Title>
        {isDataLoading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          <CardsContainer>
            {freelancersList.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                picture={profile.picture}
                title={profile.name}
              />
            ))}
          </CardsContainer>
        )}
      </div>
    </PageWrapper>
  )
}

export default Freelances
