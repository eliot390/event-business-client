import { useCallback, useMemo, useState } from 'react'
import { useCart } from '../context/CartContext'
import CocktailDetailsCard from '../components/CocktailDetailsCard'
import CocktailButtonGroup from '../components/CocktailButtonGroup'
import CocktailProductCard from '../components/CocktailProductCard'
import limes from '../assets/images/fresh-limes.png'
import daiquiriPic from '../assets/images/drinks/daiquiri.jpg'
import manhattanPic from '../assets/images/drinks/manhattan.jpg'
import margaritaPic from '../assets/images/drinks/margarita.jpg'
import martiniPic from '../assets/images/drinks/martini.jpg'
import negroniPic from '../assets/images/drinks/negroni.jpg'
import junglePic from '../assets/images/drinks/jungle.jpg'
import zombiePic from '../assets/images/drinks/zombie.jpg'
import maitaiPic from '../assets/images/drinks/maitai.jpg'
import peeweePic from '../assets/images/drinks/peewee.jpg'
import tropicPic from '../assets/images/drinks/tropic.jpg'
import daiquiriCart from '../assets/images/drinks/daiquiri-sm.jpg'
import manhattanCart from '../assets/images/drinks/manhattan-sm.jpg'
import margaritaCart from '../assets/images/drinks/margarita-sm.jpg'
import martiniCart from '../assets/images/drinks/martini-sm.jpg'
import negroniCart from '../assets/images/drinks/negroni-sm.jpg'
import jungleCart from '../assets/images/drinks/jungle-sm.jpg'
import zombieCart from '../assets/images/drinks/zombie-sm.jpg'
import maitaiCart from '../assets/images/drinks/maitai-sm.jpg'
import peeweeCart from '../assets/images/drinks/peewee-sm.jpg'
import tropicCart from '../assets/images/drinks/tropic-sm.jpg'

