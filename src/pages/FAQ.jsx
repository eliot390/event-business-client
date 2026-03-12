import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FAQ = () => {
  const dessertfaqs = [
    {
      question: "Allergen List",
      answer: "Our cookies are made by hand using shared equipment, which processes dairy, eggs, soy, wheat, peanuts, and other tree nuts. If you have a severe allergy, please know that while I do my best to prevent cross-contamination, I can't guarantee 100% allergen-free."
    },
    {
      question: "Cookie Care",
      answer: "Cookies may be stored in an airtight container for up to one week or frozen if not enjoyed immediately. For maximum enjoyment, warm the cookie in the microwave for 15-20 seconds!"
    },
    {
      question: "Pie Care",
      answer: "Pies should be stored in the fridge for up to one week. Freezing is not recommended for most pies."
    },
    {
      question: "Do you offer gluten free or other dietary options?",
      answer: "Modifications are possible. Email me for more details."
    },
    {
      question: "Do you make cakes/cupcakes?",
      answer: "Cakes and cupcakes are not currently on the menu, but may appear soon."
    }
  ]

  const cocktailfaqs = [
    {
      question: "What are pre-batched cocktails?",
      answer: "Our pre-batched cocktails are handcrafted, small-batch drinks made in advance using premium spirits and fresh ingredients. They're ready to pour and enjoy."
    },
    {
      question: "Do your cocktails need to be refrigerated?",
      answer: "Yes. Please keep refrigerated until ready to serve unless otherwise noted."
    },
    {
      question: "How many cocktails do I need for a party of 20?",
      answer: "Consumption per guest can vary, but here are some guidelines that may help: If no other alcohol is provided (beer/wine), assume two 3oz. drinks per person. In this case, four 32oz. bottles."
    },
    {
      question: "Is this legal?",
      answer: "What are you, a cop?"
    },
  ]

  const faqs = [
    {
      question: "How do I pay you?",
      answer: "I gladly accept Venmo or Zelle. Payment information is available on the order form when ready to check-out."
    },
    {
      question: "How far in advance do I need to put an order in?",
      answer: "I respectfully require at least 2 days notice before the intended delivery/pick-up date to ensure the best service!"
    },
    {
      question: "How far do you deliver?",
      answer: "I am currently able to deliver in about a 5 mile radius around Burbank/Glendale."
    },
    {
      question: "Can I put in a custom order for XYZ?",
      answer: "Sure, let's discuss options! You can email me for more details."
    },
    {
      question: "Can you cater my event?",
      answer: "Sure, let's discuss options! You can email me for more details."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const [openDessertIndex, setOpenDessertIndex] = useState(null)
  const toggleD = (dessertIndex) => {
    setOpenDessertIndex(openDessertIndex === dessertIndex ? null : dessertIndex)
  }

  const [openCocktailIndex, setOpenCocktailIndex] = useState(null)
  const toggleC = (cocktailIndex) => {
    setOpenCocktailIndex(openCocktailIndex === cocktailIndex ? null : cocktailIndex)
  }

  return (
    <div>
      <div className="pt-28 pb-10 px-4 lg:pt-40 lg:w-2xl lg:mx-auto">
        <div className="bg-white/85 pt-4 px-4 border-sea-green border-2 rounded">
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-center font-bold">Dessert FAQs</p>
            {dessertfaqs.map((dessertFaq, dessertIndex) => (
              <motion.div key={dessertIndex}
                  className="border-b border-sea-green">
                <button
                  onClick={() => toggleD(dessertIndex)}
                  className="w-full text-left py-4 flex justify-between items-center focus:outline-none cursor-pointer">
                  <span className="font-medium">{dessertFaq.question}</span>
                  <motion.span
                    key={openDessertIndex === dessertIndex ? "minus" : "plus"}
                    className="font-bold text-xl text-gray-900/50"
                  >
                    {openDessertIndex === dessertIndex ? "-" : "+"}
                    </motion.span>
                </button>

                <AnimatePresence>
                  {openDessertIndex === dessertIndex && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden">
                      <p className="w-7/8 text-gray-700 py-2">{dessertFaq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-center font-bold mt-10">Drinks FAQs</p>
            {cocktailfaqs.map((cocktailFaq, cocktailIndex) => (
              <motion.div key={cocktailIndex}
                  className="border-b border-sea-green">
                <button
                  onClick={() => toggleC(cocktailIndex)}
                  className="w-full text-left py-4 flex justify-between items-center focus:outline-none cursor-pointer">
                  <span className="font-medium">{cocktailFaq.question}</span>
                  <motion.span
                    key={openCocktailIndex === cocktailIndex ? "minus" : "plus"}
                    className="font-bold text-xl text-gray-900/50"
                  >
                    {openCocktailIndex === cocktailIndex ? "-" : "+"}
                    </motion.span>
                </button>

                <AnimatePresence>
                  {openCocktailIndex === cocktailIndex && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden">
                      <p className="w-7/8 text-gray-700 py-2">{cocktailFaq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-center font-bold mt-10">General FAQs</p>
            {faqs.map((faq, index) => (
              <motion.div key={index}
                  className={`border-sea-green ${index !== faqs.length -1 ? "border-b" : ""}`}>
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left py-4 flex justify-between items-center focus:outline-none cursor-pointer">
                  <span className="font-medium">{faq.question}</span>
                  <motion.span
                    key={openIndex === index ? "minus" : "plus"}
                    className="font-bold text-xl text-gray-900/50"
                  >
                    {openIndex === index ? "-" : "+"}
                    </motion.span>
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
      </div>
    </div>
  )
}

export default FAQ