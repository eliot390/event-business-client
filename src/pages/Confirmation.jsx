import { useLocation, Navigate } from "react-router-dom"
import { useCart } from '../context/CartContext';

const Confirmation = () => {
  const { clearCart } = useCart();
  clearCart();
  const location = useLocation()
  const order = location.state?.order
  const trimmedName = order.name.trim().split(/\s+/)[0]
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  }).format(new Date(order.orderDate))

  if(!order) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col w-full lg:w-1/3 py-8 px-5 mx-auto bg-light-frozen border-2 border-sea-green rounded">
        <p className="text-2xl font-bold text-sea-green mb-4">Thank you for your order, {trimmedName}!</p>
        <p className="mb-1"><span className="font-semibold">Order #: </span> {order.orderID}</p>
        <p className="mb-1"><span className="font-semibold">Order Date:</span> {formattedDate}</p>
        <p className="mb-1"><span className="font-semibold">Delivery method:</span> {order.deliveryMethod}</p>
        {order.deliveryMethod === "Delivery" && (
          <p className="mb-1"><span className="font-semibold">Address:<br/></span> {order.deliveryAddress}<br/>{order.deliveryCity}, {order.deliveryZip}</p>
        )}

        <p className="font-semibold mt-4 pb-1">Your Order</p>
        <table className="w-full border-collapse table-auto">
          <thead>
          <tr className="bg-frozen-water text-left text-sea-green">
            <th className="pl-2 py-1">Item</th>
            <th>Qty</th>
            <th>Size</th>
            <th className="text-right pr-2">Total</th>
          </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index} className="bg-cream">
                <td className="pl-2 flex flex-col py-1">{item.productName}</td>
                <td>{item.quantity}</td>
                <td>{item.orderSize}</td>
                <td className="text-right pr-2">${item.price.toFixed(2)}</td>
               </tr>
            ))}          
          </tbody>
        </table>

        <p className="text-lg font-bold text-right pt-4 mr-2">Order Total: ${order.total.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Confirmation