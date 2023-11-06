import Card from '../../components/Card'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import PageWrapper from '../../utils/style/PageWrapper'
import colors from '../../utils/style/colors'

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

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
]

function Freelances() {
  return (
    <PageWrapper>
      <div>
        <SubTitle>
          Shiny will provide the best profile for your project ?
        </SubTitle>
        <Title>Find your supplier</Title>
        <CardsContainer>
          {freelanceProfiles.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.jobTitle}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      </div>
    </PageWrapper>
  )
}

export default Freelances