const BarService = () => {
  const [filter, setFilter] = useState("all");
  const { addItem } = useCart();

  const addToCart = useCallback((product, selectedRow) => {
    if (!selectedRow) return;
    addItem({
      productKey: product.key,
      productName: product.name,
      productImg: product.image,
      cartImg: product.cartImg,
      orderSize: selectedRow.orderSize,
      orderCost: Number(selectedRow.orderCost),
      quantity: 1,
    });    
  }, [addItem]);

  {/* Product Card Items */}
  const products = useMemo(() => {
    const daiquiri = {
      key: "daiquiri",
      style:"classic",
      name:"Daiquiri",
      cartImg:daiquiriCart,
      image:daiquiriPic
    };

    const manhattan = {
      key: "manhattan",
      style:"classic",
      name:"Manhattan",
      image:manhattanPic,
      cartImg:manhattanCart
    };

    const margarita = {
      key: "margarita",
      style:"classic",
      name:"Margarita",
      image:margaritaPic,
      cartImg:margaritaCart
    };

    const martini = {
      key: "martini",
      style:"classic",
      name:"Martini",
      image:martiniPic,
      cartImg:martiniCart
    };

    const negroni = {
      key: "negroni",
      style:"classic",
      name:"Negroni",
      image:negroniPic,
      cartImg:negroniCart
    };

    const maitai = {
      key: "maitai",
      style:"tiki",
      name:"Mai Tai",
      image:maitaiPic,
      cartImg:maitaiCart
    };

    const jungle = {
      key: "jungleBird",
      style:"tiki",
      name:"Jungle Bird",
      image:junglePic,
      cartImg:jungleCart
    };

    const nakedApe = {
      key: "nakedApe",
      style:"tiki",
      name:"Naked Ape",
      image:junglePic,
      cartImg:jungleCart
    };

    const zombie = {
      key: "zombie",
      style:"tiki",
      name:"Zombie",
      image:zombiePic,
      cartImg:zombieCart
    };

    const peewee = {
      key: "peewee",
      style:"party",
      name:"Pee-Wee's Big Adventure",
      image:peeweePic,
      cartImg:peeweeCart
    }

    const tropic = {
      key: "tropic",
      style:"party",
      name:"Tropic Thunder",
      image:tropicPic,
      cartImg:tropicCart
    }

    {/* Detail Card Info */}
    return [
      {
        ...daiquiri,
        details: (
          <CocktailDetailsCard
            cocktailImage={limes}
            name="Daiquiri"
            ingredients="Rum, Lime Juice, Simple Syrup"
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {orderSize: "16 oz. Bottle", orderCost: "35"},
              {orderSize: "32 oz. Bottle", orderCost: "60"}                
            ]}
            onAdd={(selectedRow) => addToCart(daiquiri, selectedRow)}
          />
        )
      },
      {
        ...manhattan,
        details: (
          <CocktailDetailsCard
            cocktailImage={limes}
            name="Manhattan"
            ingredients="Bourbon, Sweet Vermouth, Bitters"
            description="The Manhattan is complex, challenging and moreish. Best of all, it's available in a style to suit every palate"
            rows={[
              {orderSize: "16 oz. Bottle", orderCost: "35"},
              {orderSize: "32 oz. Bottle", orderCost: "60"}                
            ]}
            onAdd={(selectedRow) => addToCart(manhattan, selectedRow)}
          />
        )
      },
      {
        ...margarita,
        details: (
          <CocktailDetailsCard
            cocktailImage={limes}
            name="Margarita"
            ingredients="Tequila, Triple Sec, Agave, Lime"
            description="Tequila-forward, with tangy citrus, a hint of balancing sweetness and a faint salty undertone."
            rows={[
              {orderSize: "16 oz. Bottle", orderCost: "35"},
              {orderSize: "32 oz. Bottle", orderCost: "60"}                
            ]}
            onAdd={(selectedRow) => addToCart(margarita, selectedRow)}
          />
        )
      },
      {
        ...martini,
        details: (
          <CocktailDetailsCard
            cocktailImage={limes}
            name="Martini"
            ingredients="Tequila, Triple Sec, Agave, Lime"
            description="Tequila-forward, with tangy citrus, a hint of balancing sweetness and a faint salty undertone."
            rows={[
              {orderSize: "16 oz. Bottle", orderCost: "35"},
              {orderSize: "32 oz. Bottle", orderCost: "60"}                
            ]}
            onAdd={(selectedRow) => addToCart(martini, selectedRow)}
          />
        )
      },
      {
        ...negroni,
        details: (
          <CocktailDetailsCard
            cocktailImage={limes}
            name="Negroni"
            ingredients="Bourbon, Sweet Vermouth, Bitters"
            description="The Manhattan is complex, challenging and moreish. Best of all, it's available in a style to suit every palate"
            rows={[
              {orderSize: "16 oz. Bottle", orderCost: "35"},
              {orderSize: "32 oz. Bottle", orderCost: "60"}                
            ]}
            onAdd={(selectedRow) => addToCart(negroni, selectedRow)}
          />
        )
      },
      {
        ...maitai,
        details: (
          <CocktailDetailsCard
            cocktailImage={limes}
            name="Mai Tai"
            ingredients="Aged Rum, Orange Curaçao, Lime Juice, Orgeat"
            description="The undisputed king of Tiki cocktails and one of the most enduring of all vintage cocktails"
            rows={[
              {orderSize: "16 oz. Bottle", orderCost: "35"},
              {orderSize: "32 oz. Bottle", orderCost: "60"}                
            ]}
            onAdd={(selectedRow) => addToCart(maitai, selectedRow)}
          />
        )  
      },
      {
        ...jungle,
        details: (
          <CocktailDetailsCard
            cocktailImage={limes}
            name="Jungle Bird"
            ingredients="Dark Rum, Campari, Pineapple Juice, Lime Juice"
            description="Bittersweet and fruity with pungent rum notes, sipped through crushed ice. Properly Tiki-tastic."
            rows={[
              {orderSize: "16 oz. Bottle", orderCost: "35"},
              {orderSize: "32 oz. Bottle", orderCost: "60"}                
            ]}
            onAdd={(selectedRow) => addToCart(jungle, selectedRow)}
          />
        )  
      },
      {
        ...nakedApe,
        details: (
          <CocktailDetailsCard
            cocktailImage={limes}
            name="Naked Ape"
            ingredients="Overproof Rum, Dark Rum, Banana Liqueur, Cinnamon, Bitters"
            description="The undisputed king of Tiki cocktails and one of the most enduring of all vintage cocktails"
            rows={[
              {orderSize: "16 oz. Bottle", orderCost: "35"},
              {orderSize: "32 oz. Bottle", orderCost: "60"}                
            ]}
            onAdd={(selectedRow) => addToCart(nakedApe, selectedRow)}
          />
        )  
      },
      {
        ...zombie,
        details: (
          <CocktailDetailsCard
            cocktailImage={limes}
            name="Zombie"
            ingredients={"Aged Rum, Overproof Rum, Falernum, Grenadine, \"Don's Mix\", Absinthe"}
            description="The undisputed king of Tiki cocktails and one of the most enduring of all vintage cocktails"
            rows={[
              {orderSize: "16 oz. Bottle", orderCost: "35"},
              {orderSize: "32 oz. Bottle", orderCost: "60"}                
            ]}
            onAdd={(selectedRow) => addToCart(zombie, selectedRow)}
          />
        ),
      },
      {
        ...peewee,
        details: (
          <CocktailDetailsCard
            cocktailImage={limes}
            name="Pee-Wee's Big Adventure"
            ingredients={"Habanero Infused Blanco Tequila, Watermelon Juice, Lime"}
            description="Take a trip to the 80's with this slightly spicy, sweet drink"
            rows={[
              {orderSize: "16 oz. Bottle", orderCost: "35"},
              {orderSize: "32 oz. Bottle", orderCost: "60"}                
            ]}
            onAdd={(selectedRow) => addToCart(peewee, selectedRow)}
          />
        ),
      }
      ,
      {
        ...tropic,
        details: (
          <CocktailDetailsCard
            cocktailImage={limes}
            name="Tropic Thunder"
            ingredients={"Cachaça, Triple Sec, Calamansi"}
            description="Joanne's signature drink from our wedding!"
            rows={[
              {orderSize: "16 oz. Bottle", orderCost: "35"},
              {orderSize: "32 oz. Bottle", orderCost: "60"}                
            ]}
            onAdd={(selectedRow) => addToCart(tropic, selectedRow)}
          />
        ),
      }
    ];
  }, [addToCart]);

  const visibleProducts = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.style === filter);
  }, [filter, products]);

  return (
    <div>     
      <div className="flex flex-col justify-center max-w-[85rem] px-4 my-26 lg:px-8 lg:my-38 mx-auto">
        <CocktailButtonGroup active={filter} onChange={setFilter}/>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-4 gap-6 mb-5 mt-5">
          {visibleProducts.map((p) => (
            <CocktailProductCard
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