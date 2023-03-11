import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../../api/UserRequest'
import  banner from '../../assests/banner01.webp'
const landingImg = "https://dragon2000-multisite.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/142/2021/01/07101841/Warranty-Banner-1.jpg"


function Login() {

    const initialValues = {  email: '', password: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const navigate = useNavigate()
    const [error, setError] = useState({});
    const [loginError,setLoginError] = useState('')

    const loginData = {
        ...formValues
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoginError('')
        const errors = validateForm(loginData)
        setError(errors)
        if (Object.keys(errors).length === 0) {
            try {
                const { data } = await userLogin(loginData)
                console.log(data);
                if (data.success) {
                    localStorage.setItem("refToken", data.refreshToken)
                    // cookies.set('accessToken', data.accessToken, { path: '/' });


                    navigate("/home")
                }
            } catch (error) {
                console.log(error.response.data.message);
                setLoginError(error.response.data.message)
            }

        }

    }


    const validateForm = (data) => {
        const error = {};
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        
        if (!data.email) {
            error.email = "email required"
        } else if (!regex.test(data.email)) {
            error.email = "enter valide email address"
        }
        
        if (!data.password) {
            error.password = "password required"
        } else if (data.password.length < 6) {
            error.password = "password should be 6 digit"
        }

        return error;
    }

  return (
    <div>
            <div className={`w-full h-screen flex `}>
                <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
                    <div className=' w-full text-center h-[550px] hidden md:block' style={{ backgroundImage: `url(${landingImg})` }}>
                        <img src={banner} alt="" srcset="" />
                        <h1 className='text-5xl m-5 pt-40 z-100 font-bold  text-slate-200'>ZeeQR</h1>
                        <p className='text-slate-100 font-bold'>Makes Your Business card Simple...</p>
                    </div>
                    <div className='p-4  flex flex-col justify-around items-center w-96'>
                        <form onSubmit={handleSubmit} className='w-3/4 mt-4 '>
                            <h2 className='text-4xl font-bold text-center mb-2'>Login</h2>
                            <h6 className='text-lg  text-center mb-8'>Login to your personal account</h6>
                            <div >
                                <input className='border p-2 mb-2 w-full' placeholder='Email' name='email' type="text" value={formValues.email} onChange={handleChange} />
                                <p className='text-red-500'>{error.email}</p>
                                <input className='border p-2 mb-2 w-full' placeholder='Password' name='password' type="Password" value={formValues.password} onChange={handleChange} />
                                <p className='text-red-500'>{error.password}</p>
                            </div>
                            {loginError? 
                            <p className='text-red-500 mx-2'>{loginError}</p>:""
                            }
                            <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Login</button>
                            <p>forgot password ?</p>

                        </form>

                        <p className='text-center'>Don't have account : <Link to={'/signup'}>signup </Link></p>
                    </div>
                </div>
            </div>



        </div>
  )
}

export default Login