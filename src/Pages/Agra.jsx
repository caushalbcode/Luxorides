import React from 'react'
import { ImFacebook } from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter} from 'react-icons/bs'

export default function Home() {
  return (
    <section>
      <div>
        <img src="./tajmahal.jpg" alt="The Taj" className='relative' />
        <div className='absolute top-52 right-44 text-right animate-bounce'>
          <h2 className='text-7xl text-[#c1c1c1] font-thin'>Rent</h2>
          <h2 className='text-7xl text-[#c1c1c1] font-semibold'>Luxury Cars</h2>
          <h2 className='text-7xl text-[#c1c1c1] font-thin'>for <span className='font-semibold'>Agra</span></h2>
        </div>

      </div>

      
          <div>
                  <p className='text-center text-7xl mt-24 font-light'>
                    Planning To Rent
                  </p>
                  <p className='text-center text-7xl mt-3 font-light'>
                    a Luxury Car for <span className='font-medium'>Agra?</span>
                  </p>
                  <div>
                  <p className='text-right text-5xl mt-6 mr-72 font-extralight'>
                    We will help.
                  </p>
              </div>
              
              <div className='flex justify-center mt-6'>
                      <button className='m-4 py-3 px-16 text-gray-600 border-2 border-black bg-white rounded-full font-light hover:bg-black hover:text-white hover:shadow-2xl' 
                      > 
                        Explore Brands
                      </button>
                      <button className='m-4 py-3 px-16 text-gray-600 border-2 border-black bg-white rounded-full font-light hover:bg-black hover:text-white hover:shadow-2xl'
                      >
                        Explore Car
                      </button>
                      <button className='m-4 py-3 px-16 text-gray-600 border-2 border-black bg-white rounded-full font-light hover:bg-black hover:text-white hover:shadow-2xl'
                      > 
                        Explore Services
                      </button>
              </div>
          </div>
              
          <div className='mt-60' >
            <p className='text-center text-5xl font-light'>
              Renting a luxury car in <span className='font-medium'>Agra</span>
            </p>
            <p className='text-center mt-5 text-3xl font-extralight my-16'>
              Renting a luxury car in a city like Agra (Delhi NCR) is much of a <br/>
              hurdle unless you arrive at the right place to the right people. In <br/>
              this case, You are at the correct place.<br/>
                <span className='font-medium'>Luxorides</span> offers you a wide variety of luxury cars like 
                  <button className='text-green-500 font-light px-2'>Audi</button>,
                    <br/>
                  <button className='text-green-500 font-light'>Mercedes</button>,
                  <button className='text-green-500 font-light'>BMW</button>,
                  <button className='text-green-500 font-light'>Jaguar</button>,
                  <button className='text-green-500 font-light'>Range Rover</button>,
                  <button className='text-green-500 font-light'>Bentley</button>,
                  <button className='text-green-500 font-light'>Porsche</button>,
                  <button className='text-green-500 font-light'>Rolls Royce</button>,
                    <br/>
                  <button className='text-green-500 font-light'>Ferrari</button> 
                  and 
                  <button className='text-green-500 font-light px-2'>Vintage Cars</button> 
                  on rent in Delhi NCR.
            </p>
            
          </div>

          <div className='bg-[#efefef] '>
            <h1 className='text-center font-extralight my-8 pt-20 text-6xl'>How it Works</h1>
            <p className='text-center text-slate-600 font-extralight text-3xl'>You are Important to us.
              <br/>
              We believe in a personalised experience for your ride.
              <br/>
              You can always
               <button className='text-green-500 px-2 font-light'> Contact Us </button>
              if you need any help.
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

            <div className='flex justify-center text-center'>
              <div className='mt-3 mr-20 mb-24'>
                <h1 className='text-2xl'>
                  Choose your Ride
                </h1>
                <p className='mt-4 text-gray-900 font-extralight text-lg'>
                  We offer a wide range of vehicles that can fit all<br />
                  your requirements.<br/>
                  All our vehicles are Chauffeur driven.<br/>
                  Explore <button className='font-medium'>Cars</button> /
                  <button className='font-medium'>Cars</button> /
                  <button className='font-medium'>Cars</button> 
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
              <div className='mt-3 '>
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
          <button className='m-5 py-3 px-14 text-lg text-white border-2 border-black bg-black rounded-full hover:shadow-2xl'>
            Go to Support
          </button>
        </div>
      </div>

      <div className='bg-[#073b4c] h-auto text-center'>
        <div className='flex justify-center space-x-10'>
          <div>
              <button className='text-[#e6c65f] font-bold mt-10 py-5 hover:text-[#b1a374]'>
                  Dive In
              </button><br />
              <button className='text-white hover:text-gray-400'>Safety</button><br />
              <button className='text-white hover:text-gray-400'>Careers</button><br />
              <button className='text-white hover:text-gray-400'>Partners</button><br />
              <button className='text-white hover:text-gray-400'>About Us</button><br />
              <button className='text-white hover:text-gray-400'>Contact Us</button><br />
              <button className='text-white hover:text-gray-400'>Testimonials</button><br />
              <button className='text-white hover:text-gray-400'>List Your Vehicle</button><br />
              <button className='text-white hover:text-gray-400'>Terms And Conditions</button><br />

          </div>
          <div>
              <button className='text-[#e6c65f] font-bold mt-10 py-5 hover:text-[#b1a374]'>
                  Categories
              </button><br />
              <button className='text-white hover:text-gray-400'>Rent Luxury Sedans</button><br />
              <button className='text-white hover:text-gray-400'>Rent Convertibles</button><br />
              <button className='text-white hover:text-gray-400'>Rent Luxury SUVs</button><br />
              <button className='text-white hover:text-gray-400'>Rent Premium SUVs</button><br />
              <button className='text-white hover:text-gray-400'>Rent Muscle Cars</button><br />
              <button className='text-white hover:text-gray-400'>Rent Vintage Cars</button><br />
              <button className='text-white hover:text-gray-400'>Rent Ultra Luxury Cars</button><br />
              <button className='text-white hover:text-gray-400'>Rent Standard Vehicles</button><br />

          </div>

          <div>
              <button className='text-[#e6c65f] font-bold mt-10 py-5 hover:text-[#b1a374]'>
                  Services
              </button><br />
              <button className='text-white hover:text-gray-400'>Wedding Cars</button><br />
              <button className='text-white hover:text-gray-400'>Tour</button><br />
              <button className='text-white hover:text-gray-400'>Corporate</button><br />
              <button className='text-white hover:text-gray-400'>VIP Transport</button><br />
              <button className='text-white hover:text-gray-400'>Personal Travel</button><br />
              <button className='text-white hover:text-gray-400'>Celebrities Travel</button><br />
              <button className='text-white hover:text-gray-400'>Video Shoots</button><br />
              <button className='text-white hover:text-gray-400'>Car Decorations</button><br />

          </div>

          <div>
              <button className='text-[#e6c65f] font-bold mt-10 py-5 hover:text-[#b1a374]'>
                  Brands We Serve
              </button><br />
              <button className='text-white hover:text-gray-400'>Audi</button><br />
              <button className='text-white hover:text-gray-400'>BMW</button><br />
              <button className='text-white hover:text-gray-400'>Jaguar</button><br />
              <button className='text-white hover:text-gray-400'>Range Rover</button><br />
              <button className='text-white hover:text-gray-400'>Mercedes Benz</button><br />
              <button className='text-white hover:text-gray-400'>Rolls Royce</button><br />
              <button className='text-white hover:text-gray-400'>Bentley</button><br />
              <button className='text-white hover:text-gray-400'>Porsche</button><br />

          </div>

          <div>
              <button className='text-[#e6c65f] font-bold mt-10 py-5 hover:text-[#b1a374]'>
                  Top Choices
              </button><br />
              <button className='text-white hover:text-gray-400'>Audi A3 Convertible (Red)</button><br />
              <button className='text-white hover:text-gray-400'>Mercedes Benz GLA</button><br />
              <button className='text-white hover:text-gray-400'>Audi A4 Sedan</button><br />
              <button className='text-white hover:text-gray-400'>Jaguar XF Sedan</button><br />
              <button className='text-white hover:text-gray-400'>Bentley Flying Spur</button><br />
              <button className='text-white hover:text-gray-400'>Chrysler Limousine</button><br />
              <button className='text-white hover:text-gray-400'>Rolls Royce Phantom</button><br />
              <button className='text-white hover:text-gray-400'>Rolls Royce 1939 Vintage</button><br />

          </div>
        </div>

        <div className='space-x-7 mt-5'>
          <button><ImFacebook className='text-gray-400 hover:text-white text-2xl'/></button>
          <button><BsTwitter className='text-gray-400 hover:text-white text-2xl'/></button>
          <button><BsInstagram className='text-gray-400 hover:text-white text-2xl'/></button>
          <button><BsYoutube className='text-gray-400 hover:text-white text-2xl'/></button>
          <button><BsPinterest className='text-gray-400 hover:text-white text-2xl'/></button>
        </div>

        <div className='pb-16'>
            <div className='mt-2 text-white'>
              Services offered by <button className='text-[#b1a374] font-bold'>LUXORIDES</button>
            </div>
            <div className='text-white'>
              Rent Luxury Cars | Chauffeur Driven Rides at Affordable Prices
            </div>
            <div className='text-white mt-8'>
              Your privacy is valuable to us. To know how we handle your data, read our <button className='text-gray-400'>Privacy Policy</button>.
            </div>
        </div>
      </div>

      <div className='bg-black h-48 '>
        <div className='bg-black h-96 text-center'>
          <div className='flex justify-center space-x-48 py-14'>
              <div>
                <img src="https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-9-500x500.webp" 
                      alt="luxorides logo"
                      className='h-28'
              />
              </div>
              <div>
                <h2 className='text-[#82786e] font-medium text-lg'>
                    Locations
                </h2><br/>
                <button className='text-gray-400 hover:text-gray-600'>Delhi</button><br />
                <button className='text-gray-400 hover:text-gray-600'>Lucknow</button><br />
                <button className='text-gray-400 hover:text-gray-600'>Agra</button><br />
                <button className='text-gray-400 hover:text-gray-600'>Jaipur</button><br />
              </div>
              <div>
                <h2 className='text-[#82786e] font-medium text-lg'>
                    Delhi NCR
                </h2><br/>
                <button className='text-gray-400 hover:text-gray-600'>Gurgaon</button><br />
                <button className='text-gray-400 hover:text-gray-600'>Faridabad</button><br />
                <button className='text-gray-400 hover:text-gray-600'>Ghaziabad</button><br />
                <button className='text-gray-400 hover:text-gray-600'>Noida</button><br />
              </div>
              <div>
                <h2 className='text-[#82786e] font-medium text-lg'>
                    Contacts
                </h2><br/>
                <button className='text-gray-400 hover:text-gray-600'>contact@luxorides.in</button><br />
                <button className='text-gray-400 hover:text-gray-600 py-5 font-extralight'>+91 7818836390</button><br />
              </div>

          </div>
          <div className='bg-gray-600 h-[1px] mx-36'></div>

          <div className='flex justify-center space-x-96'>
            <div className='text-left mt-5'>
              <h2 className='text-white'>Website developed by <button className='text-gray-400 hover:text-gray-600'>Coding Scholar</button></h2>

              <h2 className='text-white'>A Unit of <button className='text-[#b1a374] hover:text-[#d8ccaa]'>Umbrella Room Ventures India Pvt Ltd.</button> formally starsudt ventures</h2>

              <h2 className='text-white'>@ Copyright 2021 - All Rights Reserved</h2>


            </div>
            <div className='space-x-7 mt-5'>
              <button><ImFacebook className='text-gray-400 hover:text-blue-500 text-2xl'/></button>
              <button><BsTwitter className='text-gray-400 hover:text-blue-500 text-2xl'/></button>
              <button><BsInstagram className='text-gray-400 hover:text-pink-400 text-2xl'/></button>
              <button><BsYoutube className='text-gray-400 hover:text-red-700 text-2xl'/></button>
              <button><BsPinterest className='text-gray-400 hover:text-red-700 text-2xl'/></button>            
            </div>
        </div>

      </div>

      </div>
    </section>
  
  )
}
