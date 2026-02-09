import { Link, useLocation } from "react-router-dom";
import disco from '../assets/images/disco-ball-gold.png';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 mx-auto px-2 sm:px-6 lg:px-8 border-solid border-b-3 bg-black border-gold">
        <div className="flex flex-col items-center justify-around my-4">
          <div className="flex flex-col items-center lg:flex-row lg:items-end-safe">
            <img src={disco} className="w-[3rem] lg:mr-2 lg:w-[3rem]"/>
            <p className="text-gold font-(family-name:--font-milliard)  mb-1  text-2xl lg:text-4xl">Toasted</p>
          </div>          
          <div className="flex space-x-4 text-white uppercase tracking-tighter text-md lg:tracking-wide lg:text-lg">
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