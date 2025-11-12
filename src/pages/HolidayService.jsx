import ServiceCard from '../components/ServiceCard';
import cake from '../assets/images/cake.jpg'
import cookies from '../assets/images/cookies.jpg'
import mini from '../assets/images/mini_cheesecakes.jpg'
import pie from '../assets/images/pie.jpeg'

const FoodService = () => {
  return (
    <div>    
      <div class="flex justify-center items-center min-h-screen bg-gray-50">
        <div class="grid lg:grid-cols-2 gap-6 w-96 md:w-1/2">
          <ServiceCard
            title="Cookies & Brownies"
            description="$15/Half Dozen | $25/Dozen"
            image={cookies}
            menuText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Levain Style</h2>
              <p className="text-gray-600 dark:text-gray-300">Chocolate Chip<br/>Double Chocolate Chip<br/>Walnut Chocolate Chip</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Corn Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300">Sweet Corn Sugar Cookies</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Brownies</h2>
              <p className="text-gray-600 dark:text-gray-300">Plain<br/>Walnut<br/>Cosmic</p>
              {/* <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Lemon Tart</h2>
              <p className="text-gray-600 dark:text-gray-300">Sweet Crust Shell Filled with Tart Lemon Curd</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">S'Mores Bar</h2>
              <p className="text-gray-600 dark:text-gray-300">A classic in bar form! Graham Crust, Chocolate Ganache & Toasted Marshmallow</p> */}
            </div>
            }
            pricingText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Cookies & Brownies</h2>
              <p className="text-gray-600 dark:text-gray-300">$15/Half Dozen | $25/Dozen </p>
              {/* <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Tarts & Bars</h2>
              <p className="text-gray-600 dark:text-gray-300">$5/Slice | $30/Full Serving</p> */}
            </div>
            }
          />
          <ServiceCard
            title="Pies"
            description="Pies come in standard 9 inch pie tins"
            image={pie}
            menuText={
            <div>
              {/* <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Coconut Cream</h2>
              <p className="text-gray-600 dark:text-gray-300">Coconut Custard, Whipped Cream, Toasted Coconut</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Atlantic Beach</h2>
              <p className="text-gray-600 dark:text-gray-300">Saltine Cracker Crust, Lemon-Lime Custard, Whipped Cream</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Chocolate Silk</h2>
              <p className="text-gray-600 dark:text-gray-300">Chocolate Mousse, Whipped Cream</p> 
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Lemon Meringue</h2>
              <p className="text-gray-600 dark:text-gray-300">Lemon Curd, Toasted Meringue</p>*/}
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Pumpkin</h2>
              <p className="text-gray-600 dark:text-gray-300">Classic - $20<br/>White Chocolate Mousse, Pepitas - $23</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Pecan</h2>
              <p className="text-gray-600 dark:text-gray-300">Classic - $20<br/>Brown Butter Bourbon - $23</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Dutch Apple</h2>
              <p className="text-gray-600 dark:text-gray-300">Caramelized Apples, Oat Crumble - $20</p>
            </div>
            }
            pricingText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Full Pies</h2>
              <p className="text-gray-600 dark:text-gray-300">$20/each </p>
            </div>
            }
          />       
        </div>
      </div>
    </div>
  )
}

export default FoodService