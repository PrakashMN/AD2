import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Project8K2 from './pages/Project8K2'
import Project7in3 from './pages/Project7in3'
import PreviousExpeditions from './pages/PreviousExpeditions'
import PortfolioPage from './pages/PortfolioPage'
import MountaineeringPage from './pages/MountaineeringPage'
import PhotographyPage from './pages/PhotographyPage'
import SustainableDesignPage from './pages/SustainableDesignPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/project-8k-x-2" element={<Project8K2 />} />
          <Route path="/project-7-in-3" element={<Project7in3 />} />
          <Route path="/previous-expeditions" element={<PreviousExpeditions />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/mountaineering" element={<MountaineeringPage />} />
          <Route path="/portfolio/photography" element={<PhotographyPage />} />
          <Route path="/portfolio/sustainable-design" element={<SustainableDesignPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
