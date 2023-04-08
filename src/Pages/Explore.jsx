import React from 'react'

export default function Explore() {
  return (
    <section>
      <div>
        <img src='garage.jpg' alt='GarageImg' className='relative'/>
        <div className='absolute top-[50%] right-[39%]'>
          <h2 className='text-7xl text-white font-semibold'>Explore <span className='font-thin'>Cars</span></h2>
        </div>
      </div>

      <div >
        <p className='text-2xl mt-40 font-light text-center'>
          Luxorides offers you a wide range of vehicles to choose from!<br/>
           Go on, Opt your favourite!
        </p>
        <div className='flex justify-center mt-6'>
            <button className='m-4 py-3 px-14 text-lg flex items-center text-white bg-[#b1a374] rounded-full hover:bg-[#6c613c] hover:shadow-2xl'>Rent Convertibles</button>
            <button className='m-4 py-3 px-14 text-lg flex items-center text-white bg-[#b1a374] rounded-full hover:bg-[#6c613c] hover:shadow-2xl'>Rent Luxury Sedans</button>
            <button className='m-4 py-3 px-14 text-lg flex items-center text-white bg-[#b1a374] rounded-full hover:bg-[#6c613c] hover:shadow-2xl'>Rent Luxury SUVs</button>
          </div>
          <div className='flex justify-center '>
            <button className='m-4 py-3 px-14 text-lg flex items-center text-white bg-[#b1a374] rounded-full hover:bg-[#6c613c] hover:shadow-2xl'>Rent Premiun Luxury SUVs</button>
            <button className='m-4 py-3 px-14 text-lg flex items-center text-white bg-[#b1a374] rounded-full hover:bg-[#6c613c] hover:shadow-2xl'>Rent Sports/Muscle Cars</button>
          </div>
          <div className='flex justify-center '>
            <button className='m-4 py-3 px-14 text-lg flex items-center text-white bg-[#b1a374] rounded-full hover:bg-[#6c613c] hover:shadow-2xl'>Rent Limousines</button>
            <button className='m-4 py-3 px-14 text-lg flex items-center text-white bg-[#b1a374] rounded-full hover:bg-[#6c613c] hover:shadow-2xl'>Rent High End Luxury Cars</button>
            <button className='m-4 py-3 px-14 text-lg flex items-center text-white bg-[#b1a374] rounded-full hover:bg-[#6c613c] hover:shadow-2xl'>Rent Vintage Cars</button>
          </div>
          <div className='flex justify-center '>
            <button className='m-4 py-3 px-14 text-lg flex items-center text-white bg-[#333] rounded-full hover:bg-slate-900 hover:shadow-2xl'>Browse By Brands</button>
            <button className='m-4 py-3 px-14 text-lg flex items-center text-white bg-[#333] rounded-full hover:bg-slate-900 hover:shadow-2xl'>Rent Browse At a Glance</button>
          </div>

          <div className='text-center mt-36'>
            <h2 className='text-5xl font-extralight'>
              <span className='font-medium'>Categorised</span> Luxury Cars
            </h2>
            <p className='text-left text-3xl font-extralight mx-80 mt-6'>
              We know choosing a luxury car for your special event is tough<br/>
              but we have a solution ready for you. Why not start by choosing a<br/>
              category! We have categorised the fleet into many categories. <br/> <br/>

              You may start browsing luxury cars through these categories. We<br/>
              offer Convertibles, Sedans, SUVs, Sports, Muscle, Limousines,<br/>
              Ultra luxury cars and Vintage cars on rent. These cars add value<br/>
              to your ocassion, You always have the option to choose the best <br/>
              luxury car that suites you.
            </p>
            <h2 className='text-5xl font-extralight mt-28'>Renting a Luxury Car</h2>
            <p className='text-left text-3xl font-extralight mx-80 mt-6 mb-14'>
              Luxury cars add a unique value to your ocassion. Their stylish 
              looks and curvy designs are quite eye-catching and often leave 
              people wondering. Luxury cars can help maintaining your status
              symbol.
            </p>
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
          <h2 className='text-left font-semibold mx-20'>
            Not finding what You were<br/> looking for!
          </h2>
          <button className='m-5 py-2 px-14 text-lg text-white border-2 border-[#333] bg-[#333] rounded-full hover:shadow-2xl'>
            Go to Support
          </button>
        </div>
      </div>
    </section>
  )
}
