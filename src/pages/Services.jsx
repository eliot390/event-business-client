import drink from '../assets/images/drinks.jpg'
import food from '../assets/images/food.jpg'
import photo from '../assets/images/photo.jpg'
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col justify-start mt-12'>
        <div className='border-solid border-2 rounded p-4 m-6 w-1/3 mx-auto'>
          <p className='tracking-wide text-lg text-center'>We offer these</p>
        </div>
        <div className='flex flex-row justify-center w-full'>
          <Link to='/barservice'>
            <div className='group transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={drink} />
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Check out our cocktails</p>
            </div>            
          </Link>
          <Link to='/foodservice'>
            <div className='group mx-1 transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={food} />
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Check out our food</p>
            </div> 
          </Link>
          <Link to='/photoservice'>
            <div className='group transition duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={photo} />
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">Check out our photo booth</p>
            </div> 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services