import { Routes, Route } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import { useIsMobile } from "../hooks/useIsMobile"

import Home from "../pages/Hero/Hero"
import About from "../pages/About/About"
import Skills from "../pages/Skills/SkillsSection" 
import Experience from "../pages/Experience/Experience"
import Projects from "../pages/Projects/Projects"
import Education from "../pages/EducationSection/EducationSection" 
import Contact from "../pages/Contact/Contact"
import MobileHome from "../pages/MobileHome/MobileHome" 

export default function AppRoutes() {
  const isMobile = useIsMobile()

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {isMobile ? (
          <>
            {/* 📱 MOBILE — página única */}
            <Route path="/" element={<MobileHome />} />
            <Route path="*" element={<MobileHome />} />
          </>
        ) : (
          <>
            {/* 💻 DESKTOP — rotas normais */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </>
        )}
      </Route>
    </Routes>
  )
}
