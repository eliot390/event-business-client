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
    }
  ]

  const faqs = [
    {
      question: "How do I pay you?",
      answer: "I gladly accept Venmo or Zelle. Payment information is available on the order form when ready to check-out."
    },
    {
      question: "How far do you deliver?",
      answer: "I am currently able to deliver in about a 5 mile radius around Burbank/Glendale."
    },
    {
      question: "Can I put in a custom order for XYZ?",
      answer: "Sure, let's discuss options! You can email me for more details."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const [openDIndex, setOpenDIndex] = useState(null)
  const toggleD = (dindex) => {
    setOpenDIndex(openDIndex === dindex ? null : dindex)
  }

  return (
    <div>
      <div className="mt-28 px-4 lg:mt-40 lg:w-2xl lg:mx-auto">
        <div>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-center font-bold">Dessert FAQs</p>
            {dessertfaqs.map((dfaq, dindex) => (
              <motion.div key={dindex}
                  className="border-b border-gray-900/10">
                <button
                  onClick={() => toggleD(dindex)}
                  className="w-full text-left py-4 flex justify-between items-center focus:outline-none cursor-pointer">
                  <span className="font-medium">{dfaq.question}</span>
                  <motion.span
                    key={openDIndex === dindex ? "minus" : "plus"}
                    className="font-bold text-xl text-gray-900/50"
                  >
                    {openDIndex === dindex ? "−" : "+"}
                    </motion.span>
                </button>

                <AnimatePresence>
                  {openDIndex === dindex && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden">
                      <p className="w-7/8 text-gray-700 py-2">{dfaq.answer}</p>
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
                  className="border-b border-gray-900/10">
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left py-4 flex justify-between items-center focus:outline-none cursor-pointer">
                  <span className="font-medium">{faq.question}</span>
                  <motion.span
                    key={openIndex === index ? "minus" : "plus"}
                    className="font-bold text-xl text-gray-900/50"
                  >
                    {openIndex === index ? "−" : "+"}
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