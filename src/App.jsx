import Profile from './components/profile'
import './App.css'
import Navbar from './components/Navbar'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import Portfolio from './components/portfolio'

function App() {
  
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Profile} />
        <Route path='/about' exact Component={About} />
        <Route path='/portfolio' exact Component={Portfolio} />

      </Routes>
      </Router>
    </>
  )
}

export default App
