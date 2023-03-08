import React from 'react'
import CardSaved from '../cards/CardSaved'

function SavedCards() {
  return (
    <div>
        <h1 className='text-4xl text-center pt-[50px] font-bold uppercase'>your saved cards</h1>
        <div className='p-5 mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
            <CardSaved/>
            <CardSaved/>
            <CardSaved/>
            <CardSaved/>

        </div>
        <div className='flex justify-around my-10'>
            <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black   bg-white hover:bg-black hover:text-white mt-4 lg:mt-0'>Delete All</button>
            <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white border-transparent  bg-black hover:bg-slate-800 transition mt-4 lg:mt-0'>Create New Design</button>
        </div>
    </div>
  )
}

export default SavedCards