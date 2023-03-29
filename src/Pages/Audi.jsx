import React from 'react'
import { ImFacebook } from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter} from 'react-icons/bs'

export default function Audi() {
  return (
    <section>
        <div>
            <img src="audi.jpg" alt="audi" className='relative'/>
            <div className='absolute top-[360px] right-[35%]'>
                <h1 className='text-center text-white text-7xl font-medium'>Rent an Audi</h1>
                <h2 className='my-20 mx-10 text-black text-4xl font-medium'>Luxury Personified</h2>
            </div>
        </div>
        <div>
          <h1 className='my-32 text-7xl text-black font-semibold text-center'>Convertibles <span className='font-extralight'>from</span> Audi</h1>
          <div className='flex justify-between'>
            <div className='mx-20'>
              <img src="https://www.luxorides.com/assets/images/audi-a3-cabriolet-rs-25000-1920x1080.webp" alt="audi" className='w-[1100px] rounded-lg shadow-2xl' />
            </div>
            <div className='justify-center mr-20 w-11/12'>
              <h1 className='text-4xl font-light text-center mt-16'>Rent Audi A3 Cabriolet (White)</h1>
              <p className='text-center text-xl font-thin my-4'>
                The Audi A3 Cabriolet combines elegant lightness<br/> 
                with dynamically acting proportions. The standard,<br/>
                fully-automated fabric top can be<br/>
                opened up.
              </p>
            </div>
          </div>
            <div className='flex my-32 justify-between'>
              <div className='ml-32 w-11/12 '>
                <h1 className='text-4xl font-light text-center flex mt-16'>Rent Audi A3 Cabriolet (Red)</h1>
                <p className='text-center text-xl font-thin my-4 flex'>
                  The Audi A3 Cabriolet. Its optional acoustic top<br/> 
                  offers a particularly quiet driving experience.<br/> 
                  Experience a different kind of charm, sitting <br/> 
                  in or standing up.
                </p>
              </div>
              <div className='mx-20 items-center'>
                <img src="https://luxorides.com/assets/images/audi-a3-cabriolet-rs-25000-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-2-1016x635.webp" alt="audi red" className='w-[1200px] h-5/6 rounded-lg shadow-2xl '/>
              </div>
            </div>
        </div>
        <div>
          <h1 className='my-32 text-7xl text-black font-semibold text-center'>Sedans <span className='font-extralight'>from</span> Audi</h1>
          <div className='flex justify-between space-x-2 mx-20'>
            <img src="audiA4.webp" alt="auto" className='w-[31%]  rounded-lg'/>
            <img src="audi A6.webp" alt="auto2" className='w-[31%] ml-20 rounded-lg'/>
            <img src="audiA8.webp" alt="auto3" className='w-[31%] ml-20 rounded-lg'/>
          </div>
          <div className='flex justify-between space-x-2'>
            <div className='mx-20'>
              <h1 className='text-3xl my-6 font-semibold text-center'>Rent Audi A4 Sedan</h1>
              <p className='font-thin text-center'>
                Design and technology that lead the way.<br/> 
                Sporty and pioneering. The Audi A4, Progress<br/> 
                is Intense.<br/> <br/>
                Maintain the class.
              </p>
            </div>
            <div className='justify-center'>
              <h1 className='text-3xl my-6 font-semibold text-center'>Rent Audi A6 Sedan</h1>
              <p className='font-thin text-center'>
                Fascination comes through in many facets.<br/> 
                Innovative technologies. Progressive design.<br/> 
                And a wide range of equipments. The Audi A6<br/> 
                provides you all with the comfort that you can<br/> 
                hit the road with.
              </p>
            </div>
            <div className='mx-16'>
              <h1 className='text-3xl my-6 font-semibold mx-32 text-center'>Rent Audi A8 L Sedan</h1>
              <p className='font-thin text-center mx-16'>
                A design that takes elegance and dynamics to<br/> 
                new level, with numerous assistance systems,<br/> 
                a new operating concept and above all more<br/> 
                space. Configure your own space in the back,<br/> 
                more flexible and comfortable Audi A8 L.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className='my-32 text-7xl text-black font-semibold text-center'>SUVs <span className='font-extralight'>from</span> Audi</h1>
          <div className='flex justify-between space-x-2 mx-16'>
            <img src="https://luxorides.com/assets/images/audi-q3-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-3-800x716.webp" alt="kfh" className='w-[30%] ml-20 rounded-lg'/>
            <img src="https://luxorides.com/assets/images/audi-q5-rs20000-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-1016x832.webp" alt="kgf" className='w-[30%] ml-20 rounded-lg'/>
            <img src="https://luxorides.com/assets/images/audi-q7-side-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad-874x762.webp" alt="kdf" className='w-[30%] ml-20 rounded-lg'/>
          </div>
          <div className='flex justify-between'>
            <div>
              <h1 className='text-3xl my-6 font-semibold mx-32 text-center'>Rent Audi Q3 SUV</h1>
              <p className='font-thin text-center mx-16'>
               Think about mobility. Then multiply it by today's <br/> 
               world. A character that puts self-confidence in <br/> 
               a class of its own. The Audi Q3.
              </p>
            </div>
            <div>
              <h1 className='text-3xl my-6 font-semibold mx-32 text-center'>Rent Audi Q5 SUV</h1>
              <p className='font-thin text-center mx-16'>
                The SUV for a new generation. Convincing<br/> 
                without being persuasive. Sportive without<br/> 
                being unreasonable. Efficient driving pleasure.
              </p>
            </div>
            <div>
              <h1 className='text-3xl my-6 font-semibold mx-32 text-center'>Rent Audi Q7 SUV</h1>
              <p className='font-thin text-center mx-16'>
                Ultimate control and a record that stands<br/> 
                unbeaten - the legendary quattro and the Audi<br/> 
                Q7 are ready to dominate the elements.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className='mt-32 mb-6 text-6xl text-black font-semibold text-center'> <span className='font-extralight'>About </span> Audi</h1>
          <p className='text-[18px] font-thin text-center '>
            Audi is a german luxury car manufacturing company, fully owned by the Volkswagen<br/> 
            Group. Through the ages, Audi has been the essence of luxury and splendour. Audi <br/>
            is built to perfection, for the modern urbanite. Nearly every model of this luxury<br/> 
            car brand is a killer combo of technology, impeccable German craftsmanship, and<br/> powerful engine specs. It is best-known for exuding opulence, and yet a sporty look<br/> featuring different exterior colors.
          </p>
          <h1 className='mt-24 mb-6 text-6xl font-extralight text-black text-center'>Renting an <span className='font-semibold'>Audi</span></h1>
          <h3 className='text-3xl font-extralight text-left ml-96'>Experience the Audi aura through Luxorides</h3>
          <p className='text-[18px] my-5 font-extralight text-left mx-96'>
            Luxorides has delivered the best transit options in The Delhi NCR and North India since<br/> a long time. Being a trusted name in the chauffeur-driven transportation service, we<br/> offer a flawless and hassle-free experience of riding in your very own Audi. Hire your<br/> choice of luxury ride for any event; whether it be a wedding, a corporate, or a personal<br/> need. We are partnered with legitimate and trusted car-owners & vendors for<br/> facilitating your dream car.<br/>
            <br/>
            Place an appointment with us and rent an Audi of your choice. Come, be a part of our<br/> growing community. Allow Luxorides to give you an experience of a lifetime!
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
