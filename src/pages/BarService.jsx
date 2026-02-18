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
import daiquiriCart from '../assets/images/drinks/daiquiri-sm.jpg'
import manhattanCart from '../assets/images/drinks/manhattan-sm.jpg'
import margaritaCart from '../assets/images/drinks/margarita-sm.jpg'
import martiniCart from '../assets/images/drinks/martini-sm.jpg'
import negroniCart from '../assets/images/drinks/negroni-sm.jpg'
import jungleCart from '../assets/images/drinks/jungle-sm.jpg'
import zombieCart from '../assets/images/drinks/zombie-sm.jpg'
import maitaiCart from '../assets/images/drinks/maitai-sm.jpg'

const BarService = () => {
  const [filter, setFilter] = useState("all");
  const [counts, setCounts] = useState({});

  const { addItem } = useCart();

  const keyFor = useCallback((productKey, orderSize) => {
    return `${productKey}|${orderSize}`;
  }, [])

  const getCount = useCallback(
    (productKey, orderSize) => counts[keyFor(productKey, orderSize)] ?? 0,
    [counts, keyFor]
  );

  const increase = useCallback((productKey, orderSize) => {
    const k = keyFor(productKey, orderSize);
    setCounts((prev) => ({...prev, [k]: (prev[k] ?? 0)+1}));
  },[keyFor]);

  const decrease = useCallback((productKey, orderSize) => {
    const k = keyFor(productKey, orderSize);
    setCounts((prev) => {
      const next = Math.max(0, (prev[k] ?? 0)-1);
      return {...prev, [k]: next};
    });  
  }, [keyFor]);

  const PRICE_MAP = {
    "16 oz. Bottle": 35,
    "32 oz. Bottle": 60
  }

  const addToCart = useCallback((product, orderSize) => {
    const qty = getCount(product.key, orderSize);
    if (qty <= 0) return;

    addItem({
      productKey: product.key,
      productName: product.name,
      productImg: product.image,
      cartImg: product.cartImg,
      orderSize,
      orderCost: PRICE_MAP[orderSize],
      quantity: qty,
    });

    // reset that specific row
    const k = keyFor(product.key, orderSize);
    setCounts((prev) => ({ ...prev, [k]: 0 }));
  }, [addItem, getCount, keyFor]);

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
              {
                orderSize: "16 oz. Bottle",
                counter: getCount(daiquiri.key, "16 oz. Bottle"),
                onDecrease: () => decrease(daiquiri.key, "16 oz. Bottle"),
                onIncrease: () => increase(daiquiri.key, "16 oz. Bottle"),
                onAdd: () => addToCart(daiquiri, "16 oz. Bottle")
              },
              {
                orderSize: "32 oz. Bottle",
                counter: getCount(daiquiri.key, "32 oz. Bottle"),
                onDecrease: () => decrease(daiquiri.key, "32 oz. Bottle"),
                onIncrease: () => increase(daiquiri.key, "32 oz. Bottle"),
                onAdd: () => addToCart(daiquiri, "32 oz. Bottle")
              },
            ]}
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
              {
                orderSize: "16 oz. Bottle",
                counter: getCount(manhattan.key, "16 oz. Bottle"),
                onDecrease: () => decrease(manhattan.key, "16 oz. Bottle"),
                onIncrease: () => increase(manhattan.key, "16 oz. Bottle"),
                onAdd: () => addToCart(manhattan, "16 oz. Bottle")
              },
              {
                orderSize: "32 oz. Bottle",
                counter: getCount(manhattan.key, "32 oz. Bottle"),
                onDecrease: () => decrease(manhattan.key, "32 oz. Bottle"),
                onIncrease: () => increase(manhattan.key, "32 oz. Bottle"),
                onAdd: () => addToCart(manhattan, "32 oz. Bottle")
              },
            ]}
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
              {
                orderSize: "16 oz. Bottle",
                counter: getCount(margarita.key, "16 oz. Bottle"),
                onDecrease: () => decrease(margarita.key, "16 oz. Bottle"),
                onIncrease: () => increase(margarita.key, "16 oz. Bottle"),
                onAdd: () => addToCart(margarita, "16 oz. Bottle", "16 oz. Bottle")
              },
              {
                orderSize: "32 oz. Bottle",
                counter: getCount(margarita.key, "32 oz. Bottle"),
                onDecrease: () => decrease(margarita.key, "32 oz. Bottle"),
                onIncrease: () => increase(margarita.key, "32 oz. Bottle"),
                onAdd: () => addToCart(margarita, "32 oz. Bottle")
              },
            ]}
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
              {
                orderSize: "16 oz. Bottle",
                counter: getCount(martini.key, "16 oz. Bottle"),
                onDecrease: () => decrease(martini.key, "16 oz. Bottle"),
                onIncrease: () => increase(martini.key, "16 oz. Bottle"),
                onAdd: () => addToCart(martini, "16 oz. Bottle", "16 oz. Bottle")
              },
              {
                orderSize: "32 oz. Bottle",
                counter: getCount(martini.key, "32 oz. Bottle"),
                onDecrease: () => decrease(martini.key, "32 oz. Bottle"),
                onIncrease: () => increase(martini.key, "32 oz. Bottle"),
                onAdd: () => addToCart(martini, "32 oz. Bottle")
              },
            ]}
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
              {
                orderSize: "16 oz. Bottle",
                counter: getCount(negroni.key, "16 oz. Bottle"),
                onDecrease: () => decrease(negroni.key, "16 oz. Bottle"),
                onIncrease: () => increase(negroni.key, "16 oz. Bottle"),
                onAdd: () => addToCart(negroni, "16 oz. Bottle")
              },
              {
                orderSize: "32 oz. Bottle",
                counter: getCount(negroni.key, "32 oz. Bottle"),
                onDecrease: () => decrease(negroni.key, "32 oz. Bottle"),
                onIncrease: () => increase(negroni.key, "32 oz. Bottle"),
                onAdd: () => addToCart(negroni, "32 oz. Bottle")
              },
            ]}
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
              {
                orderSize: "16 oz. Bottle",
                counter: getCount(maitai.key, "16 oz. Bottle"),
                onDecrease: () => decrease(maitai.key, "16 oz. Bottle"),
                onIncrease: () => increase(maitai.key, "16 oz. Bottle"),
                onAdd: () => addToCart(maitai, "16 oz. Bottle")
              },
              {
                orderSize: "32 oz. Bottle",
                counter: getCount(maitai.key, "32 oz. Bottle"),
                onDecrease: () => decrease(maitai.key, "32 oz. Bottle"),
                onIncrease: () => increase(maitai.key, "32 oz. Bottle"),
                onAdd: () => addToCart(maitai, "32 oz. Bottle")
              },
            ]}
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
              {
                orderSize: "16 oz. Bottle",
                counter: getCount(jungle.key, "16 oz. Bottle"),
                onDecrease: () => decrease(jungle.key, "16 oz. Bottle"),
                onIncrease: () => increase(jungle.key, "16 oz. Bottle"),
                onAdd: () => addToCart(jungle, "16 oz. Bottle")
              },
              {
                orderSize: "32 oz. Bottle",
                counter: getCount(jungle.key, "32 oz. Bottle"),
                onDecrease: () => decrease(jungle.key, "32 oz. Bottle"),
                onIncrease: () => increase(jungle.key, "32 oz. Bottle"),
                onAdd: () => addToCart(jungle, "32 oz. Bottle")
              },
            ]}
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
              {
                orderSize: "16 oz. Bottle",
                counter: getCount(nakedApe.key, "16 oz. Bottle"),
                onDecrease: () => decrease(nakedApe.key, "16 oz. Bottle"),
                onIncrease: () => increase(nakedApe.key, "16 oz. Bottle"),
                onAdd: () => addToCart(nakedApe, "16 oz. Bottle")
              },
              {
                orderSize: "32 oz. Bottle",
                counter: getCount(nakedApe.key, "32 oz. Bottle"),
                onDecrease: () => decrease(nakedApe.key, "32 oz. Bottle"),
                onIncrease: () => increase(nakedApe.key, "32 oz. Bottle"),
                onAdd: () => addToCart(nakedApe, "32 oz. Bottle")
              },
            ]}
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
              {
                orderSize: "16 oz. Bottle",
                counter: getCount(zombie.key, "16 oz. Bottle"),
                onDecrease: () => decrease(zombie.key, "16 oz. Bottle"),
                onIncrease: () => increase(zombie.key, "16 oz. Bottle"),
                onAdd: () => addToCart(zombie, "16 oz. Bottle")
              },
              {
                orderSize: "32 oz. Bottle",
                counter: getCount(zombie.key, "32 oz. Bottle"),
                onDecrease: () => decrease(zombie.key, "32 oz. Bottle"),
                onIncrease: () => increase(zombie.key, "32 oz. Bottle"),
                onAdd: () => addToCart(zombie, "32 oz. Bottle")
              },
            ]}
          />
        ),
      }
    ];
  }, [addToCart, getCount, decrease, increase]);

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