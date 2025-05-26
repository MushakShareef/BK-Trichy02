




import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Chest from './components/Chest'
import Footer from './components/Footer'
import Header from './components/Header'
import Neck from './components/Neck'
import Meditation from './components/Meditation'
import './App.css'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Neck />< Chest /></>} />
        <Route path="/aboutus" element={< AboutUs />} />
        <Route path="/meditation" element={< Meditation />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
