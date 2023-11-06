import styled from 'styled-components'
import Image from '../../assets/home-illustration.svg'
import colors from '../../utils/style/colors'
import StyledLink from '../../utils/style/Atoms'
import PageWrapper from '../../utils/style/PageWrapper'

const HomeContainer = styled.div`
  margin: 30px 50px;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.background};
`
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    margin: 30px;
    max-width: 200px;
  }
`
const ProfileImage = styled.img`
  height: 500px;
  width: 500px;
  padding: 50px;
`

const TextWrapper = styled.h1`
  color: white;
  padding-bottom: 30px;
  max-width: 400px;
  line-height: 50px;
`

function Home() {
  return (
    <PageWrapper>
      <HomeContainer>
        <LeftCol>
          <TextWrapper>
            Repérez vos besoins, on s'occupe du reste, avec les meilleurs
            talents
          </TextWrapper>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <ProfileImage src={Image} alt="profile" />
      </HomeContainer>
    </PageWrapper>
  )
}

export default Home
