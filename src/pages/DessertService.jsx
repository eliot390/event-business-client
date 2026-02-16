
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

  const addToCart = useCallback((product, orderSize) => {
    const qty = getCount(product.key, orderSize);
    if (qty <= 0) return;

    addItem({
      productKey: product.key,
      productName: product.name,
      productImg: product.image,
      orderSize,
      quantity: qty,
    });

    // reset that specific row
    const k = keyFor(product.key, orderSize);
    setCounts((prev) => ({ ...prev, [k]: 0 }));
  }, [addItem, getCount, keyFor]);


  {/* Product Card Items */}
  const products = useMemo(() => {
    const chocolateChip = {
      key: "chocolateChip",
      type: "cookies",
      name: "Chocolate Chip",
      image: chocochip,
    };

    const doubleChocoChip = {
      key: "doubleChocoChip",
      type: "cookies",
      name: "Double Chocolate Chocolate Chip",
      image: doublechocolate,
    };

    const walnutChocoChip = {
      key: "doubleChocoChip",
      type: "cookies",
      name: "Walnut Chocolate Chip",
      image: chocochip,
    };

    const corn = {
      key: "cornCookie",
      type: "cookies",
      name: "Sweet Corn Sugar Cookie",
      image: cornCookie,
    };

    const bananaSplit = {
      key: "bananaCookie",
      type: "cookies",
      name: "Banana Split Cookie",
      image: bananaSplitCookie,
    };

    const atlantic = {
      key: "atlanticPie",
      type: "pies",
      name: "Atlantic Beach Pie",
      image: pie,
    };

    const fruityLeches = {
      key: "fruityLeches",
      type: "cakes",
      name: "Fruity Pebbles Tres Leches",
      image: leches,
    };

    const chocoLeches = {
      key: "chocoLeches",
      type: "cakes",
      name: "Chocolate Hazelnut Tres Leches",
      image: chocolateLeches,
    };

    {/* Detail Card Info */}
    return [
      {
        ...chocolateChip,
        details: (
          <DessertDetailsCard
            dessertImage={chocochip}
            name="Chocolate Chip Cookie"
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {
                orderSize: "1/2 Dozen",
                counter: getCount(chocolateChip.key, "1/2 Dozen"),
                onDecrease: () => decrease(chocolateChip.key, "1/2 Dozen"),
                onIncrease: () => increase(chocolateChip.key, "1/2 Dozen"),
                onAdd: () => addToCart(chocolateChip, "1/2 Dozen")
              },
              {
                orderSize: "1 Dozen",
                counter: getCount(chocolateChip.key, "1 Dozen"),
                onDecrease: () => decrease(chocolateChip.key, "1 Dozen"),
                onIncrease: () => increase(chocolateChip.key, "1 Dozen"),
                onAdd: () => addToCart(chocolateChip, "1 Dozen")
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
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {
                orderSize: "1/2 Dozen",
                counter: getCount(doubleChocoChip.key, "1/2 Dozen"),
                onDecrease: () => decrease(doubleChocoChip.key, "1/2 Dozen"),
                onIncrease: () => increase(doubleChocoChip.key, "1/2 Dozen"),
                onAdd: () => addToCart(doubleChocoChip, "1/2 Dozen")
              },
              {
                orderSize: "1 Dozen",
                counter: getCount(doubleChocoChip.key, "1 Dozen"),
                onDecrease: () => decrease(doubleChocoChip.key, "1 Dozen"),
                onIncrease: () => increase(doubleChocoChip.key, "1 Dozen"),
                onAdd: () => addToCart(doubleChocoChip, "1 Dozen")
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
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {
                orderSize: "1/2 Dozen",
                counter: getCount(walnutChocoChip.key, "1/2 Dozen"),
                onDecrease: () => decrease(walnutChocoChip.key, "1/2 Dozen"),
                onIncrease: () => increase(walnutChocoChip.key, "1/2 Dozen"),
                onAdd: () => addToCart(walnutChocoChip, "1/2 Dozen")
              },
              {
                orderSize: "1 Dozen",
                counter: getCount(walnutChocoChip.key, "1 Dozen"),
                onDecrease: () => decrease(walnutChocoChip.key, "1 Dozen"),
                onIncrease: () => increase(walnutChocoChip.key, "1 Dozen"),
                onAdd: () => addToCart(walnutChocoChip, "1 Dozen")
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
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {
                orderSize: "1/2 Dozen",
                counter: getCount(corn.key, "1/2 Dozen"),
                onDecrease: () => decrease(corn.key, "1/2 Dozen"),
                onIncrease: () => increase(corn.key, "1/2 Dozen"),
                onAdd: () => addToCart(corn, "1/2 Dozen")
              },
              {
                orderSize: "1 Dozen",
                counter: getCount(corn.key, "1 Dozen"),
                onDecrease: () => decrease(corn.key, "1 Dozen"),
                onIncrease: () => increase(corn.key, "1 Dozen"),
                onAdd: () => addToCart(corn, "1 Dozen")
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
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {
                orderSize: "1/2 Dozen",
                counter: getCount(bananaSplit.key, "1/2 Dozen"),
                onDecrease: () => decrease(bananaSplit.key, "1/2 Dozen"),
                onIncrease: () => increase(bananaSplit.key, "1/2 Dozen"),
                onAdd: () => addToCart(bananaSplit, "1/2 Dozen")
              },
              {
                orderSize: "1 Dozen",
                counter: getCount(bananaSplit.key, "1 Dozen"),
                onDecrease: () => decrease(bananaSplit.key, "1 Dozen"),
                onIncrease: () => increase(bananaSplit.key, "1 Dozen"),
                onAdd: () => addToCart(bananaSplit, "1 Dozen")
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
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
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
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
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
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
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
        <p className='mt-2 mx-auto max-w-lg h-24 text-center'>Toasted offers homemade desserts perfect for any occasion.</p>
        <DessertButtonGroup active={filter} onChange={setFilter}/>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-6 mb-5 mt-5">
          {visibleProducts.map((p) => (
            <DessertProductCard
              key={`${p.type}-${p.name}`}
              type={p.type}
              name={p.name}
              image={p.image}
              details={p.details}
            />
          ))}
        </div>
      </div>
    </div>
  )
};

export default DessertService