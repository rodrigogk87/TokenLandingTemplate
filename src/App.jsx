import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Roadmap } from './components/roadmap'
import { About } from './components/about'
import { Tokenomics } from './components/tokenomics'
import { Footer } from './components/footer'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Contact data={landingPageData.Contact} />
      <Header data={landingPageData.Header} />
      <About />
      <Tokenomics data={landingPageData.Tokenomics} />
      <Roadmap data={landingPageData.Roadmap} />
      <Team data={landingPageData.Team} />
      <Footer></Footer>
    </div>
  )
}

export default App
