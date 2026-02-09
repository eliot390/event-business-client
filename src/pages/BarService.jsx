import { useMemo, useState } from 'react'
import CocktailProductCard from '../components/CocktailProductCard'
import CocktailButtonGroup from '../components/CocktailButtonGroup'
import ProductCard from '../components/ProductCard'
import daiquiri from '../assets/images/drinks/daiquiri.jpg'
import manhattan from '../assets/images/drinks/manhattan.jpg'
import margarita from '../assets/images/drinks/margarita.jpg'
import martini2 from '../assets/images/drinks/martini.jpg'
import negroni from '../assets/images/drinks/negroni.jpg'
import limes from '../assets/images/fresh-limes.png'
import jungle from '../assets/images/drinks/jungle.jpg'
import zombie from '../assets/images/drinks/zombie.jpg'
import maitai from '../assets/images/drinks/maitai.jpg'

const BarService = () => {
  const [filter, setFilter] = useState("all");

  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter+1)
  }

  const decrease = () => {
    if (counter>0){
      setCounter(counter-1)
    }    
  }

  const products = useMemo(
    () => [
      {
        style:"classic",
        name:"Daiquiri",
        image:daiquiri,
        details: (
          <CocktailProductCard
            cocktailImage={limes}
            name="Daiquiri"
            ingredients="Rum, Lime Juice, Simple Syrup"
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {
                bottleSize: "16 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                bottleSize: "32 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
            ]}
          />
        )
      },
      {
        style:"classic",
        name:"Manhattan",
        image:manhattan,
        details: (
          <CocktailProductCard
            cocktailImage={limes}
            name="Manhattan"
            ingredients="Bourbon, Sweet Vermouth, Bitters"
            description="The Manhattan is complex, challenging and moreish. Best of all, it's available in a style to suit every palate"
            rows={[
              {
                bottleSize: "16 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                bottleSize: "32 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
            ]}
          />
        )
      },
      {
        style:"classic",
        name:"Margarita",
        image:margarita,
        details: (
          <CocktailProductCard
            cocktailImage={limes}
            name="Margarita"
            ingredients="Tequila, Triple Sec, Agave, Lime"
            description="Tequila-forward, with tangy citrus, a hint of balancing sweetness and a faint salty undertone."
            rows={[
              {
                bottleSize: "16 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                bottleSize: "32 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
            ]}
          />
        )
      },
      {
        style:"classic",
        name:"Martini",
        image:martini2,
        details: (
          <CocktailProductCard
            cocktailImage={limes}
            name="Margarita"
            ingredients="Tequila, Triple Sec, Agave, Lime"
            description="Tequila-forward, with tangy citrus, a hint of balancing sweetness and a faint salty undertone."
            rows={[
              {
                bottleSize: "16 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                bottleSize: "32 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
            ]}
          />
        )
      },
      {
        style:"classic",
        name:"Negroni",
        image:negroni,
        details: (
          <CocktailProductCard
            cocktailImage={limes}
            name="Manhattan"
            ingredients="Bourbon, Sweet Vermouth, Bitters"
            description="The Manhattan is complex, challenging and moreish. Best of all, it's available in a style to suit every palate"
            rows={[
              {
                bottleSize: "16 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                bottleSize: "32 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
            ]}
          />
        )
      },
      {
        style:"tiki",
        name:"Mai Tai",
        image:maitai,
        details: (
          <CocktailProductCard
            cocktailImage={limes}
            name="Mai Tai"
            ingredients="Aged Rum, Orange Curaçao, Lime Juice, Orgeat"
            description="The undisputed king of Tiki cocktails and one of the most enduring of all vintage cocktails"
            rows={[
              {
                bottleSize: "16 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                bottleSize: "32 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
            ]}
          />
        )  
      },
      {
        style:"tiki",
        name:"Jungle Bird",
        image:jungle,
        details: (
          <CocktailProductCard
            cocktailImage={limes}
            name="Jungle Bird"
            ingredients="Dark Rum, Campari, Pineapple Juice, Lime Juice"
            description="Bittersweet and fruity with pungent rum notes, sipped through crushed ice. Properly Tiki-tastic."
            rows={[
              {
                bottleSize: "16 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                bottleSize: "32 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
            ]}
          />
        )  
      },
      {
        style:"tiki",
        name:"Naked Ape",
        image:jungle,
        details: (
          <CocktailProductCard
            cocktailImage={limes}
            name="Naked Ape"
            ingredients="Overproof Rum, Dark Rum, Banana Liqueur, Cinnamon, Bitters"
            description="The undisputed king of Tiki cocktails and one of the most enduring of all vintage cocktails"
            rows={[
              {
                bottleSize: "16 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                bottleSize: "32 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
            ]}
          />
        )  
      },
      {
        style:"tiki",
        name:"Zombie",
        image:zombie,
        details: (
          <CocktailProductCard
            cocktailImage={limes}
            name="Zombie"
            ingredients={"Aged Rum, Overproof Rum, Falernum, Grenadine, \"Don's Mix\", Absinthe"}
            description="The undisputed king of Tiki cocktails and one of the most enduring of all vintage cocktails"
            rows={[
              {
                bottleSize: "16 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                bottleSize: "32 oz. Bottle",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
            ]}
          />
        )  
      },
    ],
    [counter, decrease, increase]
  )

  const visibleProducts = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.style === filter);
  }, [filter, products]);

  return (
    <div>     
      <div className="flex flex-col justify-center max-w-[85rem] px-4 py-14 lg:px-8 lg:py-14 mx-auto">
        <p className='mt-2 mx-auto max-w-lg h-24 text-center'>Toasted offers handcrafted, pre-batched cocktails in 33 oz (11 servings) 
          and 16 oz (5 servings) bottles. Easy to serve, perfect for events, and great as gifts. Custom cocktail
           options are available upon request.</p>
        <CocktailButtonGroup active={filter} onChange={setFilter}/>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-6 mb-5 mt-5">
          {visibleProducts.map((p) => (
            <ProductCard
              key={`${p.style}-${p.name}`}
              style={p.style}
              name={p.name}
              image={p.image}
              details={p.details}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarService