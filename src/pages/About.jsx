
import us from '../assets/images/jesm.png'

const About = () => {
  return (
    <div className='flex flex-col justify-center w-full'>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='mx-auto mt-12 mb-8 w-xl text-center'>
          <p>We provide personalized additions that elevate any celebration with custom batched cocktails,
            a selection of home-made desserts, and interactive photobooth experiences. 
            We're not a full-scale caterer or event planner... We specialize in the extra details that make events unforgettable.
          </p>
        </div>
        <img src={us} className='w-2/5 border-sold border-2 border-honey rounded'/>
      </div>
    </div>
  )
}

export default About

/** TODO
 * landing page back to services.jsx
 * 
 * copy shortened page description/details under services cards
 * 
 * change "add to cart" to copy Levain style
 * 
 * add +/- buttons to your cart
 *  */ 