import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'

function App() {
  return (
    <Router>
      {/* Header and Footer should be outside Routes */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes here later */}
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
