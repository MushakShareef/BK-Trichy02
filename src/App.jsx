


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Chest from './components/Chest'
import Footer from './components/Footer'
import Header from './components/Header'
import Neck from './components/Neck'
import Meditation from './components/Meditation'
import SEOHelmet from './components/SEOHelmet'
import './App.css'

// Home Page Component with SEO
const HomePage = () => (
  <>
    <SEOHelmet 
      title="Brahma Kumaris Trichy - Home | Meditation & Spiritual Center"
      description="Welcome to Brahma Kumaris Trichy center. Discover inner peace through meditation, yoga, and spiritual teachings in Tiruchirapalli."
      keywords="brahma kumaris trichy, meditation center trichy, yoga trichy, spirituality tamil nadu"
      canonical="https://bk-trichy02.vercel.app/"
    />
    <Neck />
    <Chest />
  </>
)

// About Page Component with SEO
const AboutPage = () => (
  <>
    <SEOHelmet 
      title="About Us - Brahma Kumaris Trichy | Our Mission & Values"
      description="Learn about Brahma Kumaris Trichy center, our mission, values, and commitment to spiritual growth and community service."
      keywords="about brahma kumaris, trichy center, spiritual mission, community service"
      canonical="https://bk-trichy02.vercel.app/aboutus"
    />
    <AboutUs />
  </>
)

// Meditation Page Component with SEO
const MeditationPage = () => (
  <>
    <SEOHelmet 
      title="Meditation Classes - Brahma Kumaris Trichy | Learn Raja Yoga"
      description="Join our meditation classes in Trichy. Learn Raja Yoga meditation techniques for inner peace, stress relief, and spiritual development."
      keywords="meditation classes trichy, raja yoga, meditation techniques, stress relief"
      canonical="https://bk-trichy02.vercel.app/meditation"
    />
    <Meditation />
  </>
)

function App() {
  return (
    <Router>
      <Header />
      <main role="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/meditation" element={<MeditationPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App