import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Preloader from './components/Preloader'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Booking from './pages/Booking'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* We wait for loading to finish before rendering the main content so it doesn't flash. Or we can render it under the preloader, which is what we do here since Preloader is fixed z-50 */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
