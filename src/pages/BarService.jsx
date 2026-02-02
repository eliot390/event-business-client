import martini from '../assets/images/martini.jpg'
import tiki from '../assets/images/tiki.jpg'
import tropic from '../assets/images/tropic.png'
import ServiceCard from '../components/ServiceCard'

const BarService = () => {
  return (
    <div>     
      <div className="flex flex-col justify-center max-w-[85rem] px-4 py-24 lg:px-8 lg:py-14 mx-auto">
        <p className='mt-8 mx-auto max-w-lg h-24 text-center'>Toasted offers handcrafted, pre-batched cocktails in 33 oz (11 servings) 
          and 16 oz (5 servings) bottles. Easy to serve, perfect for events, and great as gifts. Custom cocktail
           options are available upon request.</p>
        <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-6 mb-5 mt-5">
          <ServiceCard
            title="Classic Cocktails"
            description="Martinis, Manhattans, Old Fashioneds and more, crafted with timeless technique and style."
            image={martini}
            menuText={
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Martini</h2>
                <p className="text-gray-600 dark:text-gray-300">Vodka/Gin, Dry Vermouth</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Manhattan</h2>
                <p className="text-gray-600 dark:text-gray-300">Bourbon, Sweet Vermouth, Orange Bitters</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Daiquiri</h2>
                <p className="text-gray-600 dark:text-gray-300">White Rum, Lime</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Margarita</h2>
                <p className="text-gray-600 dark:text-gray-300">Tequila, Triple Sec, Lime</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Negroni</h2>
                <p className="text-gray-600 dark:text-gray-300">Gin, Campari, Sweet Vermouth</p>
              </div>
            }
            pricingText={
            <div>
              <p className="text-gray-600 dark:text-gray-300">16 oz. $30<br/>33 oz. - $60</p>
            </div>
            }
          />
          <ServiceCard
            title="Tiki Madness"
            description="From Mai Tais to Zombies, we'll bring the island vibes (umbrellas included!)."
            image={tiki}
            menuText={
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Jungle Bird</h2>
                <p className="text-gray-600 dark:text-gray-300">Dark Rum, Campari, Pineapple Juice</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Three Dots and a Dash</h2>
                <p className="text-gray-600 dark:text-gray-300">Rhum Agricole, Aged Rum, Allspice Dram, Falernum, Orange Juice, Lime Juice, Honey, Bitters</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Saturn</h2>
                <p className="text-gray-600 dark:text-gray-300">Gin, Falernum, Orgeat, Passion Fruit</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Mai Tai</h2>
                <p className="text-gray-600 dark:text-gray-300">Aged Rum, Dry Curaçao, Orgeat, Lime Juice</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Zombie</h2>
                <p className="text-gray-600 dark:text-gray-300">Aged Rum, Overproof Rum, Falernum, Grenadine, "Don's Mix", Absinthe</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Naked Ape</h2>
                <p className="text-gray-600 dark:text-gray-300">Overproof Rum, Dark Rum, Banana Liqueur, Cinnamon, Bitters</p>
              </div>}
              pricingText={
              <div>
                <p className="text-gray-600 dark:text-gray-300">16 oz. $30<br/>33 oz. - $60</p>
              </div>
              }
          />
          <ServiceCard
            title="Party Revival"
            description="Tried & true creations from our past parties, sure to be a hit!"
            image={tropic}
            menuText={
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Caramel Apple Old Fashioned</h2>
                <p className="text-gray-600 dark:text-gray-300">Caramel Whiskey, Jameson, Apple Cider, Black Walnut Bitters</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Children of the Corn</h2>
                <p className="text-gray-600 dark:text-gray-300">Popcorn Infused Rum, Nixta, Horchata</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Pee-Wee's Big Adventure</h2>
                <p className="text-gray-600 dark:text-gray-300">Habanero Infused Tequila, Watermelon, Lime</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Tropic Thunder</h2>
                <p className="text-gray-600 dark:text-gray-300">Cachaça, Triple Sec, Calamansi</p>
              </div>}
              pricingText={
              <div>
                <p className="text-gray-600 dark:text-gray-300">16 oz. $30<br/>33 oz. - $60</p>
              </div>
              }
          />
        </div>
      </div>
    </div>
  )
}

export default BarService