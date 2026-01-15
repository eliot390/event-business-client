import martini from '../assets/images/martini.jpg'
import tiki from '../assets/images/tiki.jpg'
import unique from '../assets/images/molecular.jpg'
import tropic from '../assets/images/tropic.png'
import plane from '../assets/images/paper_plane.jpg'
import pride from '../assets/images/pride.jpg'
import ServiceCard from '../components/ServiceCard'

const BarService = () => {
  return (
    <div>     
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <p className='text-center'>Batched cocktails come in 33oz. (About 11 servings) or 16oz. (About 5 servings) bottles</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5 mt-5">
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
          {/* <ServiceCard
            title="Off the Wall"
            description="Think outside the glass! Unexpected flavors, bold twists, and drinks to keep your tastebuds excited."
            image={unique}
            menuText={`Old  Variations:\n- Classic\n- Maple Bourbon\n- Smoked Cherry`}
          />
          <ServiceCard
            title="New Classics"
            description="Modern favorites like Paper Planes and Oaxaca Old Fashioned's, sure to become your new go-to."
            image={plane}
            menuText={
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Paper Plane</h2>
                <p className="text-gray-600 dark:text-gray-300">Bourbon, Amaro Nonino, Aperol</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Tommy's Margarita</h2>
                <p className="text-gray-600 dark:text-gray-300">Tequila, Lime Agave</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Penicillin</h2>
                <p className="text-gray-600 dark:text-gray-300">Scotch, Ginger, Honey</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Mezcal Mule</h2>
                <p className="text-gray-600 dark:text-gray-300">Mezcal, Lime, Ginger Beer</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Gin Basil Smash</h2>
                <p className="text-gray-600 dark:text-gray-300">Gin, Basil, Lemon</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Oaxaca Old Fashioned</h2>
                <p className="text-gray-600 dark:text-gray-300">Tequila, Mezcal, Agave, Bitters</p>
              </div>
            }
          />
          <ServiceCard
            title="Themed Cocktails"
            description="Having a Star Wars halloween party? An 80's themed birthday party? We'll work with you!"
            image={pride}
            menuText={`Old Fashioned Variations:\n- Classic\n- Maple Bourbon\n- Smoked Cherry`}
          /> */}
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