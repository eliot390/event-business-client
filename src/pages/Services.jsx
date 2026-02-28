import drink from '../assets/images/batched.jpg'
import dessert from '../assets/images/cookies.jpg'
import photo from '../assets/images/photobooth.jpg'
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>     
      <div className="flex flex-col justify-center max-w-[85rem] px-4 py-24 lg:px-8 lg:py-14 mx-auto">
        <p className='text-4xl text-center'>What's Your Party Missing?</p>
        <p className='mt-8 mx-auto w-4/5 text-xl mb-8 font-semibold text-center'>Toasted provides personalized additions that elevate any celebration with custom batched cocktails,
          a selection of home-made desserts, and interactive photobooth experiences. 
          We're not a full-scale caterer or event planner... We specialize in the extra details that make events unforgettable.</p>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-6 mb-5 mt-5">
          <Link to='/collection/dessertservice'>
            <div className='group transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={dessert} className='border-solid border-2 border-gold rounded'/>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Homemade Desserts</p>
              <p className='text-center'>Toasted offers homemade desserts perfect for any occasion.</p>
            </div> 
          </Link>
          <Link to='/collection/barservice'>
            <div className='relative group transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={drink} className='border-solid border-2 border-gold rounded'/>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Custom Batched Cocktails</p>
              <p className='text-center'>Toasted offers handcrafted, pre-batched cocktails</p>
            </div>
          </Link>
          <Link to='/collection/photoservice'>
            <div className='group transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={photo} className='border-solid border-2 border-gold rounded'/>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Photobooth Services</p>
            </div> 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services