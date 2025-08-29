import martini from '../assets/images/martini.jpg'
import tiki from '../assets/images/tiki.jpg'
import unique from '../assets/images/molecular.jpg'
import grogu from '../assets/images/grogu.jpg'
import plane from '../assets/images/paper_plane.jpg'
import pride from '../assets/images/pride.jpg'
import ServiceCard from '../components/ServiceCard'

const BarService = () => {
  return (
    <div>
      <p className='text-center'>Bar packages are priced 'per person' for larger events and per serving for smaller parties</p>     
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
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
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Old Fashioned</h2>
                <p className="text-gray-600 dark:text-gray-300">Bourbon, Rye, Demerara</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Daiquiri</h2>
                <p className="text-gray-600 dark:text-gray-300">White Rum, Lime</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Margarita</h2>
                <p className="text-gray-600 dark:text-gray-300">Tequila, Triple Sec, Lime</p>
                <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">Negroni</h2>
                <p className="text-gray-600 dark:text-gray-300">Gin, Campari, Sweet Vermouth</p>
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
          />
          <ServiceCard
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
          />
          <ServiceCard
            title="Custom Creations"
            description="Your vision, our shakers. Let's build a drink package that's uniquely yours."
            image={grogu}
            menuText={`Old Fashioned Variations:\n- Classic\n- Maple Bourbon\n- Smoked Cherry`}
          />
        </div>
      </div>
    </div>
  )
}

export default BarService