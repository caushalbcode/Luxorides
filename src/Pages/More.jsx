import React from 'react'

export default function More() {
  return (
    <section>
      <div>
        <img src="merc.jpg" alt="car"/>
      </div>
      <div>
        <div className='w-[20%] h-1 mx-auto mt-20 bg-[#149dcc]'></div>
        <h2 className='text-center font-bold text-7xl m-4'>LUXORIDES</h2>
        <div className='w-[20%] h-1 mx-auto bg-[#149dcc]'></div>
        <h1 className='text-5xl font-light text-center py-4 mt-28'>
          Your <br/>
          <span className='font-semibold '>Luxury Car Rentals</span> <br/>
          Solution
        </h1>
        <p className='text-center text-[26px] font-light mt-4'>
          Luxorides is a premier luxury car rental service. We offer chauffeur-driven and self- <br/>
          drive luxury cars on rent in and around Delhi NCR. We cater to companies and <br/>
          individuals who appreciate the highest quality of assistance and require a fast and <br/>
          professional car rental service, whether it be for leisure, business, events or <br/>
          activities. We are continuously upgrading our quality and services and are <br/>
          determined to provide the best experiences to our guests.<br/><br/>

          Luxorides offers all luxury and premium car brands including Audi, BMW,<br/>
          Mercedes, Jaguar, Land Rover, Bentley, Rolls Royce and in all sorts of categories as<br/>
          Convertibles, Sedans, SUVs, Commuters and Limousines for travel, transport, rental <br/>
          or hire.
        </p>
        
        <div>
          <h2 className='text-6xl text-center font-thin mt-36'>Our Strength</h2>
          <div className='flex justify-center mt-20 space-x-16'>
            <div>
              <div className='flex '>
                <h3 className='m-auto pr-4 text-5xl font-thin'>98%</h3>
                <div>
                  <h2 className='text-lg'>Satisfied Customers</h2>
                  <p className='font-light text-lg'>
                  We believe that our strength is from our customers and we serve with <br/>
                  unparralled service quality driving high satisfaction.
                  </p>
                </div>
              </div>
              <div className='flex mt-16'>
                <h3 className='m-auto pr-4 text-5xl font-thin'>914</h3>
                <div>
                  <h2 className='text-lg'>Vehicle Onboard</h2>
                  <p className='font-light text-lg'>
                  We have 900+ vehicles onboard to meet your requirements and offer<br/>
                  you a pretty good deal.
                  </p>
                </div>
              </div>
              <div className='flex mt-16 pr-10'>
                <h3 className='m-auto pr-4 text-5xl font-thin'>29</h3>
                <div>
                  <h2 className='text-lg'>Business Partners</h2>
                  <p className='font-light text-lg'>
                  We are backed with a support system of multiple car owners and<br/>
                  vendors to deal against any unforeseen circumstances.
                  </p>
                </div>
              </div>
            </div>
              <div>
                <img src="https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-13-500x500.webp" alt="luxorideslogo"  
                className='py-8 pl-6'
                />
              </div>
          </div>
        </div>
        <div className='text-center mt-44'>
          <h2 className='text-5xl font-light'>YOUR SAFETY, OUR PRIORITY</h2>
          <p className='text-2xl font-light mt-5 text-gray-500'>
          Your safety is our concern,<br/>
          We take utmost care for your safety from our side.<br/>
          Please read our safety guidelines for your safer ride.<br/> 
          View <button className='text-green-500'> Safety Instructions</button>.
          </p>
        </div>
        <div className='text-center mt-28'>
          <h2 className='text-5xl font-light'>EASY BOOKING PROCEDURE</h2>
          <p className='text-2xl font-light mt-5 text-gray-500'>
          Bookings on the Go. Now book your ride easily by our simple<br/> 
          booking process and Get Confirmation within few hours.<br/>
          <button className='text-green-500'> Book Now</button>!
          </p>
        </div>

        <div className='text-center mt-28'>
          <h2 className='text-5xl font-light'>24x7 CUSTOMER SUPPORT</h2>
          <p className='text-2xl font-light mt-5 text-gray-500'>
          We offer 24x7 Customer Support.<br/>
          Go to <button className='text-green-500'> Support</button>.
          </p>
        </div>
        <div className='bg-[#b2ccd2] h-auto mt-24 p-24'>
          <div className='justify-center flex  text-5xl'>
            <h2 className='text-left font-bold mx-20'>
              Not finding what You were<br/> looking for!
            </h2>
            <button className='m-5 py-3 px-14 text-lg text-white border-2  border-[#333] bg-[#333] rounded-full hover:bg-black hover:shadow-2xl'>
              Go to Support
            </button>
          </div>
        </div>

        <div className='bg-[#b2ccd2] py-2'>
          <div className='justify-center flex text-5xl'>
          <button className='m-8 mx-36 py-1 px-12 text-lg text-white border-2 border-[#333] bg-[#333] rounded-full  hover:bg-black hover:shadow-2xl'>
              Go to Home
            </button>
            <h2 className='m-5 mx-44 font-bold py-5 '>
            Lets Start Over!
            </h2>  
          </div>
        </div>
      </div>  
    </section>
  )
}
