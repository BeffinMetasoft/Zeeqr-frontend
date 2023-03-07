import React from 'react'
import Home from '../components/home/Home'
import Navbar from '../components/navbar/Navbar'

function HomePage() {
  const props=[ "Create your card" , 'My saved cards' ]
  return (
    <div>
         <Navbar props={props} page={'homepage'} key={props}/>
         <Home/>
         
    </div>
  )
}

export default HomePage
