import { Link, useLocation } from "react-router-dom";
import disco from '../assets/images/disco-ball-gold.png';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 mx-auto px-2 sm:px-6 lg:px-8 border-solid border-b-3 bg-black border-gold">
        <div className="flex flex-col items-center justify-around my-4">
          <div className="flex flex-row items-end-safe">
            <img src={disco} className="mr-2 h-[3rem] w-auto"/>
            <p className="text-gold uppercase mb-2 lg:tracking-widest text-sm lg:text-4xl">toasted</p>
          </div>          
          <div className="flex space-x-4 text-white uppercase tracking-tighter text-sm lg:tracking-wide lg:text-lg">
            <Link to="/" className={`lg:pr-4 hover:text-gold ${location.pathname === "/" ? "text-gold" : ""}`}>home</Link>              
            <Link to="/services" className={`lg:pr-4 hover:text-gold ${location.pathname === "/services" ? "text-gold" : ""}`}>services</Link>
            <Link to="/contact" className={`lg:pr-4 hover:text-gold ${location.pathname === "/contact" ? "text-gold" : ""}`}>contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar