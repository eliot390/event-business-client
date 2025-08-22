import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className='mt-14'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout