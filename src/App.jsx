import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import FAQ from './pages/FAQ'
import Services from './pages/Services'
import OrderForm from './pages/OrderForm'
import BarService from './pages/BarService'
import DessertService from './pages/DessertService'
import Confirmation from './pages/Confirmation'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Services />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/services' element={<Services />} />
      <Route path='/order' element={<OrderForm />} />
      <Route path='/confirmation' element={<Confirmation />} />
      <Route path='/collection/barservice' element={<BarService />} />
      <Route path='/collection/dessertservice' element={<DessertService />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
