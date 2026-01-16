import us from '../assets/images/jesm.png'

const MainSplash = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='mx-auto mt-24 mb-8 w-xl text-center'>
        <p>We provide personalized additions that elevate any celebration with custom batched cocktails,
          a selection of home-made desserts, and interactive photobooth experiences. 
          We're not a full-scale caterer or event planner... We specialize in the extra details that make events unforgettable.
        </p>
      </div>
      <img src={us} className='w-2/5'/>
    </div>
  )
}

export default MainSplash