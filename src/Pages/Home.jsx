import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ImFacebook } from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter, BsChevronRight, BsChevronLeft} from 'react-icons/bs'


export default function Home() {
  const location = useLocation()
    const navigate = useNavigate()

    function matchRoute(route){
        if(route===location.pathname){
            return true
        }
    }
    const slides=[
        {url:'home.jpg'},
        {url:'home2.jpg'},
        {url:'home3.jpg'},
        {url:'home4.jpg'},
        {url:'home5.jpg'}
    ]
    const [Currentstate,setCurrentState]=useState(0)
    
      const prevslide=()=>{
        const isfirstdlide=Currentstate===0;
        const newindex= isfirstdlide ? slides.length-1: Currentstate-1;
        setCurrentState(newindex);
      };
        const nextslide=()=>{
            const isfirstdlide=Currentstate===slides.length-1;
            const newindex= isfirstdlide ? 0: Currentstate+1;
            setCurrentState(newindex);
        };
    
  return (    
    <section>
        <div className='w-full h-[650px] relative m-0 '>
                <div 
                    style={{backgroundImage: `url(${slides[Currentstate].url})`}}
                    className='w-full h-full bg-center bg-cover duration-100'>
                </div>
            </div>
            <div className='absolute top-[400px] border-white border-2 rounded-full translate-y-[-50%] left-5 p-4 text-white bg-transparents cursor-pointer'>
                <BsChevronLeft onClick={prevslide} size={40}/>
            </div>

            <div className='absolute top-[400px] border-white border-2 rounded-full translate-y-[-50%] right-5 p-4 text-white bg-transparent cursor-pointer'>
                <BsChevronRight onClick={nextslide} size={40}/>
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
                  alt='covid' className={`w-[350px] cursor-pointer ${matchRoute('/Covid')}`} onClick={()=>navigate('/Covid')}/>
                  <h2 className='text-lg font-semibold mt-5 '>Regularly Cleaned and Sanitised</h2>
                  <p className='text-lg text-gray-600 mt-3 pb-8'>All our vehicles are regularly cleaned<br/> and sanitised for your safer and<br/> hygienic ride.</p>
                </div>
                <div className='text-center shadow-2xl'>
                  <img src="https://www.luxorides.com/assets/images/luxorides-covid-precautions-10.webp"
                  alt='covid' className={`w-[350px] ${matchRoute('/Covid')}`} onClick={()=>navigate('/Covid')}/>
                  <h2 className='text-lg font-semibold mt-5'>Minimal / No Touch Policy</h2>
                  <p className='text-lg text-gray-600 mt-3 pb-8'>We follow a minimum / no touch<br/> policy to ensure that you are safe<br/> throughout your rental.</p>
                </div>
                <div className='text-center shadow-2xl'>
                  <img src="https://www.luxorides.com/assets/images/6vh99bihqa-1.webp"
                  alt='covid' className={`w-[350px] ${matchRoute('/Covid')}`} onClick={()=>navigate('/Covid')}/>
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
        
        <div className='bg-white'>
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

        <div className=' bg-[#ccf5f4]'>
          <div className='flex justify-center space-x-14 '>
            <img src="https://luxorides.com/assets/images/cy1imgz3px-1000x667.webp" alt="ride" className='my-20 mr-20 rounded-2xl w-[50%]'/>
            <span>
              <h1 className='text-7xl font-normal mt-20 text-center'>RIDE <br/> <span className='font-bold'>ELITE</span></h1>
              <p className='text-2xl font-light mt-10 text-center'>
                Luxorides is the finest<br/>
                luxury car rental service in<br/>
                Delhi NCR, Jaipur, Agra<br/>
                and Lucknow.<br/>
                We offer you a seamless<br/> 
                chauffeur driven ride<br/> 
                experience to light up<br/> 
                your event. 
              </p> 
            </span>
          </div>
          <div className='flex justify-center mt-6'>
                      <button className={`m-2 py-3 px-16 text-black border-2 border-black  bg-[#ccf5f4] rounded-full font-normal hover:bg-black hover:text-white hover:shadow-2xl ${matchRoute('/Brands')}`} 
                      onClick={()=>navigate('/Brands')}
                      > 
                        Explore Cars by Brands
                      </button>
                      <button className={`m-2 py-3 px-16 text-black border-2 border-black  bg-[#ccf5f4] rounded-full font-normal hover:bg-black hover:text-white hover:shadow-2xl ${matchRoute('/Categories')}`}
                      onClick={()=>navigate('/Categories')}
                      >
                        Explore Car by Categories
                      </button>
          </div>

          <div className='flex justify-center '>
                      <button className={`m-2 mb-20 py-3 px-16 text-black border-2 border-black  bg-[#ccf5f4] rounded-full font-normal hover:bg-black hover:text-white hover:shadow-2xl ${matchRoute('/Services')}`} 
                      onClick={()=>navigate('/Services')}
                      > 
                        Explore Services
                      </button>
                      <button className={`m-2 mb-20 py-3 px-16 text-black border-2 border-black  bg-[#ccf5f4] rounded-full font-normal hover:bg-black hover:text-white hover:shadow-2xl ${matchRoute('/Oneview')}`}
                      onClick={()=>navigate('/Oneview')}
                      >
                        One-View
                      </button>
                      <button className={`m-2 mb-20 py-3 px-16 text-black border-2 border-black  bg-[#ccf5f4] rounded-full font-normal hover:bg-black hover:text-white hover:shadow-2xl`}
                      > 
                        Contact Us
                      </button>
                      <button className={`m-2 mb-20 py-3 px-16 text-black border-2 border-black  bg-[#ccf5f4] rounded-full font-normal hover:bg-black hover:text-white hover:shadow-2xl`}
                      >
                        About Us
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
