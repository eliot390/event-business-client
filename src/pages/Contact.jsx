import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Contact = () => {
  const faqs = [
    {
      question: "Who are you people?",
      answer: "You can return any item within 30 days of purchase."
    },
    {
      question: "What are you doing in my house?",
      answer: "Yes, we ship worldwide with tracking."
    },
    {
      question: "How can I contact support?",
      answer: "You can email us at support@example.com."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide with tracking."
    },
    {
      question: "How can I contact support?",
      answer: "You can email us at support@example.com."
    }
  ]
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <div className='mx-auto mt-24 mb-8 w-xl'>
        <form>        
          <div className="">
            <h2 className="text-gray-900 text-center text-3xl">Let's Connect!</h2>
            <p className="mt-1 text-sm/6 text-gray-600 text-center">We can't wait to help plan an awesome event for you</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label for="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
                <div className="mt-2">
                  <input id="first-name" type="text" name="first-name" autocomplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label for="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
                <div className="mt-2">
                  <input id="last-name" type="text" name="last-name" autocomplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" type="email" name="email" autocomplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label for="country" className="block text-sm/6 font-medium text-gray-900">Event Type</label>
                <div className="mt-2 grid grid-cols-1">
                  <select id="country" name="country" autocomplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Holiday</option>
                    <option>Wedding</option>
                    <option>Other</option>
                  </select>
                  <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                    <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label for="country" className="block text-sm/6 font-medium text-gray-900">Number of Guests</label>
                <div className="mt-2 grid grid-cols-1">
                  <select id="country" name="country" autocomplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <option>Up to 15</option>
                    <option>Up to 30</option>
                    <option>Up to 50</option>
                    <option>Over 50</option>
                  </select>
                  <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                    <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label for="date" className="block text-sm/6 font-medium text-gray-900">Event Date</label>
                <div className='mt-2 grid grid-cols-1'>
                  <input
                  type="date"
                  id="date"
                  name="date"
                  className="col-start-1 row-start-1 w-full rounded-md bg-white py-1.5 px-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>              
              </div>

              <div className="sm:col-span-2">
                <label for="postal-code" className="block text-sm/6 font-medium text-gray-900">Location</label>
                <div className="mt-2">
                  <input id="postal-code" type="text" name="postal-code" autocomplete="postal-code" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div className="col-span-full">
                <label for="street-address" className="block text-sm/6 font-medium text-gray-900">Additional Details</label>
                <div className="mt-2">
                  <textarea id="street-address" type="text" name="street-address" autocomplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>
              
            </div>
          </div>        
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
          </div>
        </form>
      </div>

      <div className="border-t border-gray-900/25 w-2xl mx-auto">
        <div className="pb-12 px-4 py-4 sm:px-6 lg:px-8 lg:py-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Your questions, answered</h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">Answers to the most frequently asked questions.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div key={index}
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }} 
                  className="border-b border-gray-900/10">
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left py-4 flex justify-between items-center focus:outline-none">
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
      </div>
    </div>
  )
}

export default Contact