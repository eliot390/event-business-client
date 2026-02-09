import { Link, useLocation } from "react-router-dom";
import disco from '../assets/images/disco-ball-gold.png';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 mx-auto px-2 sm:px-6 lg:px-8 border-solid border-b-3 bg-frozen-water border-amber">
        <div className="flex flex-row items-center justify-center my-4">
          <div className="flex flex-col items-center mr-20 lg:flex-row lg:items-end-safe">
            <img src={disco} className="w-[3rem] lg:mr-2 lg:w-[3rem]"/>
            <Link to="/about" className="text-sea-green font-(family-name:--font-milliard-heavy) mb-1 text-2xl lg:text-4xl">Toasted</Link>
          </div>          
          <div className="flex space-x-4 text-sea-green uppercase tracking-tighter text-md lg:tracking-wide lg:text-lg">
            
            <Link to="/collection/dessertservice" className="lg:pr-4 hover:text-amber">desserts</Link>
            <Link to="/collection/barservice" className="lg:pr-4 hover:text-amber">drinks</Link>
            <Link to="/collection/photoservice" className="lg:pr-4 hover:text-amber">photobooth</Link>
            <Link to="/contact" className="lg:pr-4 hover:text-amber">contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar