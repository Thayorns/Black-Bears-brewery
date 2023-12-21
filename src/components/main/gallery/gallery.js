import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import './gallery.css'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section>
        <motion.div ref={ref}
            // whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        >
        <img src={require(`./gallery-images/${id}.jpg`)}
            alt="brewery life" />
      </motion.div>
      <motion.h2 style={{ y }}>{`#${id}`}</motion.h2>
    </section>
  )
}

const Gallery = () => {
    // const { scrollYProgress } = useScroll()
    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    // })

    return (
        <motion.div className="gallery-wrapper"
            key='gallery'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((image) => (
                <Image id={image} />
            ))}
        </motion.div>
    )
}

export default Gallery