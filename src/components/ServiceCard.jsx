import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceCard = ({ title, description, image, menuText, pricingText}) => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div className="h-52 flex flex-col justify-center items-center rounded-t-xl overflow-hidden">
          <img src={image} className="md:w-full object-contain transition duration-300 ease-in-out hover:scale-105" />
        </div>
        <div className="p-4 md:p-6">
          <h3 className="text-center text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          <button
            onClick={() => setIsOpen('menu')}
            className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
            Menu
          </button>
          <button
            onClick={() => setIsOpen('pricing')}
            className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
            Pricing
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/10 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(null)}
          >
            <motion.div
              className="bg-white dark:bg-neutral-900 rounded-md p-6 w-80 shadow-lg relative border border-solid text-center w-96"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(null)}
              >
                ✕
              </button>              
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {isOpen === 'menu' ? menuText : pricingText}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceCard;
