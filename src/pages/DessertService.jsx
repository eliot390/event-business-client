
import { useCallback, useMemo, useState } from 'react';
import { useCart } from '../context/CartContext';
import DessertDetailsCard from '../components/DessertDetailsCard';
import DessertButtonGroup from '../components/DessertButtonGroup';
import DessertProductCard from '../components/DessertProductCard';
import chocoChip from '../assets/images/desserts/choco-chip.jpg'
import doubleChocolate from '../assets/images/desserts/choco-choco-chip.jpg'
import bananaSplitCookie from '../assets/images/desserts/bananaSplit.jpg'
import cornCookie from '../assets/images/desserts/cornCookie.jpg'
import carrotCakeCookie from '../assets/images/desserts/carrot-cake-cookie.jpg'
import atlanticPie from '../assets/images/desserts/atlantic.png'
import coconutPie from '../assets/images/desserts/coconut.jpg'
import leches from '../assets/images/desserts/leches.png'
import chocolateLeches from '../assets/images/desserts/choco-leches.jpg'
import chocoChipCart from '../assets/images/desserts/choco-chip-sm.jpg'
import doubleChocolateCart from '../assets/images/desserts/choco-choco-chip-sm.jpg'
import bananaSplitCookieCart from '../assets/images/desserts/bananaSplit-sm.jpg'
import carrotCakeCookieCart from '../assets/images/desserts/carrot-cake-cookie-sm.jpg'
import cornCookieCart from '../assets/images/desserts/cornCookie-sm.jpg'
import atlanticPieCart from '../assets/images/desserts/atlantic-sm.png'
import coconutPieCart from '../assets/images/desserts/coconut-sm.jpg'
import lechesCart from '../assets/images/desserts/leches-sm.png'
import chocolateLechesCart from '../assets/images/desserts/choco-leches-sm.jpg'
import dairy from '../assets/images/milk-c.png'
import egg from '../assets/images/egg-c.png'
import wheat from '../assets/images/wheat-c.png'
import nuts from '../assets/images/nuts-c.png'
import soy from '../assets/images/soy-c.png'

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
      image: chocoChip,
      cartImg: chocoChipCart,
      newStatus: false
    };

    const doubleChocoChip = {
      key: "doubleChocoChip",
      type: "cookies",
      name: "Double Chocolate Chocolate Chip",
      image: doubleChocolate,
      cartImg: doubleChocolateCart,
      newStatus: false
    };

    const walnutchocoChip = {
      key: "walnutchocoChip",
      type: "cookies",
      name: "Walnut Chocolate Chip",
      image: chocoChip,
      cartImg: chocoChipCart,
      newStaus: false
    };

    const corn = {
      key: "cornCookie",
      type: "cookies",
      name: "Sweet Corn Sugar Cookie",
      image: cornCookie,
      cartImg: cornCookieCart,
      newStatus: false
    };

    const bananaSplit = {
      key: "bananaCookie",
      type: "cookies",
      name: "Banana Split Cookie",
      image: bananaSplitCookie,
      cartImg: bananaSplitCookieCart,
      newStatus: true
    };

    const carrotCake = {
      key: "carrotCake",
      type: "cookies",
      name: "Carrot Cake Cookies",
      image: carrotCakeCookie,
      cartImg: carrotCakeCookieCart,
      newStatus: false,
      holidayStatus: true
    };

    const atlantic = {
      key: "atlanticPie",
      type: "pies",
      name: "Atlantic Beach Pie",
      image: atlanticPie,
      cartImg: atlanticPieCart,
      newStatus: true
    };

    const coconut = {
      key: "coconutPie",
      type: "pies",
      name: "Coconut Pandan Cream Pie",
      image: coconutPie,
      cartImg: coconutPieCart,
      newStatus: true
    };

    const fruityLeches = {
      key: "fruityLeches",
      type: "tres leches",
      name: "Fruity Pebbles Tres Leches",
      image: leches,
      cartImg: lechesCart,
      newStatus: true
    };

    const chocoLeches = {
      key: "chocoLeches",
      type: "tres leches",
      name: "Chocolate Hazelnut Tres Leches",
      image: chocolateLeches,
      cartImg: chocolateLechesCart,
      newStatus: true
    };

    {/* Detail Card Info */}
    return [
      {
        ...chocolateChip,
        details: (
          <DessertDetailsCard
            dessertImage={chocoChipCart}
            name="Classic Chocolate Chip"
            description="Perfectly crispy on the outside and satisfyingly thick and gooey in the center."
            allergens={[dairy, egg, wheat, soy]}
            rows={[              
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
            dessertImage={doubleChocolateCart}
            name="Double Chocolate Chocolate Chip Cookie"
            description="The ultimate chocolate cookie: dense, chewy and dangerously rich."
            allergens={[dairy, egg, wheat, soy]}
            rows={[              
              {orderSize: "12 Pack", orderCost: "25"},
              {orderSize: "24 Pack", orderCost: "45"}
            ]}
            onAdd={(selectedRow) => addToCart(doubleChocoChip, selectedRow)}
          />
        ),
      },
      {
        ...walnutchocoChip,
        details: (
          <DessertDetailsCard
            dessertImage={chocoChipCart}
            name="Walnut Chocolate Chip Cookie"
            description="Crispy on the outside with a satisfyingly thick and moist center, packed with semi-sweet chocolate chips and chunks of walnuts."
            allergens={[dairy, egg, wheat, soy, nuts]}
            rows={[              
              {orderSize: "12 Pack", orderCost: "25"},
              {orderSize: "24 Pack", orderCost: "45"}
            ]}
            onAdd={(selectedRow) => addToCart(walnutchocoChip, selectedRow)}
          />
        ),
      },
      {
        ...corn,
        details: (
          <DessertDetailsCard
            dessertImage={cornCookieCart}
            name="Sweet Corn Sugar Cookie"
            description="Sweet and salty, soft and chewy, these cookies come packed with corn flavor! Pick up a batch and transport yourself to the days of eating your favorite corn-based, Saturday morning cereal."
            allergens={[dairy, egg, wheat]}
            rows={[              
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
            dessertImage={bananaSplitCookieCart}
            name="Banana Split Cookie"
            description="Thick, indulgent cookies made with banana, creamy butterscotch, rich chocolate, walnuts, and fresh strawberries."
            allergens={[dairy, egg, wheat, soy, nuts]}
            rows={[              
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
            dessertImage={carrotCakeCookieCart}
            name="Carrot Cake Cookie"
            description="Soft & tender cookies packed with raisins, pecans and carrots, topped with a cream cheese drizzle."
            allergens={[dairy, egg, wheat, soy, nuts]}
            rows={[              
              {orderSize: "12 Pack", orderCost: "25"},
              {orderSize: "24 Pack", orderCost: "45"}
            ]}
            onAdd={(selectedRow) => addToCart(carrotCake, selectedRow)}
          />
        ),
      },
      {
        ...atlantic,
        details: (
          <DessertDetailsCard
            dessertImage={atlanticPieCart}
            name="Atlantic Beach Pie"
            description="A sweet-salty twist on a classic North Carolina lemon pie, made with a saltine cracker crust and a tart lime filling. Perfect for warm summer evening paired with a citrus forward cocktail or sparkling white wine!"
            allergens={[dairy, egg, wheat]}
            rows={[
              {orderSize: "9\" Pie", orderCost: "23"}
            ]}
            onAdd={(selectedRow) => addToCart(atlantic, selectedRow)}
          />
        ),
      },
      {
        ...coconut,
        details: (
          <DessertDetailsCard
            dessertImage={coconutPieCart}
            name="Coconut Pandan Cream Pie"
            description="Thick & creamy coconut custard, made with a touch of aromatic pandan. Topped with whipped cream & toasted coconut."
            allergens={[dairy, egg, wheat]}
            rows={[
              {orderSize: "9\" Pie", orderCost: "23"}
            ]}
            onAdd={(selectedRow) => addToCart(coconut, selectedRow)}
          />
        ),
      },
      {
        ...fruityLeches,
        details: (
          <DessertDetailsCard
            dessertImage={lechesCart}
            name="Fruity Pebbles Tres Leches"
            description="Breakfast & dessert collide in this light cake soaked with a rich, 3 milk blend, topped with whipped cream and Fruity Pebbles cereal."
            allergens={[dairy, egg, wheat, soy]}
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
            dessertImage={chocolateLechesCart}
            name="Chocolate Hazelnut Tres Leches"
            description="Rich chocolate cake soaked in our signature 3 milk blend, topped with a light & airy Nutella frosting and toasted hazelnuts."
            allergens={[dairy, egg, wheat, soy, nuts]}
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
      <div className="flex flex-col max-w-[85rem] px-4 pt-28 lg:px-8 mx-auto">
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