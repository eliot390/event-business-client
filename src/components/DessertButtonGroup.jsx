
import all from '../assets/images/desserts/mixer.png'
import cake from '../assets/images/desserts/cake.png'
import cookie from '../assets/images/desserts/cookie.png'
import pie from '../assets/images/desserts/pie.png'

const DessertButtonGroup = ({active, onChange}) => {

  const buttons = [
    {id: "all", img: all},
    {id: "cookies", img: cookie},
    {id: "pies", img: pie},
    {id: "cakes", img: cake}
  ]

  return (
    <div className="flex flex-row justify-evenly">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => onChange(btn.id)}
          className={`            
            p-3
            transition
            ${active === btn.id ? "ring-blue-500" : "bg-none"}
            hover:bg-blue-100
            focus:outline-none focus:ring-2 focus:ring-blue-400`}
            aria-pressed={active === btn.id}
         >
          <img
            src={btn.img}
            className="h-22 select-none pointer-events-none"
          />
          <span className="text-xs font-medium capitalize">
            {btn.id}
          </span>
        </button>  
      ))}
    </div>
  )
}

export default DessertButtonGroup