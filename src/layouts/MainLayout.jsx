import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import NavbarHoliday from "../components/NavbarHoliday"

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <NavbarHoliday /> */}
      <Outlet />
    </div>
  )
}

export default MainLayout