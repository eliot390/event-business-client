
import { useCallback, useMemo, useState } from 'react';
import DessertDetailsCard from '../components/DessertDetailsCard';
import DessertButtonGroup from '../components/DessertButtonGroup';
import DessertProductCard from '../components/DessertProductCard';
import chocochip from '../assets/images/desserts/choco-chip.jpg'
import doublechocolate from '../assets/images/desserts/choco-choco-chip.jpg'
import bananaSplitCookie from '../assets/images/desserts/bananaSplit.jpg'
import cornCookie from '../assets/images/desserts/cornCookie.jpg'
import carrotCakeCookie from '../assets/images/desserts/carrot-cake-cookie.jpg'
import carrotSandwichCookie from '../assets/images/desserts/carrot-cake-sandwich.jpg'
import pie from '../assets/images/desserts/atlantic.png'
import leches from '../assets/images/desserts/leches.png'
import chocolateLeches from '../assets/images/desserts/choco-leches.jpg'
import chocochipcart from '../assets/images/desserts/choco-chip-sm.jpg'
import doublechocolatecart from '../assets/images/desserts/choco-choco-chip-sm.jpg'
import bananaSplitCookiecart from '../assets/images/desserts/bananaSplit-sm.jpg'
import carrotCakeCart from '../assets/images/desserts/carrot-cake-cookie-sm.jpg'
import carrotSandwichCart from '../assets/images/desserts/carrot-cake-sandwich-sm.jpg'
import cornCookiecart from '../assets/images/desserts/cornCookie-sm.jpg'
import piecart from '../assets/images/desserts/atlantic-sm.png'
import lechescart from '../assets/images/desserts/leches-sm.png'
import chocolateLechescart from '../assets/images/desserts/choco-leches-sm.jpg'
import { useCart } from '../context/CartContext';

