
import Works from '../components/Works.jsx'
import About from '../components/About.jsx'
import HeroSection from '../components/Hero.jsx'
import TechStack from '../components/TechStack.jsx'

export default function Home() {
    return(
    <>
    
    <HeroSection />
    <TechStack />
    <Works />
    {/* <div className="elfsight-app-15429149-2614-4ee4-b451-493b151f462d" data-elfsight-app-lazy></div> */}
    <About />
    </>
    )
}