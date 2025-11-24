import ServiceCard from '../components/ServiceCard';
import cookies from '../assets/images/cookies.jpg'
import italian from '../assets/images/italian.jpg'
import pie from '../assets/images/pie.jpeg'

const FoodService = () => {
  return (
    <div>    
      <div class="flex justify-center items-center min-h-screen bg-gray-50">
        <div class="grid justify-items-center content-around sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
          <ServiceCard
            title="Cookies"
            description=""
            image={cookies}
            menuText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Bakery Style</h2>
              <p className="text-gray-600 dark:text-gray-300">Extra Thick Chocolate Chip<br/>Extra Thick Double Chocolate Chocolate Chip<br/>Extra Thick Walnut Chocolate Chip</p>
              <p className="text-center text-sm italic text-gray-600 dark:text-gray-300">$15/Half Dozen | $25/Dozen</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Corn Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300">Sweet Corn Sugar Cookies</p>
              <p className="text-center text-sm italic text-gray-600 dark:text-gray-300">$15/Half Dozen | $25/Dozen</p>
            </div>
            }
          />
          <ServiceCard
            title="Holiday Specials"
            description={"Sweeten up your holidays with these limited time specials!"}
            image={italian}
            menuText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Gingerbread Tres Leches</h2>
              <p className="text-gray-600 dark:text-gray-300">Gingerbread spiced cake, tres leches, whipped cream</p>
              <p className="text-center text-sm italic text-gray-600 dark:text-gray-300">9" by 9" pan - $25</p>
              <p className="text-center text-sm italic text-gray-600 dark:text-gray-300">13" by 9" pan - $40</p><br/>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Italian Christmas Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300">Soft, cakey cookies with a light almond flavor and sugar glaze</p>
              <p className="text-center text-sm italic text-gray-600 dark:text-gray-300">$15/Two Dozen | $25/Four Dozen</p><br/>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Oreo Crunch Peppermint Bark</h2>
              <p className="text-gray-600 dark:text-gray-300">Dark chocolate Oreo base topped with white chocolate and candy cane pieces</p>
              <p className="text-center text-sm italic text-gray-600 dark:text-gray-300">$15/pound</p>
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