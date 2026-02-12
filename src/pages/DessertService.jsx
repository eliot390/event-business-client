
import chocochip from '../assets/images/desserts/choco-chip.jpg'
import doublechocolate from '../assets/images/desserts/choco-choco-chip.jpg'
import pie from '../assets/images/desserts/atlantic.png'
import leches from '../assets/images/desserts/leches.png'
import { useMemo, useState } from 'react';
import DessertDetailsCard from '../components/DessertDetailsCard';
import DessertButtonGroup from '../components/DessertButtonGroup';
import DessertProductCard from '../components/DessertProductCard';

const DessertService = () => {
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
        type:"cookies",
        name:"Chocolate Chip",
        image:chocochip,
        details: (
          <DessertDetailsCard
            dessertImage={chocochip}
            name="Cookie"
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {
                orderSize: "1/2 Dozen",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                orderSize: "1 Dozen",
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
        type:"cookies",
        name:"Double Chocolate Chocolate Chip",
        image:doublechocolate,
        details: (
          <DessertDetailsCard
            dessertImage={doublechocolate}
            name="Cookie"
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {
                orderSize: "1/2 Dozen",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                orderSize: "1 Dozen",
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
        type:"cookies",
        name:"Walnut Chocolate Chip",
        image:chocochip,
        details: (
          <DessertDetailsCard
            dessertImage={chocochip}
            name="Cookie"
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {
                orderSize: "1/2 Dozen",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                orderSize: "1 Dozen",
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
        type:"cookies",
        name:"Sweet Corn Sugar Cookie",
        image:chocochip,
        details: (
          <DessertDetailsCard
            dessertImage={chocochip}
            name="Cookie"
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {
                orderSize: "1/2 Dozen",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              },
              {
                orderSize: "1 Dozen",
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
        type:"pies",
        name:"Atlantic Beach Pie",
        image:pie,
        details: (
          <DessertDetailsCard
            dessertImage={pie}
            name="Pie"
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {
                orderSize: "1/2 Dozen",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              }
            ]}
          />
        )
      },
      {
        type:"cakes",
        name:"Fruity Pebbles Tres Leches",
        image:leches,
        details: (
          <DessertDetailsCard
            dessertImage={leches}
            name="Tres Leches"
            description="Crisp, light and refreshing. Delicately simple yet with perfectly balanced complexity of flavours."
            rows={[
              {
                orderSize: "9\" x 9\" cake",
                counter: counter,
                onDecrease: decrease,
                onIncrease: increase,
                onAdd: null
              }
            ]}
          />
        )
      }
    ],
    [counter, decrease, increase]
  )

  const visibleProducts = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.type === filter);
  }, [filter, products]);

  return (
    <div>     
      <div className="flex flex-col justify-center max-w-[85rem] px-4 py-14 lg:px-8 lg:py-14 mx-auto">
        <p className='mt-2 mx-auto max-w-lg h-24 text-center'>Toasted offers homemade dessets perfect for any occasion.</p>
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
}


{/* <ServiceCard
            title="Cookies"
            description="Freshly baked for your order!"
            image={cookies}
            menuText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Extra Thick Bakery Style</h2>
              <p className="text-gray-600 dark:text-gray-300">Chocolate Chip<br/>Double Chocolate Chocolate Chip<br/>Walnut Chocolate Chip</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Corn Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300">Sweet Corn Sugar Cookies</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Banana Split Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300">Banana, Strawberry, Chocolate</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Thin & Chewy Chocolate Chip</h2>
              <p className="text-gray-600 dark:text-gray-300">Dark Chocolate, Maldon Salt</p>
            </div>
            }
            pricingText={
            <div>
              <p className="text-gray-600 dark:text-gray-300">$15 - Half Dozen | $25 - Dozen</p>
            </div>
            }
          />
          <ServiceCard
            title="Pies"
            description={"9\" deep dish servings to fit all that flavor!"}
            image={pie}
            menuText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Ube Custard</h2>
              <p className="text-gray-600 dark:text-gray-300">Ube Custard, Toasted Meringue</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">French Silk</h2>
              <p className="text-gray-600 dark:text-gray-300">Oreo Cookie Crust, Chocolate Mousse, Whipped Cream</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Atlantic Beach</h2>
              <p className="text-gray-600 dark:text-gray-300">Saltine Cracker Crust, Lemon-Lime Custard, Whipped Cream</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Dutch Apple</h2>
              <p className="text-gray-600 dark:text-gray-300">Caramelized Apples, Oat Crumble</p>
            </div>
            }
            pricingText={
            <div>
              <p className="text-gray-600 dark:text-gray-300">$25 each</p>
            </div>
            }
          />
          <ServiceCard
            title="Tres Leches"
            description="Because it deserves its own spot!"
            image={leches}
            menuText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Eliot's Famous Tres Leches</h2>
              <p className="text-gray-600 dark:text-gray-300">Classic Tres<br/>Fruity Pebbles<br/>Chocolate Hazelnut</p><br/>
              <p className="text-center text-sm italic font-semibold text-gray-600 dark:text-gray-300">All cakes come in a 9" by 9" pan</p>
            </div>
            }
            pricingText={
            <div>
              <p className="text-gray-600 dark:text-gray-300">$25 each</p>
            </div>
            }
          /> */}
        
export default DessertService