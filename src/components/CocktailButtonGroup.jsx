
import all from '../assets/images/drinks/cocktail-all.png'
import classic from '../assets/images/drinks/cocktail-classic.png'
import party from '../assets/images/drinks/cocktail-party.png'
import tiki from '../assets/images/drinks/cocktail-tiki.png'

const CocktailButtonGroup = ({active, onChange}) => {

  const buttons = [
    {id: "all", img: all},
    {id: "classic", img: classic},
    {id: "party", img: party},
    {id: "tiki", img: tiki}
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

export default CocktailButtonGroup