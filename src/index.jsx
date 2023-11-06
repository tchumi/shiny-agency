import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Error from './components/Error/'
import Header from './components/Header/'
import Freelances from './pages/Freelances/'
import Home from './pages/Home/'
import Results from './pages/Results/'
import Survey from './pages/Survey/'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
        margin: 0;
    }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/Results/" element={<Results />} />
        <Route path="/Freelances/" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
