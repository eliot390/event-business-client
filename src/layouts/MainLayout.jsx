import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-[url(/src/assets/images/bg-hn.png)] bg-repeat bg-fixed bg-light-honey">
        <Outlet />
      </main>
      
    </div>
  )
}

export default MainLayout