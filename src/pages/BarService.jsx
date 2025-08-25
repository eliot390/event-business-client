import martini from '../assets/images/martini.jpg'
import tiki from '../assets/images/tiki.jpg'
import unique from '../assets/images/molecular.jpg'
import oldfashioned from '../assets/images/old_fashioneds.jpg'
import plane from '../assets/images/paper_plane.jpg'
import grogu from '../assets/images/grogu.jpg'
import ServiceCard from '../components/ServiceCard'

const BarService = () => {
  return (
    <div>
      <p className='text-center'>Bar packages are priced 'per person' for larger events and per serving for smaller parties</p>     
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
          <ServiceCard
            title="Classic Cocktails"
            description="Describe here"
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
            description="Want a menu with only Old Fashioned variations? Drinks that aren't too sweet? We'll work with you."
            image={tiki}
            menuText={`Old Fashioned :\n- Classic\n- Maple Bourbon\n- Smoked Cherry`}
          />
          <ServiceCard
            title="Off the Wall"
            description="Want a menu with only Old Fashioned variations? Drinks that aren't too sweet? We'll work with you."
            image={unique}
            menuText={`Old  Variations:\n- Classic\n- Maple Bourbon\n- Smoked Cherry`}
          />
          <ServiceCard
            title="New Classics"
            description="Want a menu with only Old Fashioned variations? Drinks that aren't too sweet? We'll work with you."
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
            description="Want a menu with only Old Fashioned variations? Drinks that aren't too sweet? We'll work with you."
            image={grogu}
            menuText={`Old Fashioned Variations:\n- Classic\n- Maple Bourbon\n- Smoked Cherry`}
          />
          <ServiceCard
            title="Custom Creations"
            description="Want a menu with only Old Fashioned variations? Drinks that aren't too sweet? We'll work with you."
            image={oldfashioned}
            menuText={`Old Fashioned Variations:\n- Classic\n- Maple Bourbon\n- Smoked Cherry`}
          />
        </div>
      </div>
    </div>
  )
}

export default BarService