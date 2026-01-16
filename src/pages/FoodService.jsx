import ServiceCard from '../components/ServiceCard';
import cookies from '../assets/images/cookies.png'
import pie from '../assets/images/atlantic.png'
import leches from '../assets/images/leches.png'

const FoodService = () => {
  return (
    <div>    
      <div class="flex justify-center items-center min-h-screen bg-gray-50">
        <div class="grid justify-items-center content-around sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
          {/* <ServiceCard
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
          /> */}
          <ServiceCard
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
          />
          {/* <ServiceCard
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
          />*/}
        </div>
      </div>
    </div>
  )
}

export default FoodService