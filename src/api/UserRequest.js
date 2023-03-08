import axios from '../api/Axios'

export const userSignup = (signupData) => axios.post('/signup',signupData)

export const userLogin = (loginData) => axios.post('/login',loginData)

export const UploadDetails = (details) => axios.post('/details',details)