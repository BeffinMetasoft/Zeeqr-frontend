import React from 'react'
import Landing from '../components/landing/Landing'
import Navbar from '../components/navbar/Navbar'

function LandingPage() {
    const props=[ "Home" , 'How it works' , 'Features' , 'Pricing']
    return (
      <div>
           <Navbar props={props} key={props}/>
           <Landing/>
      </div>
    )
}

export default LandingPage