import React from 'react'
import {MdEmail} from 'react-icons/md'
import {IoIosArrowDown} from 'react-icons/io'
import {ImWhatsapp, ImFacebook } from 'react-icons/im'
import {BsInstagram, BsYoutube, BsPinterest, BsTwitter} from 'react-icons/bs'



export default function Support() {
  return (
    <section>
      <div>
        <img src="supportoffice.jpg" alt="supportimg"
         className='relative'
         />
          <div className='bg-[#465052] absolute top-56 right-24 py-14 my-16 mx-40'>
            <h2 className='mx-10 text-6xl font-medium text-white'>
              Your problem is ours!
            </h2>
            <p className='text-left my-8 mx-10 text-3xl font-extralight text-white'>
              We offer you complete personal support regarding our services. You can reach us by<br/>
              various means, whether it be a <button className='text-green-500'>Mail</button>, a <button className='text-green-500'>Call</button> or through <button className='text-green-500'>WhatsApp</button>.<br/><br/>
              We may already have a solution for your concerns. Visit our <button className='text-green-500'>FAQs</button> Section.<br/><br/>
              Feel free to reach us out. We are available anytime in 24 hours a day, 7 days a Week.
            </p>
          </div>
      </div>

      
      <div className='bg-gradient-to-r from-[#232323] to-green-500  h-72'>
        <div className='justify-between flex items-center' >

          <div className='my-20 ml-72 '>
            <button className='py-4 px-12 text-white bg-green-500 rounded-full font-semibold flex items-center hover:bg-green-700 hover:shadow-2xl'>
              <ImWhatsapp className='mr-4 text-3xl'/>
              WhatsApp Us
            </button>
          </div>

          <div className='my-20 mr-72'>
            <h2 className='text-right text-5xl text-white'>Personalised Resolution</h2>
            <p className='text-right font-extralight text-2xl text-white py-3'>
            WhatsApp us your concerns and Our team will attend to it<br/>
            Immediately !
            </p>  
          </div>

        </div>
      </div>

      <div className='bg-gradient-to-r from-[#232323] to-[#e4d295]'>
        <div className='justify-between flex items-center' >

          <div className='my-20 ml-72 '>
            <button className='py-4 px-16 text-[#232323] bg-yellow-300 rounded-full font-semibold flex items-center hover:bg-yellow-400 hover:shadow-2xl'>
              <MdEmail className='mr-4 text-3xl'/>
              E-Mail Us
            </button>
          </div>

          <div className='my-20 mr-72'>
            <h2 className='text-right text-5xl text-white'>E-Mail us Your Concerns</h2>
            <p className='text-right font-extralight text-2xl text-white py-3'>
            Stuck in a Problem?<br/>
            Do not hold it to yourself, Mail us your concerns !
            </p>  
          </div>

        </div>
      </div>

      <div className='bg-gradient-to-r from-[#232323] to-[#f9f9f9] h-72'>
        <div className='justify-between flex items-center' >
          <div className='mx-72 my-20'>
            <h2 className='text-5xl text-white'>Frequently Asked<br/> Questions</h2>
            <p className='font-extralight text-2xl text-white py-3'>
            Have a concern?<br/>
            We might already have a solution ready for you !</p>  
          </div>
        </div>
      </div>

      <div  className='bg-gradient-to-r from-[#232323] to-[#b2ccd2] py-20'>
            <div className='text-left ml-64'>
                <h2 className='text-5xl text-white font-medium'>
                    Frequently Asked<br/>
                    Questions
                </h2>
                <p className='text-white font-thin text-2xl mt-6 '>
                    Have a concern?<br/>We might already have a solution ready for you !
                </p>
            </div>
        </div>

        <div>
            <h2 className='text-5xl text-black text-center font-semibold mt-24'>
                Frequently Asked Questions
            </h2>


            <div className='border-x-2 border-b-2 border-stone-300 bg-[#f4f2f2] mx-80 mt-20 mb-1 '>
                <h2 className='text-left flex text-2xl font-light ml-14 py-4'>
                  <IoIosArrowDown className='font-light text-4xl mx-3'/>
                    How to choose which Luxoride is best for my<br/>occasion?
                </h2>
            </div>
            <div className='border-x-2 border-b-2 border-stone-300 bg-[#f4f2f2] mx-80  mb-1'>
                <h2 className='text-left flex text-2xl font-light ml-14 py-4'>
                  <IoIosArrowDown className='font-light text-4xl mx-3'/>
                    How to book my Luxoride?
                </h2>
            </div>
            <div className='border-x-2 border-b-2 border-stone-300 bg-[#f4f2f2] mx-80  mb-1'>
                <h2 className='text-left flex text-2xl font-light ml-14 py-4'>
                  <IoIosArrowDown className='font-light text-4xl mx-3'/>
                    What are appicable booking slots?
                </h2>
            </div>
            <div className='border-x-2 border-b-2 border-stone-300 bg-[#f4f2f2] mx-80  mb-1'>
                <h2 className='text-left flex text-2xl font-light ml-14 py-4'>
                  <IoIosArrowDown className='font-light text-4xl mx-3'/>
                    Which areas do you cover?
                </h2>
            </div>
            <div className='border-x-2 border-b-2 border-stone-300 bg-[#f4f2f2] mx-80  mb-1'>
                <h2 className='text-left flex text-2xl font-light ml-14 py-4'>
                  <IoIosArrowDown className='font-light text-4xl mx-3'/>
                    How many days before do i need to Book my Ride?
                </h2>
            </div>
            <div className='border-x-2 border-b-2 border-stone-300 bg-[#f4f2f2] mx-80  mb-1'>
                <h2 className='text-left flex text-2xl font-light ml-14 py-4'>
                  <IoIosArrowDown className='font-light text-4xl mx-3'/>
                    What if my Luxorideis not on time / doesn't<br/>showup?
                </h2>
            </div>
            <div className='border-x-2 border-b-2 border-stone-300 bg-[#f4f2f2] mx-80  mb-1'>
                <h2 className='text-left flex text-2xl font-light ml-14 py-4'>
                  <IoIosArrowDown className='font-light text-4xl mx-3'/>
                    How do i trust you with day of my life?
                </h2>
            </div>
            <div className='border-x-2 border-b-2 border-stone-300 bg-[#f4f2f2] mx-80  mb-1'>
                <h2 className='text-left flex text-2xl font-light ml-14 py-4'>
                  <IoIosArrowDown className='font-light text-4xl mx-3'/>
                    What if i want to see my Luxoride prior to booking?
                </h2>
            </div>
            <div className='border-x-2 border-b-2 border-stone-300 bg-[#f4f2f2] mx-80  mb-1'>
                <h2 className='text-left flex text-2xl font-light ml-14 py-4'>
                  <IoIosArrowDown className='font-light text-4xl mx-3'/>
                    Are there any surprise that you will provide me?
                </h2>
            </div>
            <div className='border-x-2 border-b-2 border-stone-300 bg-[#f4f2f2] mx-80  mb-1 pb-7'>
                <h2 className='text-left flex text-2xl font-light ml-14 py-4'>
                  <IoIosArrowDown className='font-light text-4xl mx-3'/>
                    What are the changes of Upgrade?
                </h2>
            </div>

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

      <div className='bg-[#b2ccd2] h-72 py-24 '>
        <div className='justify-center flex  text-5xl'>
          <h2 className='text-left font-semibold py-5 mr-72'>
          Lets Start Over!
          </h2>
          <button className='m-5 py-2 px-12 text-lg text-white border-2 border-[#333] bg-[#333] rounded-full hover:shadow-2xl'>
            Go to Home
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