const DessertService = () => {
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
    const chocolateChip = {
      key: "chocolateChip",
      type: "cookies",
      name: "Classic Chocolate Chip",
      image: chocochip,
      cartImg: chocochipcart,
      newStatus: false
    };

    const doubleChocoChip = {
      key: "doubleChocoChip",
      type: "cookies",
      name: "Double Chocolate Chocolate Chip",
      image: doublechocolate,
      cartImg: doublechocolatecart,
      newStatus: false
    };

    const walnutChocoChip = {
      key: "walnutChocoChip",
      type: "cookies",
      name: "Walnut Chocolate Chip",
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
      image: bananaSplitCookie,
      cartImg: bananaSplitCookiecart,
      newStatus: true
    };

    const carrotCake = {
      key: "carrotCake",
      type: "cookies",
      name: "Carrot Cake Cookies",
      image: carrotCakeCookie,
      cartImg: carrotCakeCart,
      newStatus: false,
      holidayStatus: true
    };

    const carrotSandwich = {
      key: "carrotSandwich",
      type: "cookies",
      name: "Carrot Cake Sandwich Cookies",
      image: carrotSandwichCookie,
      cartImg: carrotSandwichCart,
      newStatus: false,
      holidayStatus: true
    };

    const atlantic = {
      key: "atlanticPie",
      type: "pies",
      name: "Atlantic Beach Pie",
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
            description="Perfectly crispy on the outside and satisfyingly thick and gooey in the center."
            rows={[
              {orderSize: "6 Pack", orderCost: "15"},
              {orderSize: "12 Pack", orderCost: "25"},
              {orderSize: "24 Pack", orderCost: "45"}
            ]}
            onAdd={(selectedRow) => addToCart(chocolateChip, selectedRow)}
          />
        ),
      },
      {
        ...doubleChocoChip,
        details: (
          <DessertDetailsCard
            dessertImage={doublechocolate}
            name="Double Chocolate Chocolate Chip Cookie"
            description="The ultimate chocolate cookie: dense, chewy and dangerously rich."
            rows={[
              {orderSize: "6 Pack", orderCost: "15"},
              {orderSize: "12 Pack", orderCost: "25"},
              {orderSize: "24 Pack", orderCost: "45"}
            ]}
            onAdd={(selectedRow) => addToCart(doubleChocoChip, selectedRow)}
          />
        ),
      },
      {
        ...walnutChocoChip,
        details: (
          <DessertDetailsCard
            dessertImage={chocochip}
            name="Walnut Chocolate Chip Cookie"
            description="Crispy on the outside with a satisfyingly thick and gooey center, packed with semi-sweet chocolate chips and chunks of walnuts."
            rows={[
              {orderSize: "6 Pack", orderCost: "15"},
              {orderSize: "12 Pack", orderCost: "25"},
              {orderSize: "24 Pack", orderCost: "45"}
            ]}
            onAdd={(selectedRow) => addToCart(walnutChocoChip, selectedRow)}
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
              {orderSize: "6 Pack", orderCost: "15"},
              {orderSize: "12 Pack", orderCost: "25"},
              {orderSize: "24 Pack", orderCost: "45"}
            ]}
            onAdd={(selectedRow) => addToCart(corn, selectedRow)}
          />
        ),
      },
      {
        ...bananaSplit,
        details: (
          <DessertDetailsCard
            dessertImage={bananaSplitCookie}
            name="Banana Split Cookie"
            description="Thick, indulgent cookies made with banana, creamy butterscotch, rich chocolate, walnuts, and fresh strawberries."
            rows={[
              {orderSize: "6 Pack", orderCost: "15"},
              {orderSize: "12 Pack", orderCost: "25"},
              {orderSize: "24 Pack", orderCost: "45"}
            ]}
            onAdd={(selectedRow) => addToCart(bananaSplit, selectedRow)}
          />
        ),
      },
      {
        ...carrotCake,
        details: (
          <DessertDetailsCard
            dessertImage={carrotCakeCookie}
            name="Carrot Cake Cookie"
            description="Thick, indulgent cookies made with banana, creamy butterscotch, rich chocolate, walnuts, and fresh strawberries."
            rows={[
              {orderSize: "6 Pack", orderCost: "15"},
              {orderSize: "12 Pack", orderCost: "25"},
              {orderSize: "24 Pack", orderCost: "45"}
            ]}
            onAdd={(selectedRow) => addToCart(bananaSplit, selectedRow)}
          />
        ),
      },
      {
        ...carrotSandwich,
        details: (
          <DessertDetailsCard
            dessertImage={carrotSandwichCookie}
            name="Carrot Cake Sandwich Cookie"
            description="Thick, indulgent cookies made with banana, creamy butterscotch, rich chocolate, walnuts, and fresh strawberries."
            rows={[
              {orderSize: "6 Pack", orderCost: "20"},
              {orderSize: "12 Pack", orderCost: "35"},
              {orderSize: "24 Pack", orderCost: "50"}
            ]}
            onAdd={(selectedRow) => addToCart(bananaSplit, selectedRow)}
          />
        ),
      },
      {
        ...atlantic,
        details: (
          <DessertDetailsCard
            dessertImage={pie}
            name="Atlantic Beach Pie"
            description="A sweet-salty twist on a classic North Carolina lemon pie, made with a saltine cracker crust and a tart lemon-lime filling."
            rows={[
              {orderSize: "9\" Pie", orderCost: "23"}
            ]}
            onAdd={(selectedRow) => addToCart(atlantic, selectedRow)}
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
              {orderSize: "9\" x 9\" Cake", orderCost: "25"}
            ]}
            onAdd={(selectedRow) => addToCart(fruityLeches, selectedRow)}
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
              {orderSize: "9\" x 9\" Cake", orderCost: "25"}
            ]}
            onAdd={(selectedRow) => addToCart(chocoLeches, selectedRow)}
          />
        ),
      }
    ];
  }, [addToCart]);  

  const visibleProducts = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.type === filter);
  }, [filter, products]);

  return (
    <div>     
      <div className="flex flex-col max-w-[85rem] px-4 pt-28 lg:px-8 lg:pt-38 mx-auto">
        <DessertButtonGroup active={filter} onChange={setFilter}/>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-6 mb-5 mt-5">
          {visibleProducts.map((p) => (
            <DessertProductCard
              key={`${p.type}-${p.name}`}
              type={p.type}
              name={p.name}
              image={p.image}
              newStatus={p.newStatus}
              holidayStatus={p.holidayStatus}
              details={p.details}
            />
          ))}
        </div>
      </div>
    </div>
  )
};

export default DessertService