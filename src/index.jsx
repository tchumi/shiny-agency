import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header/'
import Home from './pages/Home/'
import Survey from './pages/Survey/'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
