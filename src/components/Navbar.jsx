import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 mx-auto px-2 sm:px-6 lg:px-8 border-solid border-b-2 bg-white">
        <div className="flex h-14 items-center justify-around">
          <p className="uppercase lg:tracking-widest text-sm lg:text-4xl">jeliot events</p>
          <div className="md:ml-auto">
            <div className="flex space-x-2 uppercase tracking-tighter text-sm font-light lg:tracking-wide lg:text-lg">
              <Link to="/" className={`lg:pr-4 hover:underline ${location.pathname === "/" ? "underline" : ""}`}>home</Link>
              <Link to="/services" className={`lg:pr-4 hover:underline ${location.pathname === "/services" ? "underline" : ""}`}>services</Link>
              <Link to="/contact" className={`lg:pr-4 hover:underline ${location.pathname === "/contact" ? "underline" : ""}`}>contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar