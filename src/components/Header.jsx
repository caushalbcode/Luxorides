import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import {ImWhatsapp} from 'react-icons/im'
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
                <li className={`cursor-pointer py-3 text-[#bfa54d] text-md font-medium border-b-transparent hover:text-[#e6c65f] ${matchRoute('/') }`}
                    onClick={()=>navigate('/home')}
                >Home </li>
                <li className={`group relative flex cursor-pointer py-3  text-[#bfa54d] text-md font-medium border-b-transparent hover:text-[#e6c65f] && 'text-[#ecc84f]'}`}
              
                >Explore
                <RiArrowDownSFill className='text-2xl hover:text-[#e6c65f]'/>
                <div className='hidden group-hover:block absolute w-[230px] h-[190px] top-[100%]  bg-[#073b4c] text-center'>
                  <li className={`text-[#bfa54d] mt-4 text-md font-medium border-b-transparent hover:text-[#e6c65f] ${matchRoute('/Explore')}  `}
                  onClick={()=>navigate('/Explore')}
                  >
                    Explore by Categories
                  </li>
                  <li className={`text-[#bfa54d] mt-4 text-md font-medium border-b-transparent hover:text-[#e6c65f] ${matchRoute('/Services')}  `}
                  onClick={()=>navigate('/Services')}>
                    Explore by Services
                  </li>
                  <li className={`text-[#bfa54d] mt-4 text-md font-medium border-b-transparent hover:text-[#e6c65f] ${matchRoute('/Brands')}  `}
                  onClick={()=>navigate('/Brands')}>
                    Explore by Brands
                  </li>
                  <li className={`text-[#bfa54d] mt-4 text-md font-medium border-b-transparent hover:text-[#e6c65f] ${matchRoute('/Oneview')}  `}
                  onClick={()=>navigate('/Oneview')}>
                    Explore in One-View
                  </li>
                </div>
                </li>
                <li className={`group relative flex cursor-pointer py-3  text-[#bfa54d] text-md font-medium border-b-transparent hover:text-[#e6c65f]`}
                    
                >Locations
                <RiArrowDownSFill className='text-2xl hover:text-[#e6c65f]'/>
                <div className='hidden group-hover:block absolute w-[130px] h-[190px] top-[100%]  bg-[#073b4c] text-center'>
                  <li className={`text-[#bfa54d] mt-4 text-md font-medium border-b-transparent hover:text-[#e6c65f] ${matchRoute('/Dehli')}  `}
                  onClick={()=>navigate('/Dehli')}
                  >
                    Dehli
                  </li>
                  <li className={`text-[#bfa54d] mt-4 text-md font-medium border-b-transparent hover:text-[#e6c65f] ${matchRoute('/Agra')}  `}
                  onClick={()=>navigate('/Agra')}>
                    Agra 
                  </li>
                  <li className={`text-[#bfa54d] mt-4 text-md font-medium border-b-transparent hover:text-[#e6c65f] ${matchRoute('/Jaipur')}  `}
                  onClick={()=>navigate('/Jaipur')}>
                    Jaipur
                  </li>
                  <li className={`text-[#bfa54d] mt-4 text-md font-medium border-b-transparent hover:text-[#e6c65f] ${matchRoute('/Lucknow')}  `}
                  onClick={()=>navigate('/Lucknow')}>
                    Lucknow
                  </li>
                </div>
                </li>
                <li className={`cursor-pointer py-3  text-[#bfa54d] text-md font-medium border-b-transparent hover:text-[#e6c65f] ${matchRoute('/Support') && 'text-[#ecc84f]'}`}
                    onClick={()=>navigate('/support')}
                >Support </li>
                <li className={`flex cursor-pointer py-3  text-[#bfa54d] text-md font-medium border-b-transparent hover:text-[#e6c65f] ${matchRoute('/More') && 'text-[#ecc84f]'}`}
                    onClick={()=>navigate('/more')}
                >More
                <RiArrowDownSFill className='text-2xl hover:text-[#e6c65f]'/>
                </li>
                
            </ul>
          </div>

          <div className='flex space-x-4'>
                <div>
                  <button className='py-2 px-5 text-white border-white border-2 bg-[#073b4c] rounded-full font-semibold flex items-center hover:bg-white hover:text-black'
                  >
                    <FiPhone className='mr-2'/>
                    Call Us
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
                  <button className={`py-2 px-5 text-white border-white border-2 bg-[#073b4c] rounded-full font-semibold flex items-center hover:bg-white hover:text-black ${matchRoute('/Signin')}`}
                  onClick={()=>navigate('/Signin')}
                  >
                    Sign In
                  </button>
                </div>
          </div>
        </header>
    </div>
  )
}
