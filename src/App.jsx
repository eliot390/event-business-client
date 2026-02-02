import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import OrderForm from './pages/OrderForm'
import BarService from './pages/BarService'
import FoodService from './pages/FoodService'
import PhotoService from './pages/PhotoService'
import HolidayService from './pages/HolidayService'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Services />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/order' element={<OrderForm />} />
      <Route path='/barservice' element={<BarService />} />
      <Route path='/foodservice' element={<FoodService />} />
      <Route path='/photoservice' element={<PhotoService />} />
      <Route path='/holidayservice' element={<HolidayService />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
