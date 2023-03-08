import React from 'react'
import logo from '../../assests/zeeqr.png'
import QR from '../../assests/QR_code.png'
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";


function CardSaved() {
    return (
        <div>
            <div className='flex justify-center'>
                <div className='w-[470px] '>
                    <div className="group bg-white  p-4 transition-all border border-2 rounded-xl duration-300 hover:rotate-1 lg:p-8 border">
                        <div className=" text-left">
                            <img className="w-28 " src={logo} alt='' />

                        </div>
                        <div className="flex justify-end">
                            <img className="w-28 " src={QR} alt='' />

                        </div>
                        <div className="flex justify-start gap-x-2">
                            <div className='flex flex-col  justify-center'>
                                <h3 className="text-2xl font-bold text-black">ZeeQR</h3>
                                <span className="text-xs text-black">RENNOVATING THE FUTURE</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className='flex justify-around mt-3'>
                <p>1/03/2023</p>
                <div className='flex items-center' >
                <button className='mx-2'>Edit</button>
                <FaRegEdit/>
                <button className='mx-2'>Delete</button>
                <AiOutlineDelete size={20}/>
                </div>

            </div>
        </div>
    )
}

export default CardSaved