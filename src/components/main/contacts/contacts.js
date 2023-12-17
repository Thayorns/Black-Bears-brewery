import { motion } from "framer-motion";
import './contacts.css'

const Contacts = () => {


    return (
        <motion.div className="contacts-wrapper"
            key='contacts'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div className="minister-contact">
                <h2 className="minister-paragraph">
                    <img className="minister-avatar" src={require('../../../images/VolodyaAvatar.jpg')}alt=""/>
                    Hey!<br/>
                    I'm the Public Relations Minister,<br/>
                    please contact me for any question!
                </h2>
                <p>
                    <motion.button></motion.button>
                    <motion.button></motion.button>
                    <motion.button></motion.button>
                </p>
            </motion.div>  
        </motion.div>
    )
}

export default Contacts