import drink from '../assets/images/batched.png'
import food from '../assets/images/pie.png'
import photo from '../assets/images/photo.jpg'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='flex flex-col justify-center w-full'>
      <div className='mx-auto mt-24 mb-8 w-xl text-center'>
        <p>We provide personalized additions that elevate any celebration with custom batched cocktails,
          a selection of home-made desserts, and interactive photobooth experiences. 
          We're not a full-scale caterer or event planner... We specialize in the extra details that make events unforgettable.
        </p>
      </div>
      <div className='flex flex-row justify-center w-full'>
          <Link to='/barservice'>
            <div className='relative group transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={drink} className='border-solid border-2 border-gold rounded'/>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Custom Batched Cocktails</p>
            </div>
          </Link>
          <Link to='/foodservice'>
            <div className='group mx-1 transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={food} className='border-solid border-2 border-gold rounded'/>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Homemade Desserts</p>
            </div> 
          </Link>
          <Link to='/photoservice'>
            <div className='group transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={photo} className='border-solid border-2 border-gold rounded'/>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Photobooth Services</p>
            </div> 
          </Link>
        </div>
    </div>
  )
}

export default About