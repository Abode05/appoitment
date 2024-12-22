import DoctorList from "../components/doctors/DoctorList"
import FaqList from "../components/faq/FaqList"
import Hero from "../components/hero/Hero"
import About from "../components/home/About"
import Feature from "../components/home/Feature"
import HowWork from "../components/home/HowWork"
import ServicesList from "../components/services/ServicesList"
import Testemonation from "../components/testemonation/Testemonation"

const Home = () => {
  return (
    <>
      {/* ====hero section=== */}
      <div className="hero_section min-h-screen ">
        <Hero/>
        <HowWork />
        <About />
        <ServicesList />
        <Feature />
        <DoctorList />
        <FaqList />
        <Testemonation />
      </div>
    </>
  )
}

export default Home
