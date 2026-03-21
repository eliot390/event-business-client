import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import venmo from '../assets/images/venmo.jpg'
import zelle from '../assets/images/zelle.jpg'

const OrderForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [comments, setComments] = useState("")
  const [deliveryMethod, setDeliveryMethod] = useState("")
  const [deliveryAddress, setDeliveryAddress] = useState("")
  const [deliveryCity, setDeliveryCity] = useState("")
  const [deliveryZip, setDeliveryZip] = useState("")
  const [orderDate, setOrderDate] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const paymentImg = {Venmo: venmo, Zelle: zelle}

  const navigate = useNavigate();

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const validatePhone = (v) => /^[0-9+\-()\s]{7,15}$/.test(v);
  const formIsValid = name && validateEmail(email) && validatePhone(phone) && deliveryMethod && orderDate && paymentMethod

  const handleCancel = () => {
    setName("");
    setEmail("");
    setPhone("");
    setComments("");
    setDeliveryMethod("");
    setDeliveryAddress("");
    setDeliveryCity("");
    setDeliveryZip("");
    setOrderDate("");
    setPaymentMethod("")
  };

  const minDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate()+2);
    return date.toISOString().split("T")[0];
  }, []);  

  const { items, cartTotal, clearCart } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      phone,
      deliveryMethod,
      deliveryAddress: deliveryMethod === "Delivery" ? deliveryAddress : "",
      comments,
      orderDate,
      items: items.map((it) => ({
        productKey: it.productKey,
        productName: it.productName,
        orderSize: it.orderSize,
        quantity: it.quantity,
        price: Number(it.orderCost),
      })),
      total: Number(cartTotal)
    }

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
      })

      const text = await res.text();

      if(!res.ok) {
        alert(text);
        return;
      }

      clearCart();
      alert("Order placed");
      setTimeout(() => {
        navigate('/confirmation');
      }, 1000)
    } catch (err) {
      console.error(err);
      alert("Failed to place order");
    }
  }

  return (
    <div className='flex flex-col mt-10 lg:mt-30 lg:flex-row justify-center'>
      {/* Left Side */}
      <div className='flex flex-col items-center lg:items-end bg-light-frozen lg:pt-4 lg:pr-8 lg:h-screen lg:w-1/2 max-sm:border-b-2 border-sea-green'>
        <form className='w-7/8 lg:w-lg pt-12 lg:pt-0'>
          <div>
            <h2 className="text-gray-900 text-center text-2xl lg:text-3xl mt-4">Order Form</h2>
            <div className="lg:mt-4 grid grid-cols-1 gap-x-6 gap-y-4 lg:gap-y-8 sm:grid-cols-6">

              <div className="sm:col-span-3">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Name</span>
                </label>
                <div className="lg:mt-2">
                  <input 
                    id="name"
                    type="text" 
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6"/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Email</span>
                </label>
                <div className="lg:mt-2">
                  <input
                    id="email" 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6"/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Phone</span>
                </label>
                <div className="lg:mt-2">
                  <input
                    id="phone" 
                    type="tel" 
                    name="phone" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6"/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Pickup / Delivery</span>
                </label>
                <div className="lg:mt-2 grid grid-cols-1">
                  <select 
                    value={deliveryMethod}
                    onChange={(e) => setDeliveryMethod(e.target.value)} 
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6">
                    <option value="">Select Option</option>
                    <option value="Pickup - Ganbatte">Pickup (Ganbatte)</option>
                    <option value="Pickup - Burbank">Pickup (Burbank)</option>
                    <option value="Delivery">Delivery</option>
                  </select>
                  <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                    <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Conditional Field */}
              {deliveryMethod === "Delivery" && (
                <div className='sm:col-span-full '>
                  <div className="sm:col-span-full ">
                    <label className="block text-sm font-medium text-gray-900">Delivery Address</label>
                    <input
                      type="text"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6"
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div>
                      <label className="block text-sm font-medium text-gray-900">City</label>
                      <input
                        type="text"
                        value={deliveryCity}
                        onChange={(e) => setDeliveryCity(e.target.value)}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-900">Zip Code</label>
                      <input
                        type="text"
                        value={deliveryZip}
                        onChange={(e) => setDeliveryZip(e.target.value)}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="sm:col-span-3">
                <label htmlFor="orderDate" className="block text-sm/6 text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Date Requested</label>                
                  <div className="lg:mt-2 grid grid-cols-2">
                    <div>
                      <input 
                        type='date' 
                        min={minDate} 
                        id="order" 
                        name="orderDate" 
                        value={orderDate}
                        onChange={(e) => setOrderDate(e.target.value)}
                        className="appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6">
                      </input>
                    </div>
                  </div>
              </div>

              <div className="sm:col-span-3">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Payment Method</span>
                </label>
                <div className="lg:mt-2 grid grid-cols-1">
                  <select 
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)} 
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6">
                    <option value="">Select Option</option>
                    <option value="Venmo">Venmo</option>
                    <option value="Zelle">Zelle</option>
                  </select>
                  <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                    <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Conditional Field */}
              {paymentImg[paymentMethod] && (
                <div className="col-span-full">
                  <img src={paymentImg[paymentMethod]} className='mx-auto w-2/5 shadow rounded-lg'/>
                </div>
              )}

              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">Additional Details</label>
                <div className="lg:mt-2">
                  <textarea 
                    id="comments" 
                    name="comments"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6" />
                </div>
              </div>              
            </div>
          </div>
          <div className="mt-6 max-sm:pb-4 flex items-center justify-end gap-x-2">
            <button
              onClick={handleCancel} 
              type="button" 
              className="text-sm font-semibold px-2 py-2 font-semibold text-gray-900 hover:bg-sage hover:rounded-md cursor-pointer">
                Cancel
            </button>
            <button
              disabled={!formIsValid}
              onClick={handleSubmit}
              type="button" 
              className={`rounded-md bg-darker-sage px-3 py-2 text-sm font-semibold text-white hover:bg-sage
                ${!formIsValid ? "cursor-not-allowed" : "cursor-pointer"}`}>
                Send
            </button>
          </div>
        </form>
      </div>

      {/* Right Side */}
      <div className='lg:h-screen lg:w-1/2 pt-8 lg:pl-8 border-solid lg:border-l-2 border-sea-green'>
        <div className='max-sm:mx-auto max-sm:mb-4 bg-cream p-4 rounded lg:w-fit border-sea-green border-2'>
        {(
          items.map((it) => (
            <div
              key={`${it.productKey}|${it.orderSize}`}
              className="bg-white/60 rounded-xl mx-auto lg:mb-2 lg:mx-0 p-3 lg:px-3 lg:py-4 shadow w-9/10 ">
              <div className="relative flex gap-2">
                <div>                          
                  <img src={it.cartImg} className="max-sm:w-5/6 rounded-xl"/>
                </div>
                <div className="grid content-between lg:w-full">
                  <div>
                    <p className="max-sm:text-sm font-semibold text-gray-800">{it.productName}</p>
                  </div>                  
                  <div className="flex justify-between"> 
                    <p>{it.orderSize}</p>                          
                    <p>${(it.orderCost * it.quantity).toFixed(2)}</p>
                  </div>                          
                </div>
              </div>
            </div>
          ))
        )}
        <div className="border-t-2 border-honey p-4 lg:pt-3 mt-4 lg:mt-12 ">
          <div className="flex justify-end lg:justify-between text-xl font-bold text-sea-green">
            <span className='pr-6'>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default OrderForm