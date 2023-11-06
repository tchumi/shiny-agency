import PropTypes from 'prop-types'
import defaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  background-color: ${colors.background};
  border-radius: 30px;
  width: 300px;
  transition: 100ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`
const CardLabel = styled.span`
  color: white;
  font-size: 22px;
  font-weight: bold;
  ${(props) => props.$isCenter && `text-align:center;`}
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: 30px auto;
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardLabel $isCenter>{title}</CardLabel>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}
Card.defaultProps = {
  label: 'Mon label',
  title: 'Mon titre',
  picture: defaultPicture,
}

export default Card
