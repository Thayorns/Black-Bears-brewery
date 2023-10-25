import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import './nav.css'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <motion.nav className="nav">
        {/* <button onClick={toggleMenu}>Toggle Menu</button> */}
        <img src={require('../../images/bigLogo.jpg')}  alt="Black Bears brewery logo"/>
        {/* <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Our Beer</motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Contacts</motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Gallery</motion.li>
            </motion.ul>
          )}
        </AnimatePresence> */}
      </motion.nav>
    );
}

export default Nav