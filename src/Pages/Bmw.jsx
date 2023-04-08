import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ImWhatsapp } from 'react-icons/im'

export default function Bmw() {
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
            <img src="Bmw.jpeg" alt="hdhf" className='relative w-full'/>
            <div className='absolute top-[40%] left-[5%]'>
                <h2 className='text-7xl font-semibold text-white'>Rent a BMW</h2>
                <p className='text-2xl text-white text-center mt-20'>Luxury beyonds Beliefs</p>
            </div>
        </div>

        <div>
          <h2 className='text-7xl font-semibold text-center mt-16'>Sedans <span className='font-light'>from</span> BMW</h2>
          <div className='flex justify-center space-x-16 my-16'>
            <img src="https://luxorides.com/assets/images/bmw-3-series-rs20000-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-3-1016x572.webp" alt="" className='w-[550px] shadow-2xl rounded-lg'/>

            <div className='text-center'>
              <h2 className='text-3xl font-semibold my-8'>
                Rent BMW 3 Series Sedans
              </h2>
              <p className='text-lg text-slate-500'>
                Barely on the road and the all-new BMW 3 Series is already leaving<br/> everything behind it, including conventions and expectations. It stands<br/> for the dawning of a new era. Propelling the ultimate sports sedan are<br/> even more powerful and efficient engines.
              </p>
              <button className='text-green-700 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 my-6 mx-40 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                <ImWhatsapp className='mr-1 text-2xl'/>
                  ₹20,000/-
              </button>
            </div>
          </div>



            <div className='flex justify-center space-x-16 py-16'>
                <div className='text-center'>
                    <h2 className='text-3xl font-semibold my-8'>
                        Rent BMW 5 Series Sedans
                    </h2>
                    <p className='text-lg text-slate-500'>
                        The BMW 5 Series is the embodiment of the modern business sedan.<br/> Due to its dynamic and elegant appearance, it convincingly meets the<br/> expectations placed today on a vehicle of its class: aesthetic athleticism<br/> and driving pleasure with state-of-the-art technology.
                    </p>

                    <div className='flex mt-8'>
                        <button className='text-green-700 text-lg font-semibold bg-white border-green-700 border-2 rounded-full px-12 py-3 mx-40 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 shadow-2xl'>
                          <ImWhatsapp className='mr-1 text-2xl'/>
                                ₹31,000/-
                        </button>
                    </div>

                </div>

                <img src="https://luxorides.com/assets/images/bmw-5-series-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad.webp" alt="" className='w-[500px] shadow-2xl rounded-lg'/>
            </div>
        </div>

        <div className='bg-gradient-to-r from-cyan-700 to-blue-300 py-16'>
          <div className='mt-12'> 
            <img src="https://luxorides.com/assets/images/bmw-7-series-rs35000-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad.webp" alt="" className='w-[550px] mx-auto shadow-2xl'/>

            <h2 className='text-3xl font-semibold text-center my-8'>Rent BMW 7 Series Sedans</h2>
            <p className='text-lg font-extralight text-center'>
                With new exquisite design details, the finest materials and powerful<br/> innovations, the new BMW 7 Series, delivers a new echelon of pleasure.<br/> Imagined, designed and crafted for individuals who value every moment,<br/> discover an experience inspired to drive the world.
            </p>
            <button className='text-black text-lg mx-auto mt-12 font-semibold bg-white border-black border-2 rounded-full px-12 py-3 flex items-center hover:bg-green-400 hover:text-white hover:border-green-400 hover:shadow-2xl'>
                    <ImWhatsapp className='mr-1 text-2xl'/>
                    ₹ 51,000/-
            </button>
          </div>
        </div>

        <h2 className='text-6xl font-medium text-center mt-20'>
            <span className='font-light'>About</span> BMW
        </h2>
        <p className='text-xl font-extralight text-left ml-80 mt-10'>
            BMW is a german Luxury car manufacturing company. It was actually founded as a<br/> 
            manufacturer of aircraft engines. A BMW is a perfect blend of elegance, performance,<br/> 
            and technology. Besides being the best-known German car manufacturers, it is more<br/> 
            of a status symbol for the elite class. The “Ultimate Driving Machine”, BMW is one such<br/> 
            luxury car that stands out because of its sporty look. Along with incredible power and,<br/> performance, it gives you an amazing travel experience.
        </p>

        <h2 className='text-6xl text-center mt-20 font-semibold'><span className='font-light'>Renting a</span> BMW</h2>
        <p className=' text-xl font-extralight text-left ml-80 mt-10'>
            Believe in Luxorides for “Haute Monde” Experience<br/>
          <br/>
            Luxorides, being one of the finest transportation companies in New Delhi for years,<br/> 
            vows to cater to you with the best and seamless transfer experience in your very own<br/> 
            luxurious BMW. Be it a wedding, corporate or personal need, we let you hire the<br/> 
            foremost luxury ride. Being backed up with multiple car owners and vendors, you can<br/> 
            hire the BMW in different variants of your choice. So, if you want to light up your<br/> 
            occasion, we have a stupendous fleet of BMW Sedans. Let Luxorides be your prime<br/> 
            partner and be in the safest hands for all your transfer needs.<br/>
          <br/>
            We know it's tough to make a decision, but there are enough reasons to continue<br/> choosing Luxorides!<br/>
          <br/>
          Place an appointment with us and rent a BMW of your choice. Come, be a part of our<br/> growing community. Allow Luxorides to give you an experience of a lifetime!

        </p>

        <div className='bg-[#efefef] mt-16  text-center'>
              <p className='text-center  pt-20 text-5xl font-light'>
                  How it Works
              </p>
              <p className='mt-6 text-2xl text-gray-500 font-extralight'>
                  You are Important to us.
              </p>
              <p className='text-2xl text-gray-500 font-extralight'>
                  We believe in a personalised experience for your ride.
              </p>
              <p className='text-2xl text-gray-500 font-extralight'>
                  You can always <button className='text-green-500'>Contact Us</button> if you need any help.
              </p>

          <div className='flex items-center justify-center mt-14'>
              <div className='rounded-[50%] border-[2px] border-black h-[75px] w-[75px] text-center pt-1 text-[40px]  '>

                  1

              </div>
              <div className='bg-black w-[320px] h-[2px] ml-3 mr-3'></div>
              <div className='rounded-[50%] border-[2px] border-black h-[75px] w-[75px] text-center pt-1 text-[40px]  '>

                  2

              </div>
              <div className='bg-black w-[320px] h-[2px] ml-3 mr-3'></div>
              <div className='rounded-[50%] border-[2px] border-black h-[75px] w-[75px] text-center pt-1 text-[40px]  '>

                  3

              </div>

          </div>

          <div className='flex justify-center'>
              <div className=' mt-3 mr-20 mb-24'>
                <h1 className=' text-2xl'>
                    Choose your Ride
                </h1>
                <p className='mt-4 text-gray-900 font-extralight text-lg'>
                    We offer a wide range of Vehicles that can fit all<br/>
                    your requirements.<br/>
                    All our vehicles are Chauffeur driven.<br/>
                    Explore <button className='font-medium text-black'>Cars</button> /
                    <button className='font-medium text-black'>Brands</button> /
                    <button className='font-medium text-black'>Services</button>
                </p>
              </div>
              <div className='mt-3 mr-24'>
                  <h1 className='text-2xl'>
                      Initiate Booking Request
                  </h1>
                  <p className='mt-4 text-gray-900 font-extralight text-lg'>
                      Initiate Booking Request by Filling out the<br/>
                      Booking Form.<br/>
                      <button className='font-medium'>Booking Form</button> 
                  </p>
              </div>
              <div className='mt-3  '>
                  <h1 className='text-2xl'>
                      Get Confirmation
                  </h1>
                  <p className='mt-4 text-gray-900 font-extralight text-lg'>
                      You shall receive your Booking Confirmation<br/>
                      within next few hours (Upto 4 hours).<br/>
                      <button className='font-medium'>Contact Us</button> 
                  </p>
              </div>
          </div>
      </div>

      <div className='bg-[#b2ccd2] h-auto py-24 '>
        <div className='justify-center flex  text-5xl'>
          <h2 className='text-left font-bold mx-20'>
            Not finding what You were<br/> looking for!
          </h2>
          <button className={`m-5 py-3 px-14 text-lg text-white border-2 border-black bg-black rounded-full hover:shadow-2xl ${matchRoute('/support')}
          `}
          onClick={()=>navigate('/support')}
          >
            Go to Support
          </button>
        </div>
      </div>
    </section>
  )
}
