import { motion } from "framer-motion";
import './gallery.css'

const Gallery = () => {


    return (
        <motion.div className="gallery-wrapper"
            key='gallery'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
             {/* Код для компонента */}
        </motion.div>
    )
}

export default Gallery