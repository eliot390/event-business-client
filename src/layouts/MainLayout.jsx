import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[url(/src/assets/images/bg-hn.png)] bg-repeat bg-fixed bg-light-honey">
      <Navbar />
      <main>
        <Outlet />
      </main>
      
    </div>
  )
}

export default MainLayout