import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import {ImWhatsapp} from 'react-icons/im'
import {TbBulb} from 'react-icons/tb'
import {FiPhone} from 'react-icons/fi'
import {RiArrowDownSFill} from 'react-icons/ri'

export default function Header() {

  const location = useLocation()
  const navigate = useNavigate()

  function matchRoute(route){
    if(route===location.pathname){
      return true
    }
  }
  return (
    <div className='shodow-sm sticky top-0 z-50 bg-[#073b4c]'>
        <header className='flex items-center space-x-4'>
          <div>
              <img
              src='https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-13-500x500.webp'
              alt='LogoImg'
              className='h-16 mx-16 cursor-pointer'
              onClick={()=>navigate('/')}
              />
          </div>
          <div>
            <ul className='flex space-x-6 ml-80'>
                <li className={`cursor-pointer py-3 text-[#e6c65f] text-md font-semibold border-b-transparent hover:text-[#a9881c] ${matchRoute('/') }`}
                    onClick={()=>navigate('/home')}
                >Home </li>
                <li className={`flex cursor-pointer py-3 text-[#e6c65f] text-md font-semibold border-b-transparent hover:text-[#a9881c] ${matchRoute('/Explore') && 'text-[#ecc84f]'}`}
                    onClick={()=>navigate('/explore')}
                >Explore
                <RiArrowDownSFill className='text-2xl hover:text-[#a9881c]'/>
                </li>
                <li className={`flex cursor-pointer py-3 text-[#e6c65f] text-md font-semibold border-b-transparent hover:text-[#a9881c] ${matchRoute('/Locations') && 'text-[#ecc84f]'}`}
                    onClick={()=>navigate('/locations')}
                >Locations
                <RiArrowDownSFill className='text-2xl hover:text-[#a9881c]'/>
                </li>
                <li className={`cursor-pointer py-3 text-[#e6c65f] text-md font-semibold border-b-transparent hover:text-[#a9881c] ${matchRoute('/Support') && 'text-[#ecc84f]'}`}
                    onClick={()=>navigate('/support')}
                >Support </li>
                <li className={`flex cursor-pointer py-3 text-[#e6c65f] text-md font-semibold border-b-transparent hover:text-[#a9881c] ${matchRoute('/More') && 'text-[#ecc84f]'}`}
                    onClick={()=>navigate('/more')}
                >More
                <RiArrowDownSFill className='text-2xl hover:text-[#a9881c]'/>
                </li>
                
            </ul>
          </div>

          <div className='flex space-x-4'>
                <div>
                  <button className='py-2 px-5 text-gray-600 bg-white rounded-full font-semibold flex items-center hover:bg-gray-300' 
                  >
                    <TbBulb  className='mr-2'/>
                    BuzZ
                  </button>
                </div>
                <div>
                  <button className='py-2 px-5 text-white bg-green-500 rounded-full font-semibold flex items-center hover:bg-green-700'
                  >
                    <ImWhatsapp className='mr-2'/>
                    WhatsApp Us
                  </button>
                </div>
                <div>
                  <button className='py-2 px-5 text-white border-white border-2 bg-[#073b4c] rounded-full font-semibold flex items-center hover:bg-white hover:text-black'
                  >
                    <FiPhone className='mr-2'/>
                    Call Us
                  </button>
                </div>
                
        
          </div>
                                                                                                  
        </header>
    </div>
  )
}
