import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FAQ = () => {
  const dessertfaqs = [
    {
      question: "Allergen List",
      answer: "Our cookies are made by hand using shared equipment, which processes dairy, eggs, soy, wheat, peanuts, and other tree nuts. If you have a severe allergy, please know that while we do our best to prevent cross-contamination, we can't guarantee 100% allergen-free."
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
      answer: "Modifications are possible. Email us at support@example.com"
    }
  ]

  const faqs = [
    {
      question: "How do I pay you?",
      answer: "We glady accept Venmo or Zelle. Payment information is available on the order form when ready to check-out."
    },
    {
      question: "How far do you deliver?",
      answer: "We are currently able to deliver in a 5 mile radius in Burbank/Glendale."
    },
    {
      question: "Can I put in a custom order for XYZ?",
      answer: "Sure, let's discuss options! You can email us at support@example.com."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <div className="mt-18 w-2xl mx-auto">
        <div className="pb-12 px-4 py-4 sm:px-6 lg:px-8 lg:py-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Your questions, answered</h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">Answers to the most frequently asked questions.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-center font-bold">Dessert FAQs</p>
            {dessertfaqs.map((dfaq, dindex) => (
              <motion.div key={dindex}
                  className="border-b border-gray-900/10">
                <button
                  onClick={() => toggle(dindex)}
                  className="w-full text-left py-4 flex justify-between items-center focus:outline-none">
                  <span className="font-medium">{dfaq.question}</span>
                  <motion.span
                    key={openIndex === dindex ? "minus" : "plus"}
                    className="font-bold text-xl text-gray-900/50"
                  >
                    {openIndex === dindex ? "−" : "+"}
                    </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === dindex && (
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
                  className="w-full text-left py-4 flex justify-between items-center focus:outline-none">
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