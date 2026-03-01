
import { useCallback, useMemo, useState } from 'react';
import DessertDetailsCard from '../components/DessertDetailsCard';
import DessertButtonGroup from '../components/DessertButtonGroup';
import DessertProductCard from '../components/DessertProductCard';
import chocochip from '../assets/images/desserts/choco-chip.jpg'
import doublechocolate from '../assets/images/desserts/choco-choco-chip.jpg'
import bananaSplitCookie from '../assets/images/desserts/bananaSplit.jpg'
import cornCookie from '../assets/images/desserts/cornCookie.jpg'
import pie from '../assets/images/desserts/atlantic.png'
import leches from '../assets/images/desserts/leches.png'
import chocolateLeches from '../assets/images/desserts/choco-leches.jpg'
import chocochipcart from '../assets/images/desserts/choco-chip-sm.jpg'
import doublechocolatecart from '../assets/images/desserts/choco-choco-chip-sm.jpg'
import bananaSplitCookiecart from '../assets/images/desserts/bananaSplit-sm.jpg'
import cornCookiecart from '../assets/images/desserts/cornCookie-sm.jpg'
import piecart from '../assets/images/desserts/atlantic-sm.png'
import lechescart from '../assets/images/desserts/leches-sm.png'
import chocolateLechescart from '../assets/images/desserts/choco-leches-sm.jpg'
import { useCart } from '../context/CartContext';

