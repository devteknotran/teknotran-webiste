import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import CaseStudyDetail from './pages/CaseStudyDetail.jsx'
import About from './pages/About.jsx'
import DWorker from './pages/DWorker.jsx'
import Training from './pages/Training.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="about" element={<About />} />
        <Route path="d-worker" element={<DWorker />} />
        <Route path="training" element={<Training />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
