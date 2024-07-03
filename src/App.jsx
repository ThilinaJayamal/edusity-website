import Hero from "./component/Hero/Hero"
import Title from "./component/Title/Title"
import Navbar from "./component/navbar/Navbar"
import Program from "./component/programs/Program"
import About from "./component/About/About"
import Campus from "./component/Campus/Campus"
import Testinomials from "./component/Testinomials/Testinomials"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"
import Videoplayer from "./component/Videoplayer/Videoplayer"
import { useState } from "react"

function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <>

      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title title="What We Offer" subTitle="Our Program"></Title>
        <Program></Program>
        <About setPlayState={setPlayState}></About>
        <Title title="Campus Photos" subTitle="Gallery"></Title>
        <Campus></Campus>
        <Title title="What Student Says" subTitle="Testinomials"></Title>
        <Testinomials></Testinomials>
        <Title title="Get in Touch" subTitle="Contact us"></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}></Videoplayer>

    </>
  )
}

export default App
