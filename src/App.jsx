import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Contact from './pages/Contact'
import Services from './pages/Services'
import OrderForm from './pages/OrderForm'
import BarService from './pages/BarService'
import DessertService from './pages/DessertService'
import PhotoService from './pages/PhotoService'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Services />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/order' element={<OrderForm />} />
      <Route path='/collection/barservice' element={<BarService />} />
      <Route path='/collection/dessertservice' element={<DessertService />} />
      <Route path='/collection/photoservice' element={<PhotoService />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
