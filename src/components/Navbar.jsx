import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 mx-auto px-2 sm:px-6 lg:px-8 border-solid border-b-1 bg-white">
        <div className="flex h-14 items-center justify-around">
          <p className="text-gold uppercase lg:tracking-widest text-sm lg:text-4xl">jeliot events</p>
          <div className="md:ml-auto">
            <div className="flex space-x-2 uppercase tracking-tighter text-sm lg:tracking-wide lg:text-lg">
              <Link to="/" className={`lg:pr-4 hover:text-gold ${location.pathname === "/" ? "text-gold" : ""}`}>home</Link>
              <Link to="/about" className={`lg:pr-4 hover:text-gold ${location.pathname === "/about" ? "text-gold" : ""}`}>about</Link>
              <Link to="/services" className={`lg:pr-4 hover:text-gold ${location.pathname === "/services" ? "text-gold" : ""}`}>services</Link>
              <Link to="/contact" className={`lg:pr-4 hover:text-gold ${location.pathname === "/contact" ? "text-gold" : ""}`}>contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar