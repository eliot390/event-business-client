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
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Dubai Chocolate Parfait</h2>
              <p className="text-gray-600 dark:text-gray-300">Chocolate Cake, Pistachio Tahini Mousse, Kadayif</p>
            </div>
            }
            pricingText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Cup Desserts</h2>
              <p className="text-gray-600 dark:text-gray-300">$3/person</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Plated Desserts</h2>
              <p className="text-gray-600 dark:text-gray-300">$2/person</p>
            </div>
            }
          />
          <ServiceCard
            title="Cookies & Bars"
            description="Describe here"
            image={cookies}
            menuText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Levain Style</h2>
              <p className="text-gray-600 dark:text-gray-300">Chocolate Chip | Double Chocolate Chip | Walnut Chocolate Chip</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Corn Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300">corn</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Brownies</h2>
              <p className="text-gray-600 dark:text-gray-300">Plain | Walnut | Cosmic</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Lemon Tart</h2>
              <p className="text-gray-600 dark:text-gray-300">lemon</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">S'Mores Bar</h2>
              <p className="text-gray-600 dark:text-gray-300">marshmallow</p>
            </div>
            }
            pricingText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300">$3/each | $25/dozen </p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Brownies & Bars</h2>
              <p className="text-gray-600 dark:text-gray-300">$3/each | $25/quarter sheet</p>
            </div>
            }
          />
          <ServiceCard
            title="Pies"
            description="Describe here"
            image={pie}
            menuText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Coconut Cream</h2>
              <p className="text-gray-600 dark:text-gray-300">Coconut Custard, Whipped Cream, Toasted Coconut</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Atlantic Beach</h2>
              <p className="text-gray-600 dark:text-gray-300">Saltine Cracker Crust, Lemon-Lime Custard, Whipped Cream</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Chcolate Silk</h2>
              <p className="text-gray-600 dark:text-gray-300">Chocolate Mousse, Whipped Cream</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Pumpkin</h2>
              <p className="text-gray-600 dark:text-gray-300">Plain | Whipped Cream, Toasted Pepitas</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Lemon Meringue</h2>
              <p className="text-gray-600 dark:text-gray-300">Lemon Curd, Toasted Meringue</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Dutch Apple</h2>
              <p className="text-gray-600 dark:text-gray-300">Caramelized Apples, Oat Crumble</p>
            </div>
            }
          />
          <ServiceCard
            title="Party Cakes"
            description="Describe here"
            image={cake}
            menuText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Signature Cake Flavors</h2>
              <p className="text-gray-600 dark:text-gray-300">Carrot, Chocolate, Fruity Pebbles, Lemon, Red Velvet, Vanilla</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Signature Cake Fillings</h2>
              <p className="text-md font-semibold text-gray-800 dark:text-white">Mousses and Custards</p>
              <p className="text-gray-600 dark:text-gray-300">Butterscotch, Caramel Custard, Chocolate Mousse, Coconut Cream, Cream Cheese</p>
              <h3 className="text-md font-semibold mt-1 text-gray-800 dark:text-white">Fruit Based</h3>
              <p className="text-gray-600 dark:text-gray-300">Lemon Curd, Strawberry Mousse</p>
            </div>
            }
            pricingText={
              <div>
                <table class="table-fixed w-full">
                  <caption class='caption-bottom text-xs mt-4'>Final costs depend on design and delivery/set up fees.<br/>Servings are approximate.</caption>
                  <thead>
                    <tr className='bg-rose-100'>
                      <th>Round</th>
                      <th>Servings</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8"</td>
                      <td>16</td>
                      <td>$30</td>
                    </tr>
                    <tr>
                      <td>10"</td>
                      <td>23</td>
                      <td>$40</td>
                    </tr>
                    <tr>
                      <td>12"</td>
                      <td>35</td>
                      <td>$60</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr className='bg-rose-100 '>
                      <th>Square</th>
                      <th>Servings</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8"</td>
                      <td>32</td>
                      <td>$35</td>
                    </tr>
                    <tr>
                      <td>10"</td>
                      <td>50</td>
                      <td>$45</td>
                    </tr>
                    <tr>
                      <td>12"</td>
                      <td>72</td>
                      <td>$70</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr className='bg-rose-100'>
                      <th>½ Sheet Cake</th>
                      <th>Servings</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12" x 18"</td>
                      <td>54</td>
                      <td>$80</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr className='bg-rose-100 '>
                      <th>¼ Sheet Cake</th>
                      <th>Servings</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>9" x 13"</td>
                      <td>29</td>
                      <td>$50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
          />
          <ServiceCard
            title="Wedding Cakes"
            description="Describe here"
            image={cake}
            menuText={
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Signature Cake Flavors</h2>
              <p className="text-gray-600 dark:text-gray-300">Carrot, Chocolate, Fruity Pebbles, Lemon, Red Velvet, Vanilla</p>
              <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Signature Cake Fillings</h2>
              <p className="text-md font-semibold text-gray-800 dark:text-white">Mousses and Custards</p>
              <p className="text-gray-600 dark:text-gray-300">Butterscotch, Caramel Custard, Chocolate Mousse, Coconut Cream, Cream Cheese</p>
              <h3 className="text-md font-semibold mt-1 text-gray-800 dark:text-white">Fruit Based</h3>
              <p className="text-gray-600 dark:text-gray-300">Lemon Curd, Strawberry Mousse</p>
            </div>
            }
            pricingText={
              <div>
                <table class="table-fixed w-full">
                  <caption class='caption-bottom text-xs mt-4'>Final costs depend on design and delivery/set up fees.<br/>Servings are approximate.</caption>
                  <thead>
                    <tr className='bg-rose-100'>
                      <th>Round, 2 Tier</th>
                      <th>Servings</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8", 6"</td>
                      <td>36</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td>10", 6"</td>
                      <td>50</td>
                      <td>$140</td>
                      </tr>
                  </tbody>
                  <thead>
                    <tr className='bg-rose-100 '>
                      <th>Round, 3 Tier</th>
                      <th>Servings</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10", 8", 6"</td>
                      <td>74</td>
                      <td>$200</td>
                    </tr>
                    <tr>
                      <td>12", 10", 6"</td>
                      <td>106</td>
                      <td>$240</td>
                    </tr>
                    <tr>
                      <td>14", 10", 6"</td>
                      <td>128</td>
                      <td>$300</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr className='bg-rose-100'>
                      <th>Square, 2 Tier</th>
                      <th>Servings</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8", 6"</td>
                      <td>50</td>
                      <td>$150</td>
                    </tr>
                    <tr>
                      <td>10", 6"</td>
                      <td>68</td>
                      <td>$200</td>
                      </tr>
                  </tbody>
                  <thead>
                    <tr className='bg-rose-100 '>
                      <th>Square, 3 Tier</th>
                      <th>Servings</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10", 8", 6"</td>
                      <td>100</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <td>12", 10", 6"</td>
                      <td>140</td>
                      <td>$420</td>
                    </tr>
                    <tr>
                      <td>14", 10", 6"</td>
                      <td>166</td>
                      <td>$500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
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