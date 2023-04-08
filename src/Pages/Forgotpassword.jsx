import React from 'react'
import { Link } from 'react-router-dom'

export default function Forgotpassword() {
  return (
    <section>
        <div>
            <img src="./sign2.jpg" alt="forgotimg" 
            className='relative'
            />

            <div className='absolute top-32 right-12'>
                <div className=' mx-[150px] hover:shadow-2xl'>
                    <div className='text-center p-5 mt-7'>
                        <h2 className='text-5xl text-white font-bold'>Recover Password</h2>
                        <p className='text-lg font-thin mt-6 text-white'>Please enter your email:</p>
                        <form>
                            <input 
                                className='w-full h-9 border-2 border-gray-400 rounded-lg px-4 py-5 mt-4'
                                placeholder='Email'
                            />
                            <button className='text-white w-full my-5 py-2 rounded-md bg-[#073b4c]'>RECOVER</button>

                            <div className='flex items-center before:border-t  before:flex-1  before:border-gray-500 after:border-t after:flex-1 after:border-gray-500'>
                            <p className='font-bold mx-3 text-white'>OR</p>
                            </div>

                            <div className=' mt-2'>
                                <p className='font-thin text-white'>Remember your password?<Link to='/signin' className='font-semibold text-red-500'> Back to Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    </section>
  )
}
