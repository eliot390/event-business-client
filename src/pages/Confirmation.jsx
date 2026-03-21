import cookie from '../assets/images/desserts/choco-chip-sm.jpg'

const Confirmation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col w-1/2 py-8 px-5 mx-auto bg-light-frozen border-2 border-sea-green rounded">
        <p className="text-2xl font-bold text-sea-green mb-4">Thank you for your order, Guest!</p>
        <p className="mb-4">We've received your Toasted order. Here are the details:</p>
        <p className="mb-1">Order Date: 3/26/26</p>
        <p className="mb-1">Delivery method: Pickup</p>
        <p className="mb-4">Delivery address: 123 Main St.</p>

        <table className="w-full border-collapse table-auto">
          <thead>
          <tr className="bg-light-honey border-2 border-honey text-left">
            <th className="pl-2">Item</th>
            <th >Size</th>
            <th >Qty</th>
            <th >Total</th>
          </tr>
          </thead>
          <tbody>
          <tr className="bg-cream">
            <td className="pl-2 flex flex-col ">Chocolate Chip Cookies<img src={cookie} className='rounded w-1/6'/></td>
            <td >6 Pack</td>
            <td >1</td>
            <td >$15.00</td>
          </tr>
          </tbody>
        </table>

        <p className="text-lg font-bold text-right pt-4">Order Total: $15.00</p>
      </div>
    </div>
  )
}

export default Confirmation