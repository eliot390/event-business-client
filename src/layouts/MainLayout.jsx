import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import NavbarHoliday from "../components/NavbarHoliday"

const MainLayout = () => {
  return (
    <div className='mt-20'>
      {/* <Navbar /> */}
      <NavbarHoliday />
      <Outlet />
    </div>
  )
}

export default MainLayout