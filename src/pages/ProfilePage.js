import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Profile from '../components/profile/Profile'

function ProfilePage() {
    const props=[ "Create your card" , 'My saved cards' ]

  return (
    <div>
       <Navbar props={props} page={'homepage'} key={props}/> 
       <Profile/>
    </div>
  )
}

export default ProfilePage