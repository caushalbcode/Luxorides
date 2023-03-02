import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { matchRoute } from 'react-router-dom'

export default function Home() {
  const location = useLocation()
    const navigate = useNavigate()

    function matchRoute(route){
        if(route===location.pathname){
            return true
        }
    }
  return (    
    <section>
        <div>
            <img src="home.jpg" alt="Home img" className='relative' />
            <div className='absolute top-[75%] right-48'>
              <h1 className='text-6xl text-white font-thin'>Your <span className='font-semibold'>Luxury Car Rental</span> options just got better. </h1>
            </div>
        </div>
        <div>
          <img src="https://luxorides.com/assets/images/1970468.webp" alt="home" className='relative h-4/6' />
          <div className='absolute top-[800px] mx-80 text-center'>
            <h1 className='text-7xl text-black font-semibold '>Luxury <span className='font-thin'>Car on Rent</span> </h1>
            <h1 className='text-5xl text-black font-thin mt-8'>Luxury is <span className='font-semibold'>Contagious!</span> Choose <span className='font-semibold'>Wisely</span> </h1>
          </div>
          <div className='absolute flex justify-center top-[960px] mx-80 mt-12'>
            
            <button className={`mx-8 py-2 px-14 text-lg flex items-center text-white bg-[#b1a374] rounded-full hover:bg-[#6c613c] hover:shadow-2xl ${matchRoute('/Explore')}`} 
            onClick={()=>navigate('/Explore')}
            >Explore Cars by <span className='font-bold m-2'>Category</span>
            </button>
            <button className='mx-8 py-2 px-14 text-lg flex items-center text-white bg-[#b1a374] rounded-full hover:bg-[#6c613c] hover:shadow-2xl'>Explore Cars by <span className='font-bold m-2'> Brands</span>
            </button>
          </div>  
            <div className='absolute flex justify-between top-[1090px] ml-96'>
              <button className={` mx-44 before: py-2 px-14 text-lg flex items-center border-2 border-[#b1a374] text-[#b1a374] bg-white rounded-full hover:bg-[#b1a374] hover:text-white hover:shadow-2xl ${matchRoute('/Oneview')}
              `}
              onClick={()=>navigate('/Oneview')}
              >
                <span className='font-bold m-2'>Oneview</span>  of the Fleet
              </button>
            </div>
            <div className='bg-[#ccf5f4] pb-24'>
        <h2 className='text-5xl font-light text-center pt-24'>We're <span className='font-semibold'>Covid-19 Ready</span></h2>
        <p className='text-2xl font-thin mt-10 text-center'>
          In an attempt to serve you even better through this pandemic,<br/>
          We are taking frequent precautionary actions to keep you <span className='font-semibold'>Safe and Sanitised</span>.<br/>
          Luxorides is a Covid-19 ready car rental service in Delhi NCR.
        </p>

        <div className='flex justify-center space-x-6 mt-24'>
          <div className='text-center shadow-2xl'>
            <img src="https://www.luxorides.com/assets/images/luxorides-covid-precautions-9.webp"
            alt='covid' className='w-[350px] cursor-pointer'/>
            <h2 className='text-lg font-semibold mt-5 '>Regularly Cleaned and Sanitised</h2>
            <p className='text-lg text-gray-600 mt-3 pb-8'>All our vehicles are regularly cleaned<br/> and sanitised for your safer and<br/> hygienic ride.</p>
          </div>
          <div className='text-center shadow-2xl'>
            <img src="https://www.luxorides.com/assets/images/luxorides-covid-precautions-10.webp"
            alt='covid' className='w-[350px]'/>
            <h2 className='text-lg font-semibold mt-5'>Minimal / No Touch Policy</h2>
            <p className='text-lg text-gray-600 mt-3 pb-8'>We follow a minimum / no touch<br/> policy to ensure that you are safe<br/> throughout your rental.</p>
          </div>
          <div className='text-center shadow-2xl'>
            <img src="https://www.luxorides.com/assets/images/6vh99bihqa-1.webp"
            alt='covid' className='w-[350px]'/>
            <h2 className='text-lg font-semibold mt-5'>Precautionary Tests</h2>
            <p className='text-lg text-gray-600 mt-3 pb-8'>Our staff undergoes a regular<br/> precautionary thermal screening for<br/> better safety.</p>
          </div>
        </div>
      </div>

      <div className=''>
        <h2 className='text-6xl font-thin text-center mt-14'>What we Offer</h2>
        <p className='text-2xl font-light mt-5 text-center'>
          We cater to all your luxury car rental needs, Be it for any Service or Brand.<br/>
          Explore what best suits you.
        </p>

        <div className='flex justify-center space-x-4 mt-16 text-center'>
          <div className='shadow-2xl px-4 py-4 rounded-3xl'>
            <div className='hover:shadow-2xl rounded-2xl pb-2'>
              <img src="https://luxorides.com/assets/images/iqfm79m4en.webp" 
              alt="wedpic" className='w-[260px] rounded-3xl'/>
              <h2 className='font-light text-lg py-8'>Cars for <span className='font-semibold'>Wedding</span></h2>
            </div>
          </div>

          <div className='shadow-2xl px-4 py-4 rounded-3xl'>
            <div className='hover:shadow-2xl rounded-2xl pb-2'>
              <img src="https://luxorides.com/assets/images/siqkynexsm-copy-1.webp" 
              alt="corporatepic" className='w-[260px] rounded-3xl'/>
              <h2 className='font-light text-lg py-8'>Cars for <span className='font-semibold'>Corporate</span></h2>
            </div>
          </div>

          <div className='shadow-2xl px-4 py-4 rounded-3xl'>
            <div className='hover:shadow-2xl rounded-2xl pb-2'>
              <img src="https://luxorides.com/assets/images/6c7tmrpzwd.webp" 
              alt="personalpic" className='w-[260px] rounded-3xl'/>
              <h2 className='font-light text-lg py-8'><span className='font-semibold'>Personal</span> travel</h2>
            </div>
          </div>

          <div className='shadow-2xl px-4 py-4 rounded-3xl'>
            <button className={`hover:shadow-2xl rounded-2xl pb-2 ${matchRoute('/Sevices')}
            `}
            onClick={()=>navigate('/Services')}
            >
              <img src="https://luxorides.com/assets/images/dqtratkvyb.webp" 
              alt="explorepic" className='w-[260px] rounded-3xl'/>
              <h2 className='font-semibold text-lg py-8'>Explore all Services</h2>
            </button>
          </div>
        </div>

        <div className='flex justify-center mt-28 text-center space-x-7'>
          <button className='shadow-2xl'>
            <img src="https://luxorides.com/assets/images/audi-logo-for-luxorides-1x1.webp" 
            alt="audiimg" className='w-[250px]'/>
            <h2 className='font-light my-3'>Rent an <span className='font-semibold'>Audi</span></h2>
          </button>

          <button className='shadow-2xl'>
            <img src="https://luxorides.com/assets/images/bmw-logo-for-luxorides-512px-1x1.webp" 
            alt="bmwimg" className='w-[250px]'/>
            <h2 className='font-light my-3'>Rent an <span className='font-semibold'>BMW</span></h2>
          </button>

          <button className='shadow-2xl'>
            <img src="https://luxorides.com/assets/images/mercedes-logo-for-luxorides-512px-1x1.webp" 
            alt="benzimg" className='w-[250px]'/>
            <h2 className='font-light my-3'>Rent an <span className='font-semibold'>Mercedes</span></h2>
          </button>

          <button className={`shadow-2xl ${matchRoute('/Brands')}
          `}
          onClick={()=>navigate('/Brands')}
          >
            <img src="https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-6-500x500.webp" 
            alt="luxologo" className='w-[250px]'/>
            <h2 className='font-semibold my-3'>Explore all Brands</h2>
          </button>
        </div>

        <h2 className='text-6xl font-extralight text-center mt-44'>Why Choose Us</h2>
        <p className='text-2xl mt-7 text-center text-gray-500'>We know making a choice is tough but We will give you enough reasons to keep choosing us!</p>


        <div className='flex justify-center text-center mt-10 space-x-10'>
          <div>
            <h2 className='text-6xl text-gray-400'>01.</h2>
            <h2 className='text-lg mt-3'>We are <span className='font-semibold'>trustworthy</span></h2>
            <p className='text-lg text-gray-500 font-light mt-2'>Luxorides is trusted by countless corporates<br/> and Individuals across the NCR as their<br/> preferred luxury ride partner.</p>
          </div>

          <div>
            <h2 className='text-6xl text-gray-400'>02.</h2>
            <h2 className='text-lg mt-3'>We are <span className='font-semibold'>Always Improving</span></h2>
            <p className='text-lg text-gray-500 font-light mt-2'>We take our customers seriously, We<br/> understand the your concerns and that's why<br/> we leave no room for any negative surprise.</p>
          </div>

          <div>
            <h2 className='text-6xl text-gray-400'>03.</h2>
            <h2 className='text-lg mt-3'>We are <span className='font-semibold'>Passionate</span></h2>
            <p className='text-lg text-gray-500 font-light mt-2'>We love what we do and that encourages us<br/> to keep things loving. </p>
          </div>
        </div>
      </div>

      </div>
    </section>
  )
}
