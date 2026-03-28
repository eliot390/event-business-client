// import { Link } from "react-router-dom";
import drink from '../assets/images/batchd.jpg'
import dessert from '../assets/images/cookies.jpg'
import { Link } from "react-router-dom"
import { motion, stagger } from "motion/react"

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
      className="flex flex-col pt-30 justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={fadeUp}
        className="w-7/8 lg:w-2/5 mb-4 p-4 bg-frozen-water/75 rounded-lg"
      >
        <p className="text-gray-600 text-lg text-center">
          Welcome to Flour & Flask! Whether you want to satisfy your sweet tooth with a fresh baked goodie, 
          or unwind with a <span className='italic'>"mix-your-own"</span> cocktail, we have your cravings covered!
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 max-sm:w-7/8 justify-items-center pb-4 lg:grid-cols-2 gap-6 lg:mb-5 lg:mt-5"
      >
        <motion.div variants={cardVariants}>
          <Link to="/collection/dessertservice">
            <motion.div
              whileHover={{ y: -12, scale: 1.0 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group bg-frozen-water/75 border-solid  border-honey rounded overflow-hidden"
            >
              <motion.img
                src={dessert}
                alt="Homemade desserts"
                className="mx-auto w-7/8 rounded mt-4"
                transition={{ duration: 0.35 }}
              />
              <p className="text-gray-600 text-center text-sm lg:text-lg font-semibold py-4">Homemade desserts, perfect for any occasion.</p>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div variants={cardVariants}>
          <Link to="/collection/barservice">
            <motion.div
              whileHover={{ y: -12, scale: 1.0 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group bg-frozen-water/75 border-solid  border-honey rounded overflow-hidden"
            >
              <motion.img
                src={drink}
                alt="Handcrafted cocktails"
                className="mx-auto w-7/8 rounded mt-4"
                transition={{ duration: 0.35 }}
              />
              <p className="text-gray-600 text-center text-sm lg:text-lg font-semibold py-4">Handcrafted mixers, ready for your favorite cocktails.</p>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Services