const DessertService = () => {
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
  },[keyFor]);

  const PRICE_MAP = {
    "6 Pack": 15,
    "12 Pack": 25,
    "9\" Pie": 23,
    "9\" x 9\" Cake": 25
  }

  const addToCart = useCallback((product, orderSize) => {
    const qty = getCount(product.key, orderSize);
    const orderCost = PRICE_MAP[orderSize]
    if (qty <= 0) return;

    addItem({
      productKey: product.key,
      productName: product.name,
      productImg: product.image,
      cartImg: product.cartImg,
      orderSize,
      orderCost,
      quantity: qty,
    });

    
    console.log(orderCost)

    // reset that specific row
    const k = keyFor(product.key, orderSize);
    setCounts((prev) => ({ ...prev, [k]: 0 }));
  }, [addItem, getCount, keyFor]);


  {/* Product Card Items */}
  const products = useMemo(() => {
    const chocolateChip = {
      key: "chocolateChip",
      type: "cookies",
      name: "Classic Chocolate Chip",
      description: "Perfectly crispy on the outside and satisfyingly thick and gooey in the center.",
      image: chocochip,
      cartImg: chocochipcart,
      newStatus: false
    };

    const doubleChocoChip = {
      key: "doubleChocoChip",
      type: "cookies",
      name: "Double Chocolate Chocolate Chip",
      description: "The ultimate chocolate cookie: dense, chewy and dangerously rich.",
      image: doublechocolate,
      cartImg: doublechocolatecart,
      newStatus: false
    };

    const walnutChocoChip = {
      key: "walnutChocoChip",
      type: "cookies",
      name: "Walnut Chocolate Chip",
      description: "Crispy on the outside with a satisfyingly thick and gooey center, packed with semi-sweet chocolate chips and chunks of walnuts.",
      image: chocochip,
      cartImg: chocochipcart,
      newStaus: false
    };

    const corn = {
      key: "cornCookie",
      type: "cookies",
      name: "Sweet Corn Sugar Cookie",
      image: cornCookie,
      cartImg: cornCookiecart,
      newStatus: false
    };

    const bananaSplit = {
      key: "bananaCookie",
      type: "cookies",
      name: "Banana Split Cookie",
      description:"Thick, indulgent cookies made with banana, creamy butterscotch, rich chocolate, walnuts, and fresh strawberries.",
      image: bananaSplitCookie,
      cartImg: bananaSplitCookiecart,
      newStatus: true
    };

    const atlantic = {
      key: "atlanticPie",
      type: "pies",
      name: "Atlantic Beach Pie",
      description:"A sweet-salty twist on a classic North Carolina lemon pie, made with a saltine cracker crust and a tart lemon-lime filling.",
      image: pie,
      cartImg: piecart,
      newStatus: true
    };

    const fruityLeches = {
      key: "fruityLeches",
      type: "tres leches",
      name: "Fruity Pebbles Tres Leches",
      image: leches,
      cartImg: lechescart,
      newStatus: true
    };

    const chocoLeches = {
      key: "chocoLeches",
      type: "tres leches",
      name: "Chocolate Hazelnut Tres Leches",
      image: chocolateLeches,
      cartImg: chocolateLechescart,
      newStatus: true
    };

    {/* Detail Card Info */}
    return [
      {
        ...chocolateChip,
        details: (
          <DessertDetailsCard
            dessertImage={chocochip}
            name="Classic Chocolate Chip"            
            rows={[
              {
                orderSize: "6 Pack",
                counter: getCount(chocolateChip.key, "6 Pack"),
                onDecrease: () => decrease(chocolateChip.key, "6 Pack"),
                onIncrease: () => increase(chocolateChip.key, "6 Pack"),
                onAdd: () => addToCart(chocolateChip, "6 Pack")
              },
              {
                orderSize: "12 Pack",
                counter: getCount(chocolateChip.key, "12 Pack"),
                onDecrease: () => decrease(chocolateChip.key, "12 Pack"),
                onIncrease: () => increase(chocolateChip.key, "12 Pack"),
                onAdd: () => addToCart(chocolateChip, "12 Pack")
              },
            ]}
          />
        ),
      },
      {
        ...doubleChocoChip,
        details: (
          <DessertDetailsCard
            dessertImage={doublechocolate}
            name="Double Chocolate Chocolate Chip Cookie"
            rows={[
              {
                orderSize: "6 Pack",
                counter: getCount(doubleChocoChip.key, "6 Pack"),
                onDecrease: () => decrease(doubleChocoChip.key, "6 Pack"),
                onIncrease: () => increase(doubleChocoChip.key, "6 Pack"),
                onAdd: () => addToCart(doubleChocoChip, "6 Pack")
              },
              {
                orderSize: "12 Pack",
                counter: getCount(doubleChocoChip.key, "12 Pack"),
                onDecrease: () => decrease(doubleChocoChip.key, "12 Pack"),
                onIncrease: () => increase(doubleChocoChip.key, "12 Pack"),
                onAdd: () => addToCart(doubleChocoChip, "12 Pack")
              },
            ]}
          />
        ),
      },
      {
        ...walnutChocoChip,
        details: (
          <DessertDetailsCard
            dessertImage={chocochip}
            name="Walnut Chocolate Chip Cookie"
            rows={[
              {
                orderSize: "6 Pack",
                counter: getCount(walnutChocoChip.key, "6 Pack"),
                onDecrease: () => decrease(walnutChocoChip.key, "6 Pack"),
                onIncrease: () => increase(walnutChocoChip.key, "6 Pack"),
                onAdd: () => addToCart(walnutChocoChip, "6 Pack")
              },
              {
                orderSize: "12 Pack",
                counter: getCount(walnutChocoChip.key, "12 Pack"),
                onDecrease: () => decrease(walnutChocoChip.key, "12 Pack"),
                onIncrease: () => increase(walnutChocoChip.key, "12 Pack"),
                onAdd: () => addToCart(walnutChocoChip, "12 Pack")
              },
            ]}
          />
        ),
      },
      {
        ...corn,
        details: (
          <DessertDetailsCard
            dessertImage={cornCookie}
            name="Sweet Corn Sugar Cookie"
            rows={[
              {
                orderSize: "6 Pack",
                counter: getCount(corn.key, "6 Pack"),
                onDecrease: () => decrease(corn.key, "6 Pack"),
                onIncrease: () => increase(corn.key, "6 Pack"),
                onAdd: () => addToCart(corn, "6 Pack")
              },
              {
                orderSize: "12 Pack",
                counter: getCount(corn.key, "12 Pack"),
                onDecrease: () => decrease(corn.key, "12 Pack"),
                onIncrease: () => increase(corn.key, "12 Pack"),
                onAdd: () => addToCart(corn, "12 Pack")
              },
            ]}
          />
        ),
      },
      {
        ...bananaSplit,
        details: (
          <DessertDetailsCard
            dessertImage={bananaSplitCookie}
            name="Banana Split Cookie"
            rows={[
              {
                orderSize: "6 Pack",
                counter: getCount(bananaSplit.key, "6 Pack"),
                onDecrease: () => decrease(bananaSplit.key, "6 Pack"),
                onIncrease: () => increase(bananaSplit.key, "6 Pack"),
                onAdd: () => addToCart(bananaSplit, "6 Pack")
              },
              {
                orderSize: "12 Pack",
                counter: getCount(bananaSplit.key, "12 Pack"),
                onDecrease: () => decrease(bananaSplit.key, "12 Pack"),
                onIncrease: () => increase(bananaSplit.key, "12 Pack"),
                onAdd: () => addToCart(bananaSplit, "12 Pack")
              },
            ]}
          />
        ),
      },
      {
        ...atlantic,
        details: (
          <DessertDetailsCard
            dessertImage={pie}
            name="Atlantic Beach Pie"
            rows={[
              {
                orderSize: "9\" Pie",
                counter: getCount(atlantic.key, "9\" Pie"),
                onDecrease: () => decrease(atlantic.key, "9\" Pie"),
                onIncrease: () => increase(atlantic.key, "9\" Pie"),
                onAdd: () => addToCart(atlantic, "9\" Pie")
              }
            ]}
          />
        ),
      },
      {
        ...fruityLeches,
        details: (
          <DessertDetailsCard
            dessertImage={leches}
            name="Fruity Pebbles Tres Leches"
            rows={[
              {
                orderSize: "9\" x 9\" Cake",
                counter: getCount(fruityLeches.key, "9\" x 9\" Cake"),
                onDecrease: () => decrease(fruityLeches.key, "9\" x 9\" Cake"),
                onIncrease: () => increase(fruityLeches.key, "9\" x 9\" Cake"),
                onAdd: () => addToCart(fruityLeches, "9\" x 9\" Cake")
              }
            ]}
          />
        ),
      },
      {
        ...chocoLeches,
        details: (
          <DessertDetailsCard
            dessertImage={chocolateLeches}
            name="Chocolate Hazelnut Tres Leches"
            rows={[
              {
                orderSize: "9\" x 9\" Cake",
                counter: getCount(chocoLeches.key, "9\" x 9\" Cake"),
                onDecrease: () => decrease(chocoLeches.key, "9\" x 9\" Cake"),
                onIncrease: () => increase(chocoLeches.key, "9\" x 9\" Cake"),
                onAdd: () => addToCart(chocoLeches, "9\" x 9\" Cake")
              }
            ]}
          />
        ),
      }
    ];
  }, [addToCart, getCount, decrease, increase]);
  

  const visibleProducts = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.type === filter);
  }, [filter, products]);


  return (
    <div>     
      <div className="flex flex-col justify-center max-w-[85rem] px-4 py-14 lg:px-8 lg:py-14 mx-auto">
        <p className='mt-18 lg:mt-2 mx-auto max-w-lg h-24 text-center'>Toasted offers homemade desserts perfect for any occasion.</p>
        <DessertButtonGroup active={filter} onChange={setFilter}/>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-6 mb-5 mt-5">
          {visibleProducts.map((p) => (
            <DessertProductCard
              key={`${p.type}-${p.name}`}
              type={p.type}
              name={p.name}
              description={p.description}
              image={p.image}
              newStatus={p.newStatus}
              details={p.details}
            />
          ))}
        </div>
      </div>
    </div>
  )
};

export default DessertService