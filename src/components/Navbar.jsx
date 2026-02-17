import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import disco from '../assets/images/disco-ball-gold.png';
import cart from '../assets/images/shopping-cart.png'
import trash from '../assets/images/bin.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);
  const navigate = useNavigate();
  const handleCheckoutClick = () => {
    setIsOpen(false);
    navigate('/order');
  }

  const { cartCount, items, removeItem, clearCart } = useCart();

  
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 mx-auto px-2 bg-frozen-water sm:px-6 lg:px-8 border-solid border-b-3 border-amber">
        <div className="flex flex-row items-center justify-center my-4">
          <div className="flex flex-col items-center mr-20 lg:flex-row lg:items-end-safe">
            <img src={disco} className="w-[3rem] lg:mr-2 lg:w-[3rem]"/>
            <Link to="/about" className="text-sea-green font-(family-name:--font-milliard-heavy) mb-1 text-3xl lg:text-5xl">Toasted</Link>
          </div>          
          <div className="flex space-x-4 mr-10 text-sea-green uppercase tracking-tighter text-md lg:tracking-wide lg:text-2xl">            
            <Link to="/collection/dessertservice" className="lg:pr-4 hover:text-amber">desserts</Link>
            <Link to="/collection/barservice" className="lg:pr-4 hover:text-amber">drinks</Link>
            <Link to="/collection/photoservice" className="lg:pr-4 hover:text-amber">photobooth</Link>
            <Link to="/contact" className="lg:pr-4 hover:text-amber">contact</Link>
          </div>
          <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
            <img src={cart} className="h-10 bg-white border-solid border-2 border-sea-green rounded-full "/>
            <div className="absolute -top-2 -right-1 w-5 h-5 flex items-center justify-center bg-sea-green rounded-full text-white text-xs font-semibold">{cartCount}</div>
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
              className="h-full w-80 flex flex-col bg-cream shadow-xl p-6 relative border-solid border-l-3 border-honey"
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
                  <p className="text-gray-600 italic">Cart is empty.</p>
                ) : (
                  items.map((it) => (
                    <div
                      key={`${it.productKey}|${it.orderSize}`}
                      className="bg-white/60 border-2 border-honey rounded-xl p-3 shadow"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <p className="font-semibold text-gray-800">{it.productName}</p>
                          <img src={it.cartImg} className="rounded-xl"/>
                          <p className="text-sm text-gray-700">{it.orderSize}</p>
                          <p className="text-sm text-gray-700">Qty: {it.quantity}</p>
                        </div>

                        <button
                          className="text-sm text-gray-700 hover:text-gray-900 underline cursor-pointer"
                          onClick={() => removeItem(it.productKey, it.orderSize)}>
                          <img src={trash} className="w-10"/>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer buttons */}
              <div className="pt-4">
                <button
                  onClick={handleCheckoutClick}
                  disabled={items.length === 0}
                  className="bg-sea-green disabled:opacity-50 text-white font-semibold text-xl px-2 py-2 rounded-xl cursor-pointer w-full">
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