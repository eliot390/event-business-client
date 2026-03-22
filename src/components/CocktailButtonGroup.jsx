
import all from '../assets/images/drinks/btn-all.png'
import classic from '../assets/images/drinks/btn-classic.png'
import party from '../assets/images/drinks/btn-party.png'
import tiki from '../assets/images/drinks/btn-tiki.png'
import allColor from '../assets/images/drinks/btn-all-clr.png'
import classicColor from '../assets/images/drinks/btn-classic-clr.png'
import partyColor from '../assets/images/drinks/btn-party-clr.png'
import tikiColor from '../assets/images/drinks/btn-tiki-clr.png'

const CocktailButtonGroup = ({active, onChange}) => {

  const buttons = [
    {id: "all", img: all, colorImg: allColor},
    {id: "classic", img: classic, colorImg: classicColor},
    {id: "party", img: party, colorImg: partyColor},
    {id: "tiki", img: tiki, colorImg: tikiColor}
  ]

  return (
    <div className="flex justify-center">
      <div className="flex flex-row w-full lg:w-3/4 justify-around lg:justify-evenly bg-cream border-sea-green border-solid border-3 rounded-xl">
        {buttons.map((btn) => {
          const isActive = active === btn.id

          return (
            <button
              key={btn.id}
              onClick={() => onChange(btn.id)}
              aria-pressed={isActive}
              className={`
                group grid grid-cols-1 justify-items-center p-2 lg:p-3
                transition duration-300
                cursor-pointer
              `}
            >
              <div className="relative h-10 w-10 lg:h-22 lg:w-22">
                <img
                  src={btn.img}
                  alt={btn.id}
                  className={`
                    absolute inset-0 h-full w-full object-contain
                    transition-opacity duration-300 ease-in-out
                    ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}
                  `}
                />

                <img
                  src={btn.colorImg}
                  alt=""
                  aria-hidden="true"
                  className={`
                    absolute inset-0 h-full w-full object-contain
                    transition-opacity duration-300 ease-in-out
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `}
                />
              </div>

              <span className="text-sm font-semibold capitalize mt-2">
                {btn.id}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CocktailButtonGroup