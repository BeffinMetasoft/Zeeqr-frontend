import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Success from '../components/success/Success'

function SuccessPage() {
    const props=[ "Create your card" , 'My saved cards' ]

  return (
    <div>
        <Navbar props={props} page={'homepage'} key={props}/>

        <Success/>
    </div>
  )
}

export default SuccessPage