import React from 'react'
import Cards from '../cards/Cards'

function BookedCards() {
    return (
        <div>

            <div className='my-10 mx-10'>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full text-left text-sm font-light">
                                    <thead class="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" class="px-6 py-4">Card</th>
                                            <th scope="col" class="px-6 py-4">Shiping Address</th>
                                            <th scope="col" class="px-6 py-4">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 w-80 py-4 font-medium">
                                                <Cards/>
                                            </td>
                                            <td class="whitespace-nowrap text-xl px-6 py-4">qwerty</td>
                                            <td class="whitespace-nowrap text-xl px-6 py-4">booked</td>
                                        </tr>
                                        <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 w-80 py-4 font-medium">
                                                <Cards/>
                                            </td>
                                            <td class="whitespace-nowrap text-xl px-6 py-4">qwerty</td>
                                            <td class="whitespace-nowrap text-xl px-6 py-4">booked</td>
                                        </tr>
                                        <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 w-80 py-4 font-medium">
                                                <Cards/>
                                            </td>
                                            <td class="whitespace-nowrap text-xl px-6 py-4">qwerty</td>
                                            <td class="whitespace-nowrap text-xl px-6 py-4">booked</td>
                                        </tr>
                                       
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookedCards