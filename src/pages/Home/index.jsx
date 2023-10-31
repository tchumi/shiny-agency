import React, { useState } from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Balloon = styled.div`
  background-color: #5843e4;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  transform: scale(${({ size }) => size});
`

function Home() {
  const [size, setSize] = useState(1)
  return (
    <HomeContainer>
      <h1 onClick={() => setSize(size + 0.1)}>Page d'accueil 🏡</h1>
      <Balloon size={size} />
    </HomeContainer>
  )
}

export default Home
