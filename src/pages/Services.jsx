import drink from '../assets/images/drinks.jpg'
import food from '../assets/images/food.jpg'
import photo from '../assets/images/photo.jpg'
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col justify-start mt-12'>
        <div className='border-solid border-2 border-gold rounded p-4 m-6 w-1/3 mx-auto'>
          <p className='tracking-wide text-lg text-center'>We offer these</p>
        </div>
        <div className='flex flex-row justify-center w-full'>
          <Link to='/barservice'>
            <div className='relative group transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={drink} className='border-solid border-2 border-gold rounded'/>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Custom Cocktail Packages</p>
            </div>
          </Link>
          <Link to='/foodservice'>
            <div className='group mx-1 transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={food} className='border-solid border-2 border-gold rounded'/>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Custom Dessert Packages</p>
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
    </div>
  )
}

export default Services