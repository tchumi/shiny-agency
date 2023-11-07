import styled from 'styled-components'
import { keyframes } from 'styled-components'
import colors from './colors'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white;
    border-radius: 30px;
    background-color: ${colors.primary};`}
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`
export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default StyledLink
