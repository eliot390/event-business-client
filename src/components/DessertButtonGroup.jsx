
import all from '../assets/images/desserts/btn-mixer.png'
import cakeIcon from '../assets/images/desserts/btn-cake.png'
import cookieIcon from '../assets/images/desserts/btn-cookie.png'
import pieIcon from '../assets/images/desserts/btn-pie.png'

const DessertButtonGroup = ({active, onChange}) => {

  const buttons = [
    {id: "all", img: all},
    {id: "cookies", img: cookieIcon},
    {id: "pies", img: pieIcon},
    {id: "tres leches", img: cakeIcon}
  ]

  return (
    <div className='flex justify-center'>
      <div className="flex flex-row w-full lg:w-3/4 justify-around lg:justify-evenly bg-light-honey border-honey border-solid border-3 rounded-xl">
        {buttons.map((btn) => (
          <button
          key={btn.id}
          onClick={() => onChange(btn.id)}
          className={`
            grid grid-col-1
            justify-items-center
            p-2
            lg:p-3
            transition
            ${active === btn.id ? "ring-blue-500" : "bg-none"}`}
            aria-pressed={active === btn.id}
         >
          <img
            src={btn.img}
            className={`
            h-10
            lg:h-22
            cursor-pointer
            transition duration-300 ease-in-out hover:scale-105`}
          />
          <span className="text-sm font-medium capitalize">
            {btn.id}
          </span>
        </button>
        ))}
      </div>
    </div>
  )
}

export default DessertButtonGroup