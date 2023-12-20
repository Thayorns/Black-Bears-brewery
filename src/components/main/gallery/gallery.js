import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

import './gallery.css'

function useParallax( value, distance ) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image( id ) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section>
            <div ref={ref}>
                <img src={`/${id}.jpg`} alt="" />
            </div>
            <motion.h2 style={{ y }}>{`№${id}`}</motion.h2>
        </section>
    )
}
const Gallery = () => {


    return (
        <motion.div className="gallery-wrapper"
            key='gallery'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
             {/* Код для компонента */}
        </motion.div>
    )
}

export default Gallery