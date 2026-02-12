import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DessertProductCard = ({style, name, image, details}) => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      <div className="relative group flex flex-col w-full bg-white border-3 border-honey shadow-2xs rounded-xl">
        <div className="flex flex-col justify-center items-center rounded-t-lg overflow-hidden">
          <img src={image} className="md:w-full object-contain transition duration-300 ease-in-out hover:scale-105" />
        </div>
        <div className="ml-2 mb-16">
          <p className="italic text-gray-600">{style}</p>
          <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
        </div>
        <div className="absolute bottom-4 right-4 flex justify-end">
          <button
            onClick={() => setIsOpen('details')} 
            className="bg-light-honey hover:bg-honey text-gray-800 font-semibold py-1 px-3 border-2 border-amber rounded-full shadow cursor-pointer">Details</button>
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
              className="bg-white dark:bg-neutral-900 rounded-md p-6 w-80 shadow-lg relative border border-solid text-center w-fit"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setIsOpen(null)}
              >
                ✕
              </button>              
              <p className="text-gray-600 whitespace-pre-line">
                {isOpen === 'details' ? details : null}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default DessertProductCard;
