import { Link, useLocation } from "react-router-dom"

const NavbarHoliday = () => {
  const location = useLocation();
  
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 mx-auto px-2 sm:px-6 lg:px-8 border-solid border-b-1 bg-white">
        <div className="flex h-14 items-center justify-around">
          <p className="text-gold uppercase lg:tracking-widest text-sm lg:text-2xl">eliot's holiday bakes</p>
          <div className="md:ml-auto">
            <div className="flex space-x-2 uppercase tracking-tighter text-sm lg:tracking-wide lg:text-lg">
              <Link to="/" className={`lg:pr-4 hover:text-gold ${location.pathname === "/" ? "text-gold" : ""}`}>menu</Link>
              <Link to="/order" className={`lg:pr-4 hover:text-gold ${location.pathname === "/order" ? "text-gold" : ""}`}>order</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarHoliday