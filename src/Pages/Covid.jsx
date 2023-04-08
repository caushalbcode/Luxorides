import React,{ useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs'

export default function Covid() {
    const location = useLocation()
    const navigate = useNavigate()

    function matchRoute(route){
        if(route===location.pathname){
            return true
        }
    }

    const slides=[
        {url:'https://luxorides.com/assets/images/luxorides-covid-precautions-23.webp'},
        {url:'https://luxorides.com/assets/images/luxorides-covid-precautions-25.webp'},
        {url:'https://luxorides.com/assets/images/luxorides-covid-precautions-19.webp'},
        {url:'https://luxorides.com/assets/images/luxorides-covid-precautions-20.webp'},
        {url:'https://luxorides.com/assets/images/luxorides-covid-precautions-21.webp'},
        {url:'https://luxorides.com/assets/images/luxorides-covid-precautions-10.webp'},
        {url:'https://luxorides.com/assets/images/luxorides-covid-precautions-16.webp'},
        {url:'https://luxorides.com/assets/images/6vh99bihqa-1.webp'},
        {url:'https://luxorides.com/assets/images/covid-ready-car-rental-luxorides-luxury-car-rentals-for-wedding-corporate-personal-delhi-noida-gurgaon-ghaziabad.webp'},
        {url:'https://luxorides.com/assets/images/luxorides-covid-precautions-22.webp'}
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
        <div>
            <img src="https://blog.mercy.com/wp-content/uploads/2020/04/MH_COVID_Leaving-House-1200x610.png" alt="covid" className='relative w-full'/>
            <div className='absolute top-[78%] left-48'>
                <h1 className='text-7xl font-semibold text-white'>COVID-19</h1>
                <h1 className='text-6xl text-white'>ready car Rental</h1>
            </div>
        </div>
        <div>
            <h2 className='text-5xl text-center mt-36'>
                Rent <span className='font-semibold'>Luxury Cars</span> staying safe from<br/> <span className='font-semibold'>COVID-19</span>
            </h2>
            <p className='text-3xl text-center font-thin py-8'>
                Stay safe from Coronavirus by riding with luxorides.<br/>
                We ensure your safety by taking multiple precautionary actions regularly.
            </p>
            <div className='flex justify-center'>
                <button className={`m-4 py-3 px-12 text-lg flex items-center border-2 border-black text-black bg-white rounded-full hover:bg-black hover:text-white hover:shadow-2xl ${matchRoute('/ebrands')}
                `}
                onClick={()=>navigate('/ebrands')}
                >
                    Browse Brands
                </button>
                <button className={`m-4 py-3 px-12 text-lg flex items-center border-2 border-black text-black bg-white rounded-full hover:bg-black hover:text-white hover:shadow-2xl ${matchRoute('/ecategories')}
                `}
                onClick={()=>navigate('/ecategories')}
                >
                    Browse Cars
                </button>
                <button className={`m-4 py-3 px-12 text-lg flex items-center border-2 border-black text-black bg-white rounded-full hover:bg-black hover:text-white hover:shadow-2xl ${matchRoute('/eservice')}
                `}
                onClick={()=>navigate('/eservice')}
                >
                    Browse Services
                </button>
            </div>
            <div className='ml-[41%] w-[20%] '>
                <button className={` m-4 py-3 px-12 text-lg flex items-center border-2 border-black text-white bg-black rounded-full hover:bg-white hover:text-black hover:shadow-2xl ${matchRoute('/oneview')}
                `}
                onClick={()=>navigate('/oneview')}
                >
                    One-View Cars
                </button>
            </div>
            <div className='w-[660px] h-[340px] relative mx-96 my-16'>
                <div 
                    style={{backgroundImage: `url(${slides[Currentstate].url})`}}
                    className='w-full h-full bg-center bg-cover duration-100'>
                </div>
            </div>
            <div className=' mx-40 absolute top-[1560px] border-black border-2 rounded-full translate-y-[-50%] left-5 p-4 text-black bg-transparents cursor-pointer'>
                <BsChevronLeft onClick={prevslide} size={40}/>
            </div>

            <div className=' mx-40 absolute top-[1560px] border-black border-2 rounded-full translate-y-[-50%] right-5 p-4 text-black bg-transparent cursor-pointer'>
                <BsChevronRight onClick={nextslide} size={40}/>
            </div>
            <div className='text-left mx-96'>
                <h2 className='text-5xl font-light mt-16'>Renting a Car in the <span className='font-semibold'>COVID-19</span> Pandemic</h2>
                <p className='text-2xl mt-10 font-extralight'>COVID-19 has posed a serious challenge to the world. Be it<br/> anyone, the exposure to the threat is highly sensitive. In such a<br/> time of risk exposure, the rental services are meeting a quite but<br/> tough challenge. However, car rentals in the coronavirus<br/> pandemic can be made risk free, but only if approached at the<br/> right place.</p>
                <p className='text-2xl mt-7 font-extralight'>Luxorides offers you high range of clean, safe and sanitised cars<br/> to fit your requirements. All our services are regularly monitored<br/> for hygienic processes including washing, sanitisations, PPE<br/> equipment.</p>

                <h2 className='text-3xl my-16'>Visit us now at <button className={`text-green-500 ${matchRoute('/')}`} onClick={()=>navigate('/')}>Rent a Luxury Car</button></h2>
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
