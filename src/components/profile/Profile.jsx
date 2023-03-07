import React, { useState } from 'react'
import { FiCamera } from "react-icons/fi";


function Profile() {

    const [edit, setEdit] = useState(false)

    return (
        <div>
            <h1 className='text-4xl text-center pt-[50px] font-bold'> My Profile</h1>
            {!edit ?
                <div className="flex  h-screen w-full justify-center">
                    <div className="max-w-lg">
                        <div className="bg-white shadow-xl rounded-lg mt-3 py-10">
                            <div className="photo-wrapper p-2">
                                <img className="w-32 h-32 rounded-full mx-auto" src="https://w7.pngwing.com/pngs/753/432/png-transparent-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-people-thumbnail.png" alt="John Doe" />
                            </div>
                            <div className="p-2">
                                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
                                {/* <div className="text-center text-gray-400 text-xs font-semibold">
                                <p>Web Developer</p>
                            </div> */}
                                <table className="text-lg my-3">
                                    <tbody>
                                        <tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Company Name</td>
                                            <td className="px-2 py-2"> Dhangadhi Kailali</td>
                                        </tr>
                                        <tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                            <td className="px-2 py-2">john@exmaple.com</td>
                                        </tr>
                                        <tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                            <td className="px-2 py-2">+977 9955221114</td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                            <div className='text-center'>
                                <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black   bg-white hover:bg-black hover:text-white mt-4 lg:mt-0' onClick={() => setEdit(!edit)}>Edit</button>
                            </div>
                        </div>
                    </div>

                </div>
                :

                <div className="flex  h-screen w-full justify-center">
                    <div className="max-w-lg">
                        <div className="bg-white shadow-xl rounded-lg mt-3 py-10">
                            <div className=" relative photo-wrapper p-2">
                                <img className="w-32 h-32 rounded-full mx-auto" src="https://w7.pngwing.com/pngs/753/432/png-transparent-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-people-thumbnail.png" alt="John Doe" />
                                <div className=' flex justify-center'>
                                <label className='absolute right-20 bottom-2 cursor-pointer ' htmlFor="img-upload"><FiCamera size={26} />  </label>
                                <input type="file" id="img-upload" name='image'  className='hidden' />
                                </div>
                            </div>
                            <div className="p-2">
                                <div className='flex justify-center'>

                                    <input className="text-center text-xl text-gray-900 font-medium leading-8" name='name' value={'Joh Doe'} />
                                </div>

                                <div className="text-lg my-3">
                                    <div>
                                        <label className="px-2 py-2 text-gray-500 font-semibold" htmlFor="">Company Name</label>
                                        <input className="px-2 py-2 w-40" name='companyName' value={'wertyu'} />
                                    </div>
                                    <div>
                                        <label className="px-2 py-2 text-gray-500 font-semibold" htmlFor="">Email </label>
                                        <input className="px-2 ml-20 w-40 py-2" name='email ' value={'wertyu'} />
                                    </div>
                                    <div>
                                        <label className="px-2 py-2 text-gray-500 font-semibold" htmlFor="">Phone</label>
                                        <input className="px-2 ml-20 w-40 py-2" name='phone' value={'wertyu'} />
                                    </div>

                                </div>

                            </div>
                            <div className='text-center'>
                                <button className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black   bg-white hover:bg-black hover:text-white mt-4 lg:mt-0' onClick={() => setEdit(!edit)}>Back</button>
                            </div>
                        </div>
                    </div>

                </div>
            }
            
            
        </div>
    )
}

export default Profile