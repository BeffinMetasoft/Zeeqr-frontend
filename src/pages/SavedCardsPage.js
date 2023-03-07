import React from 'react'
import SavedCards from '../components/savedCards/SavedCards'

function SavedCardsPage() {
  const props=[ "Create your card" , 'My saved cards' ]
  return (
    <div>
      <Navbar props={props} page={'homepage'} key={props}/>
      <SavedCards/>
    </div>
  )
}

export default SavedCardsPage