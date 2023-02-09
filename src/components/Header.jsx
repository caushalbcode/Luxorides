import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import {ImWhatsapp} from 'react-icons/im'
import {TbBulb} from 'react-icons/tb'
import {FiPhone} from 'react-icons/fi'

export default function Header() {

  const location = useLocation()
  const navigate = useNavigate()

  function matchRoute(route){
    if(route===location.pathname){
      return true
    }
  }
  return (
    <div className='border-b-2 shodow-sm sticky top-0 z-50  bg-cyan-900'>
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
            <ul className='flex space-x-8 ml-80'>
                <li className={`cursor-pointer py-3 text-[#e4d295] text-md font-semibold border-b-transparent ${matchRoute('/') && 'text-[#ecc84f]'}`}
                    onClick={()=>navigate('/home')}
                >Home </li>
                <li className={`cursor-pointer py-3 text-[#e4d295] text-md font-semibold border-b-transparent ${matchRoute('/Explore') && 'text-[#ecc84f]'}`}
                    onClick={()=>navigate('/explore')}
                >Explore</li>
                <li className={`cursor-pointer py-3 text-[#e4d295] text-md font-semibold border-b-transparent ${matchRoute('/Locations') && 'text-[#ecc84f]'}`}
                    onClick={()=>navigate('/locations')}
                >Locations</li>
                <li className={`cursor-pointer py-3 text-[#e4d295] text-md font-semibold border-b-transparent ${matchRoute('/More') && 'text-[#ecc84f]'}`}
                    onClick={()=>navigate('/more')}
                >More </li>
                <li className={`cursor-pointer py-3 text-[#e4d295] text-md font-semibold border-b-transparent ${matchRoute('/Support') && 'text-[#ecc84f]'}`}
                    onClick={()=>navigate('/support')}
                >Support </li>
            </ul>
          </div>

          <div className='flex space-x-6'>
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
                  <button className='py-2 px-5 text-gray-600 bg-white rounded-full font-semibold flex items-center hover:bg-gray-300'
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
