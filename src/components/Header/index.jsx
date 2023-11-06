import styled from 'styled-components'
import colors from '../../utils/style/colors'
import defautLogo from '../../assets/light-logo.png'
import StyledLink from '../../utils/style/Atoms'
import { Link } from 'react-router-dom'

const HeaderdWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.frame};
  padding: 30px;
  align-items: center;
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: right;
`

const LogoImage = styled.img`
  height: 80px;
  width: 200px;
`

function Header() {
  return (
    <nav>
      <HeaderdWrapper>
        <Link to="/">
          <LogoImage src={defautLogo} alt="logo" />
        </Link>
        <LinkWrapper>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/freelances">Profils</StyledLink>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LinkWrapper>
      </HeaderdWrapper>
    </nav>
  )
}

export default Header
