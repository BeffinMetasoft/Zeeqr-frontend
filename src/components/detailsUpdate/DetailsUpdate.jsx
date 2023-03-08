import React from 'react'
import { Box, Button, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import { StepsTheme, Steps, Step, useSteps } from 'chakra-ui-steps';
import FormFields from './FormFields';
import { useForm } from 'react-hook-form'
import Cards from '../cards/Cards';

const theme = extendTheme({
    components: {
        Steps: StepsTheme
    }
})

function DetailsUpdate() {

    const required = {
        value: true,
        message: "This feild is required"
    }

    const { activeStep, nextStep, prevStep } = useSteps({
        initialStep: 0
    })

    const { register, handleSubmit, trigger, formState: { errors } } = useForm()

    const handleNext = async () => {
        let isValid = false

        switch (activeStep) {
            case 0:
                isValid = await trigger(["logo", "companyName", "name", "email", "phone", "website"])
                break;
            case 1:
                isValid = await trigger(["facebook", "instagram", "skype", "twitter", "linkedIn"])
                break;
            case 2:
                isValid = await trigger(["fullName", "address", "country", "state", "pincode", "landmark"])
                break;
            default:
        }
        if (isValid) {
            if(activeStep === 2){
                console.log('hello');
            }
            nextStep()
        }
    }

    const handleSubmitForm = (values) => {
        console.log(values);
        alert('submit')
    }

    return (
        <div>
            <h1 className='text-4xl text-center pt-[50px] font-bold'>Update your Details</h1>
            <div className='pt-20 p-2'>
                <Cards />
            </div>
            <ChakraProvider theme={theme}>
                <div className='flex justify-center '>
                    <Box className="w-4/6 py-10" >
                        <form onSubmit={handleSubmit(handleSubmitForm)}>
                            <Steps activeStep={activeStep}>
                                <Step label="Personal Details">
                                    <div className='flex justify-center'>
                                        <Box className='w-4/6 py-20 grid xl:grid-cols-2 xl:gap-6'>
                                            <FormFields label="Logo" error={errors?.logo?.message} >
                                                <input type="file" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('logo', { required })} />
                                            </FormFields>
                                            <FormFields label="Company Name" error={errors?.companyName?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('companyName', { required })} />
                                            </FormFields>
                                            <FormFields label="Name" error={errors?.name?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('name', { required })} />
                                            </FormFields>
                                            <FormFields label="Email" error={errors?.email?.message} >
                                                <input type="email" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('email', { required })} />
                                            </FormFields>
                                            <FormFields label="Phone" error={errors?.phone?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('phone', { required })} />
                                            </FormFields>
                                            <FormFields label="Website url" error={errors?.website?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('website', { required })} />
                                            </FormFields>
                                        </Box>
                                    </div>
                                </Step>
                                <Step label="Social Media">
                                    <div className='flex justify-center'>
                                        <Box className='w-4/6 py-20 grid xl:grid-cols-2 xl:gap-6'>
                                            <FormFields label="Facebook" >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('facebook')} />
                                            </FormFields>
                                            <FormFields label="Instsgram"  >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('instagrsm')} />
                                            </FormFields>
                                            <FormFields label="Skype"  >
                                                <input type="email" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('skype')} />
                                            </FormFields>
                                            <FormFields label="Twitter" >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('twitter')} />
                                            </FormFields>
                                            <FormFields label="LinkedIn" >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('linkedIn')} />
                                            </FormFields>
                                        </Box>
                                    </div>
                                </Step>
                                <Step label="Shipping Details">
                                    <div className='flex justify-center'>
                                        <Box className='w-4/6 py-20 grid xl:grid-cols-2 xl:gap-6'>
                                            <FormFields label="Full Name" error={errors?.fullName?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('fullName', { required })} />
                                            </FormFields>
                                            <FormFields label="Address" error={errors?.address?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('address', { required })} />
                                            </FormFields>
                                            <FormFields label="Country" error={errors?.country?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('country', { required })} />
                                            </FormFields>
                                            <FormFields label="State" error={errors?.state?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('state', { required })} />
                                            </FormFields>
                                            <FormFields label="Pincode" error={errors?.pincode?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('pincode', { required })} />
                                            </FormFields>
                                            <FormFields label="Landmark" error={errors?.landmark?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('landmark', { required })} />
                                            </FormFields>
                                        </Box>
                                    </div>
                                </Step>
                                <Step label="Payment">
                                    <div className='flex justify-around flex-wrap py-10'>
                                        <div className='p-5 w-80 border  shadow-lg rounded-lg'>
                                            <h1 className='font-bold text-xl mb-2'>Shipping Address</h1>
                                            
                                        </div>
                                        <div className='p-5  w-80 border max-w-sm shadow-lg rounded-lg'>
                                            <h1 className='font-bold text-xl mb-2'>Payment Method</h1>
                                            <div >
                                                <input type="radio" name="flexRadioDefault" id="radioDefault01" />
                                                <label className='ml-3' for="radioDefault01">Cash On Delivery</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="flexRadioDefault" id="radioDefault01" />
                                                <label className='ml-3' for="radioDefault01">Online Payment</label>
                                            </div>


                                        </div>

                                    </div>
                                </Step>
                            </Steps>
                            <Flex gap={2} my={2} >
                                <div className='flex w-full justify-around'>
                                    {activeStep !== 0 && <Button onClick={prevStep}>Previous</Button>}
                                    {activeStep !== 3 && <Button type='submit' onClick={handleNext}>Next</Button>}
                                    {activeStep === 3 && <Button type='submit' >Submit</Button>}
                                </div>

                            </Flex>
                        </form>
                    </Box>
                </div>
            </ChakraProvider>
        </div>
    )
}

export default DetailsUpdate