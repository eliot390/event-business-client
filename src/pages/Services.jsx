import chocoChip from '../assets/images/desserts/choco-chip.jpg'
import coconutPie from '../assets/images/desserts/coconut.jpg'
import bananaSplitCookie from '../assets/images/desserts/bananaSplit.jpg'
import leches from '../assets/images/desserts/leches.png'
import { useEffect, useState, useRef } from 'react'
import { motion, stagger, AnimatePresence } from "motion/react"

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

const slides = [
  { image: chocoChip, alt: "Chocolate chip cookie" },
  { image: coconutPie, alt: "Coconut pie" },
  { image: bananaSplitCookie, alt: "Banana split cookie" },
  { image: leches, alt: "Tres leches dessert" },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slide = carousel.children[current];
    if (!slide) return;

    slide.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
  }, [current]);

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
        className="w-7/8 lg:w-4xl mb-4 p-1 lg:p-6 bg-cream/85 border-sea-green border-solid border-3 rounded-xl"
      >
        <p className="text-gray-600 lg:text-lg font-semibold text-center ">Flour & Flask is a small batch, neighborhood dessert shop located in the heart of Burbank. 
          <br/>From giant ooey gooey chocolate chip cookies to super indulgent pies, everything is baked fresh & ready to satisfy!</p>
      </motion.div>

       {/* AUTO-FADE CAROUSEL */}
      <motion.div
        variants={cardVariants}
        className="relative w-7/8 md:w-1/3 2xl:w-1/4 mt-8 overflow-hidden p-6 bg-cream/85 border-sea-green border-solid border-3 rounded-xl"
      >
        <div className="relative h-40 md:h-64">
          <AnimatePresence initial={false}>
            <motion.img
              key={current}
              src={slides[current].image}
              alt={slides[current].alt}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </AnimatePresence>
        </div>
      </motion.div>      
    </motion.section>
  )
}

export default Services