import ServiceCard from '../components/ServiceCard';
import cake from '../assets/images/cake.jpg'
import cookies from '../assets/images/cookies.jpg'
import mini from '../assets/images/mini_cheesecakes.jpg'
import pie from '../assets/images/pie.jpeg'

const FoodService = () => {
  return (
    <div>
      <p className='text-center'>Bar packages are priced 'per person' for larger events and per serving for smaller parties</p>     
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
          <ServiceCard
            title="Individual Desserts"
            description="Describe here"
            image={mini}
            menuText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Caramel Banana Cheesecake</h2>
              <p className="text-gray-600 dark:text-gray-300">Cheesecake, Whiskey Caramel, Bruleed Bananas, Peanuts</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Mason Jar S'mores</h2>
              <p className="text-gray-600 dark:text-gray-300">Dark Chocolate Ganache, Graham Crumbles, Toasted Meringue, Campfire Smoke</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Ube Tres Leches Cake Cups</h2>
              <p className="text-gray-600 dark:text-gray-300">Vanilla Cake, Ube Tres Leches, Whipped Cream, Coconut & Sesame Crispies</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Mini Pumpkin Tarts</h2>
              <p className="text-gray-600 dark:text-gray-300">Whipped Cream, Toasted Pepitas, Cranberry Gelee</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Greek Yogurt Panna Cotta</h2>
              <p className="text-gray-600 dark:text-gray-300">Basil Gelee, Candied Hazelnuts</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Mini Angel Food Caked</h2>
              <p className="text-gray-600 dark:text-gray-300">Lemon Verbena Cream, Mixed Berries</p>
            </div>
            }
          />
          <ServiceCard
            title="Cookies"
            description="Describe here"
            image={cookies}
            menuText={`Old Fashioned :\n- Classic\n- Maple Bourbon\n- Smoked Cherry`}
          />
          <ServiceCard
            title="Pies"
            description="Describe here"
            image={pie}
            menuText={`Old  Variations:\n- Classic\n- Maple Bourbon\n- Smoked Cherry`}
          />
          <ServiceCard
            title="Party Cakes"
            description="Describe here"
            image={cake}
            menuText={`Old Fashioned Variations:\n- Classic\n- Maple Bourbon\n- Smoked Cherry`}
          />
          <ServiceCard
            title="Wedding Cakes"
            description="Describe here"
            image={cake}
            menuText={`Old Fashioned Variations:\n- Classic\n- Maple Bourbon\n- Smoked Cherry`}
          />
          <ServiceCard
            title="Custom Creations"
            description="Describe here"
            image={cake}
            menuText={`Old Fashioned Variations:\n- Classic\n- Maple Bourbon\n- Smoked Cherry`}
          />          
        </div>
      </div>
    </div>
  )
}

export default FoodService