// import { Link } from "react-router-dom";
import drink from '../assets/images/batched.jpg'
import dessert from '../assets/images/cookies.jpg'

// const Services = () => {
//   return (
//     <div>
//       <div className="flex flex-col pt-40 justify-center items-center">
//         <div className="w-7/8 lg:w-2/5 mb-4 p-4 bg-white/75 rounded-lg">
//           <p className="text-lg text-center">Flour & Flask combines small-batch baked goods and handcrafted cocktails, 
//             because we decided that was a completely reasonable business idea and no one stopped us!
//             Order something sweet, add something spirited, and let us handle the rest.
//             Your treats (and your drinks) will be ready before you've decided which one you're excited about most.
//           </p>
//         </div>        
//         <div className="grid grid-cols-1 max-sm:w-7/8 justify-items-center pb-4 lg:grid-cols-2 gap-6 lg:mb-5 lg:mt-5">
//           <Link to='/collection/dessertservice'>
//             <div className='group transition bg-cream border-solid border-3 border-honey rounded duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
//               <img src={dessert} className='mx-auto w-7/8 rounded mt-4'/>
//               <p className='text-center text-sm lg:text-lg font-semibold py-2'>Homemade desserts, perfect for any occasion.</p>
//             </div> 
//           </Link>
//           <Link to='/collection/barservice'>
//             <div className='group transition bg-cream border-solid border-3 border-honey rounded duration-300 ease-in-out hover:-translate-y-4 hover:scale-100'>
//               <img src={drink} className='mx-auto w-7/8 rounded mt-4'/>
//               <p className='text-center text-sm lg:text-lg font-semibold py-2'>Handcrafted, pre-batched cocktails</p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Services

import { Link } from "react-router-dom"
import { motion, stagger } from "motion/react"
// import dessert from "..."
// import drink from "..."

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: stagger(0.18),
    },
  },
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const Services = () => {
  return (
    <motion.section
      className="flex flex-col pt-40 justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={fadeUp}
        className="w-7/8 lg:w-2/5 mb-4 p-4 bg-white/75 rounded-lg"
      >
        <p className="text-lg text-center">
          Flour & Flask combines small-batch baked goods and handcrafted
          cocktails, because we decided that was a completely reasonable
          business idea and no one stopped us! Order something sweet, add
          something spirited, and let us handle the rest. Your treats (and your
          drinks) will be ready before you've decided which one you're excited
          about most.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 max-sm:w-7/8 justify-items-center pb-4 lg:grid-cols-2 gap-6 lg:mb-5 lg:mt-5"
      >
        <motion.div variants={cardVariants}>
          <Link to="/collection/dessertservice">
            <motion.div
              whileHover={{ y: -12, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group bg-cream border-solid border-3 border-honey rounded overflow-hidden"
            >
              <motion.img
                src={dessert}
                alt="Homemade desserts"
                className="mx-auto w-7/8 rounded mt-4"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35 }}
              />
              <p className="text-center text-sm lg:text-lg font-semibold py-2">
                Homemade desserts, perfect for any occasion.
              </p>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div variants={cardVariants}>
          <Link to="/collection/barservice">
            <motion.div
              whileHover={{ y: -12, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group bg-cream border-solid border-3 border-honey rounded overflow-hidden"
            >
              <motion.img
                src={drink}
                alt="Handcrafted cocktails"
                className="mx-auto w-7/8 rounded mt-4"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35 }}
              />
              <p className="text-center text-sm lg:text-lg font-semibold py-2">
                Handcrafted, pre-batched cocktails
              </p>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Services