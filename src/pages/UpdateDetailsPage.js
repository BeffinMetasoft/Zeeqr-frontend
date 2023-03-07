import React from 'react'
import Navbar from '../components/navbar/Navbar'
import UpdateDetails from '../components/updateDetails/UpdateDetails'

function UpdateDetailsPage() {
    const props = ["Create your card", 'My saved cards']

    return (
        <div>
            <Navbar props={props} page={'homepage'} key={props} />
           <UpdateDetails/>
           {/* <PersonalDetail/> */}
           
        </div>
    )
}

export default UpdateDetailsPage