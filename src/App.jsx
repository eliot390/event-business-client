import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import Services from './pages/Services'
import BarService from './pages/BarService'
import FoodService from './pages/FoodService'
import PhotoService from './pages/PhotoService'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/barservice' element={<BarService />} />
      <Route path='/foodservice' element={<FoodService />} />
      <Route path='/photoservice' element={<PhotoService />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
