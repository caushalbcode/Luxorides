import React from 'react'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'

export default function Signin() {
  return (
    <section>
        <div>
            <img src="Sign.jpg" alt="signin pic" className='relative'/>
            <div className='absolute w-[40%] top-[25%]  right-[3%] shadow-2xl bg-transparent '>
                <h1 className='text-center text-white font-medium text-5xl my-4'>Sign In</h1>
                <p className='text-center text-white font-extralight text-2xl '>Please Enter Your E-mail & Password</p>

                <form>
                    <input 
                        className='w-[80%] border-2 rounded-lg border-gray-400 h-9 mt-6 mx-14 flex px-4 py-5'
                        placeholder='Email Address'
                    />
                    <input 
                        className='w-[80%] border-2 rounded-lg border-gray-400 h-9 mt-6 mx-14 px-4 py-5'
                        placeholder='Password'
                    />
                    <div className='flex justify-between mx-14 mt-2'>
                        <p className='font-thin text-gray-300'>Don't have an Account?<Link to='/signup' className='font-semibold text-red-500'>Creat One</Link></p>
                        <Link to='/forgotpassword' className='font-semibold text-blue-600'>Forgot Password?</Link>
                    </div>
                    <button className='text-white w-[80%] mx-14 my-5 py-2 rounded-md bg-[#073b4c]'>SIGN IN</button>

                    <div className='flex items-center before:border-t mx-14 w-[80%] before:flex-1  before:border-gray-500 after:border-t after:flex-1 after:border-gray-500'>
                         <p className='font-bold mx-3'>OR</p>
                    </div>

                    <button className='text-white w-[80%] mx-14 my-5 py-2 items-center flex justify-center rounded-md bg-red-600'>
                        <FcGoogle className='bg-white mr-3 text-2xl rounded-xl'/>
                            CONTINUE WITH GOOGLE
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}
