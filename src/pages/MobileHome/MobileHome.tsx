import AboutSection from "../About/About";
import ContactSection from "../Contact/Contact";
import EducationSection from "../EducationSection/EducationSection";
import ExperienceSection from "../Experience/Experience";
import HeroSection from "../Hero/Hero";
import ProjectsSection from "../Projects/Projects";
import SkillsSection from "../Skills/SkillsSection";
import Footer from "../../components/Footer/Footer"

export default function MobileHome() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection/>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer/>
    </div>
  )
}
