import { Link } from "react-router-dom";
import drink from '../assets/images/batched.jpg'
import dessert from '../assets/images/cookies.jpg'
import cookie from '../assets/images/cookie-2.jpg'
import mixed from '../assets/images/mixed.jpg'

const Services = () => {
  return (
    <div>     
      <div className="flex flex-row min-h-screen justify-center items-center">
        {/* <p className='mt-8 mx-auto w-full lg:w-7/8 lg:text-xl mb-8 font-semibold text-center'>Toasted provides personalized additions that elevate any celebration with custom batched cocktails,
          a selection of home-made desserts, and interactive photobooth experiences. 
          We're not a full-scale caterer or event planner... We specialize in the extra details that make events unforgettable.</p> */}
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-6 lg:mb-5 lg:mt-5">
          <Link to='/collection/dessertservice'>
            <div className='group transition bg-cream border-solid border-3 border-honey rounded duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={dessert} className='mx-auto w-7/8 rounded mt-4'/>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Homemade Desserts</p>
              <p className='text-center pb-4'>Toasted offers homemade desserts perfect for any occasion.</p>
            </div> 
          </Link>
          <Link to='/collection/barservice'>
            <div className='group transition bg-cream border-solid border-3 border-honey rounded duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={drink} className='mx-auto w-7/8 rounded mt-4'/>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Custom Batched Cocktails</p>
              <p className='text-center pb-4'>Toasted offers handcrafted, pre-batched cocktails</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services