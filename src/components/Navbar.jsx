import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import logo from '../assets/images/logo-grn2.png';
import cart from '../assets/images/shopping-cart.png'
import trash from '../assets/images/bin.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);
  const navigate = useNavigate();
  const handleCheckoutClick = () => {
    setIsOpen(false);
    navigate('/order');
  }

  const location = useLocation();

  const { cartCount, items, removeItem, clearCart, cartTotal, incrementItem, decrementItem } = useCart();
  
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 mx-auto bg-[url(/src/assets/images/pattern.png)] bg-contain bg-frozen-water border-solid border-b-3 border-amber">
        <div className="relative flex flex-col lg:flex-row items-center justify-center my-2">

          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <img src={logo} className="absolute top-1 right-89/90 w-1/3"/>
              <Link to="/" className="text-sea-green font-(family-name:--font-milliard-heavy) mt-2 text-3xl lg:text-5xl">
                Flour <span className="inline-block text-base lg:text-3xl relative -top-1"> & </span> Flask
              </Link>
            </div>          
            <div className="flex space-x-4 mt-2 text-center text-sea-green uppercase tracking-tighter text-md lg:tracking-wide lg:text-2xl">            
              <Link to="/collection/dessertservice" className={`lg:pr-4 hover:text-amber ${location.pathname === '/collection/dessertservice' ? 'text-amber' : ''}`}>desserts</Link>
              <Link to="/collection/barservice" className={`lg:pr-4 hover:text-amber ${location.pathname === '/collection/barservice' ? 'text-amber' : ''}`}>drinks</Link>
              <Link to="/faq" className={`lg:pr-4 hover:text-amber ${location.pathname === '/faq' ? 'text-amber' : ''}`}>faqs</Link>
            </div>
          </div>

          <div className="absolute top-6 right-2 lg:top-4 lg:right-20 flex flex-row items-end">
            <div className="relative cursor-pointer pt-5" onClick={() => setIsOpen(true)}>
              <img src={cart} className="h-10 lg:bg-white border-solid lg:border-2 border-sea-green rounded-full "/>
              <div className="absolute top-3 -right-1 lg:top-3 lg:-right-1 w-5 h-5 flex items-center justify-center bg-sea-green rounded-full text-white text-xs font-semibold">{cartCount}</div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="h-full w-7/8 lg:w-1/4 flex flex-col bg-cream shadow-xl p-6 relative border-solid border-l-3 border-honey"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-4xl mt-2 text-gray-500 hover:text-gray-900 cursor-pointer"
                onClick={() => setIsOpen(false)}>
                ✕
              </button>
              <h2 className="text-4xl text-sea-green font-bold mb-4">Your Cart</h2>
              {/* Cart items */}
              <div className="flex-1 overflow-y-auto space-y-3">
                {items.length === 0 ? (
                  <p className="text-gray-600 italic">...it's empty!</p>
                ) : (
                  items.map((it) => (
                    <div
                      key={`${it.productKey}|${it.orderSize}`}
                      className="bg-white/60 border-2 border-honey rounded-xl p-3 shadow"
                    >
                      <div className="relative flex gap-2">
                        <div className="max-sm:max-w-[100px]">                          
                          <img src={it.cartImg} className="rounded-xl"/>                                                    
                        </div>

                        <div className="grid lg:h-25 content-between lg:w-full">
                          <div>
                            <p className="max-sm:text-sm font-semibold text-gray-800">{it.productName}</p>
                            <p className="max-sm:text-sm my-2">{it.orderSize}</p>
                          </div>
                          
                          <div className="flex justify-between"> 
                            <div className='w-fit text-sm/6 text-gray-800 font-semibold px-2 border-1 border-black rounded-full shadow' >
                              <button
                                onClick={() => decrementItem(it.productKey, it.orderSize)} 
                                className='mr-2 lg:mr-4 lg:text-lg/6 cursor-pointer'>-</button>
                              {it.quantity} 
                              <button
                                onClick={() => incrementItem(it.productKey, it.orderSize)} 
                                className='ml-2 lg:ml-3 lg:text-lg/6 cursor-pointer'>+</button>
                            </div>                           
                            <p>${(it.orderCost * it.quantity).toFixed(2)}</p>
                          </div>                          
                        </div>

                        <button
                          className="absolute -top-2 -right-2 lg:top-0 lg:right-0 text-sm text-gray-700 hover:text-gray-900 underline cursor-pointer"
                          onClick={() => removeItem(it.productKey, it.orderSize)}>
                          <img src={trash} className="h-5 w-5"/>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="border-t-2 border-honey pt-3 mt-3">
                <div className="flex justify-between text-xl font-bold text-sea-green">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Footer buttons */}
              <div className="pt-4">
                <button
                  onClick={handleCheckoutClick}
                  disabled={items.length === 0}
                  className="bg-sea-green disabled:opacity-50 text-white font-semibold text-xl px-2 py-2 mb-1 rounded-xl cursor-pointer w-full">
                  Checkout
                </button>

                <button
                  onClick={clearCart}
                  disabled={items.length === 0}
                  className="bg-light-honey disabled:opacity-50 text-gray-800 font-semibold text-lg px-2 py-2 rounded-xl cursor-pointer w-full border-3 border-honey">
                  Clear Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar