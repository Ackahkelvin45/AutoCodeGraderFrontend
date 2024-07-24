import {Navbar} from '../components/landingpage/navbar'
import {Footer} from '../components/landingpage/footer'
import { Hero } from '../components/landingpage/hero'
import { Features } from '../components/landingpage/features'
import { CTA } from '../components/landingpage/cta'
import {PageSpinner} from '../components/basic/pageSpinner'
import { CarouselItem } from '../components/landingpage/carousel'
function LandingPage() {

  return (
    <>
    
     <Navbar/>
     <Hero/>
    
 <CarouselItem/> 
     <Features/>
     <CTA/>

     
     <Footer />
     <PageSpinner/>
     
    </>
  )
}

export { LandingPage }

