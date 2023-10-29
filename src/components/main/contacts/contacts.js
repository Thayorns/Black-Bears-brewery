import { motion } from "framer-motion";
import './contacts.css'

const Contacts = () => {


    return (
        <motion.div className="contacts-wrapper"
            key='contacts'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            
        </motion.div>
    )
}

export default Contacts