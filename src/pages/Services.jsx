import { Link } from "react-router-dom";
import drink from '../assets/images/batched.jpg'
import dessert from '../assets/images/cookies.jpg'

const Services = () => {
  return (
    <div>
      <div className="flex flex-col pt-40 justify-center items-center">
        <div className="w-7/8 lg:w-2/5 mb-4 p-4 bg-white/75 rounded-lg">
          <p className="text-lg text-center">Flour & Flask combines small-batch baked goods and handcrafted cocktails, 
            because we decided that was a completely reasonable business idea and no one stopped us!
            Order something sweet, add something spirited, and let us handle the rest.
            Your treats (and your drinks) will be ready before you've decided which one you're excited about most.
          </p>
        </div>        
        <div className="grid grid-cols-1 max-sm:w-7/8 justify-items-center pb-4 lg:grid-cols-2 gap-6 lg:mb-5 lg:mt-5">
          <Link to='/collection/dessertservice'>
            <div className='group transition bg-cream border-solid border-3 border-honey rounded duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={dessert} className='mx-auto w-7/8 rounded mt-4'/>
              <p className='text-center text-sm lg:text-lg font-semibold py-2'>Homemade desserts, perfect for any occasion.</p>
            </div> 
          </Link>
          <Link to='/collection/barservice'>
            <div className='group transition bg-cream border-solid border-3 border-honey rounded duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
              <img src={drink} className='mx-auto w-7/8 rounded mt-4'/>
              <p className='text-center text-sm lg:text-lg font-semibold py-2'>Handcrafted, pre-batched cocktails</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services