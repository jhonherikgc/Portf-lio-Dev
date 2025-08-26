import Navbar from "../../components/Navbar"
import Hero from "../Sections/Hero/Hero"
import About from "../Sections/About/About"
import SkillsSection from "../Sections/SkillsSection/SkillsSection"
import ProjectSection from "../Sections/Projects/ProjectSection"
import BackToTop from "../../components/BacktoTop/BackToTop"

const Home = () => {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <SkillsSection/>
    <ProjectSection/>
    <BackToTop/>
    </>
  )
}

export default Home
