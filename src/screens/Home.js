import React from 'react'
import { Container} from 'react-bootstrap'
import Nav from '../components/Navigation'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Intro from '../components/Intro'


const Home = () => {

return (
  <Container fluid className='cont'>
    <Nav/>
  <section id='home' className='section-1' >
    {/* <h1 className='home-title-nav' >Builder King</h1> */}
    <Carousel className="component"/>
    <Intro className="component" />
  </section>

  <section id='services' className='section-2' >
    {/* <h1 className='service-title-nav' >Services</h1> */}
    <Services className="component" />
  </section>

  <section id='contact' >
    {/* <h1 id='contact' className='contact-title-nav' >Contact Us</h1> */}
    <Contact className="component" />
  </section>
</Container>
  )
}

export default Home