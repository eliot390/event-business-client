import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from '../context/CartContext';

const OrderForm = () => {
  const minDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate()+2);
    return date.toISOString().split("T")[0];
  }, []);

  const [deliveryMethod, setDeliveryMethod] = useState("");

  const { items, cartTotal } = useCart();

  const faqs = [
    {
      question: "How do I pay you?",
      answer: "We glady accept Venmo"
    },
    {
      question: "How far do you deliver?",
      answer: "We are currently able to deliver in a 5 mile radius in Burbank/Glendale."
    },
    {
      question: "Can I put in a custom order for XYZ?",
      answer: "Sure, let's discuss options! You can email us at support@example.com."
    },
    {
      question: "Do you offer gluten free or other dietary options?",
      answer: "Modifications are possible. Email us at support@example.com"
    }
  ]
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }


  return (
    <div className='flex flex-row justify-center'>
      {/* Left Side */}
      <div className='flex flex-col items-end bg-light-frozen pt-4 pr-8 mt-4 h-screen w-1/2 rounded-sm'>
        <form className='w-lg'>
          <div>
            <h2 className="text-gray-900 text-center text-3xl mt-4">Order Form</h2>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="sm:col-span-3">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Name</span>
                </label>
                <div className="mt-2">
                  <input 
                    id="first-name"
                    type="text" 
                    name="first-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6"/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Email</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email" 
                    type="email" 
                    name="email" 
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6"/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Phone</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email" 
                    type="email" 
                    name="email" 
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6"/>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label>
                  <span className="text-sm/6 font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Pickup / Delivery</span>
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select 
                    value={deliveryMethod}
                    onChange={(e) => setDeliveryMethod(e.target.value)} 
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6">
                    <option value="">Select Option</option>
                    <option value="Ganbatte">Pickup (Ganbatte)</option>
                    <option value="Burbank">Pickup (Burbank)</option>
                    <option value="Delivery">Delivery</option>
                  </select>
                  <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                    <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Conditional Field */}
              {deliveryMethod === "Delivery" && (
                <div className="sm:col-span-full mt-4">
                  <label className="block text-sm font-medium text-gray-900">Delivery Address</label>
                  <input
                    type="text"
                    placeholder="Enter delivery address"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6"
                  />
                </div>
              )}

              <div className="col-span-full col-start-1">
                <label for="orderDate" className="block text-sm/6 text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Date Requested</label>                
                  <div className="mt-2 grid grid-cols-2">
                    <div>
                      <input 
                        type='date' 
                        min={minDate} 
                        id="order" 
                        name="orderDate" 
                        className="appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6">
                      </input>
                    </div>
                  </div>                
              </div>

              <div className="col-span-full">
                <label for="street-address" className="block text-sm/6 font-medium text-gray-900">Additional Details</label>
                <div className="mt-2">
                  <textarea 
                    id="additional-info" 
                    type="text" 
                    name="additional-info" 
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 focus:outline-3 focus:outline-sea-green sm:text-sm/6" />
                </div>
              </div>
              
            </div>
          </div>        
          <div className="mt-6 flex items-center justify-end gap-x-2">
            <button type="button" className="text-sm font-semibold px-2 py-2 font-semibold text-gray-900 hover:bg-sage hover:rounded-md cursor-pointer">Cancel</button>
            <button type="submit" className="rounded-md bg-darker-sage px-3 py-2 text-sm font-semibold text-white hover:bg-sage cursor-pointer">Send</button>
          </div>
        </form>

        <div className="w-lg">
          {faqs.map((faq, index) => (
            <motion.div key={index} className="border-b border-gray-900/10">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left py-4 flex justify-between items-center hover:cursor-pointer focus:outline-none">
                <span className="font-medium">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  className="font-bold text-xl text-gray-900/50 transition-transform">+</motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden">
                    <p className="text-gray-700 py-2">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
      {/* Right Side */}
      <div className='mt-8 h-screen w-1/2 pt-8 pl-8 border-solid border-l-1 border-sea-green'>
        {(
          items.map((it) => (
            <div
              key={`${it.productKey}|${it.orderSize}`}
              className="bg-white/60 rounded-xl p-3 shadow w-3/5">
              <div className="flex flex-row justify-between items-center">
                <img src={it.cartImg} className="rounded-xl h-20 mr-10"/>
                <div className='flex flex-col items-center'>
                  <p className="font-semibold text-gray-800">{it.productName}</p>
                  <p className="text-gray-700">{it.quantity} x {it.orderSize}</p>
                </div>
                <p>${it.orderCost.toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
        <div className="border-t-2 border-honey pt-3 mt-20 w-3/5">
          <div className="flex justify-between text-xl font-bold text-sea-green">
            <span>Total:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default OrderForm