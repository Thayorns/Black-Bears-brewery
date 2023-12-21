import { motion } from "framer-motion";
// import { Avatar } from 'antd'

import './contacts.css'

const Contacts = () => {
   
    const styles = {
        whileTap: {scale: 0.8},
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20 
        }
    }
    
      const links = [
        <a href="https://web.telegram.org/k/#@anxious_sketch" target='_blank' rel="noreferrer">
            <motion.button className="telegram-button"
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
            ></motion.button>
        </a>
        ,
        <a href="mailto:realsketch@gmail.com?subject=Big%20News&body=Hi,%0D%0A%0D%0A" title="realsketch@gmail.com" target='_blank' rel="noreferrer">
            <motion.button className="gmail-button"           
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
            ></motion.button>
        </a>,
        <a href="https://vk.com/id17187089" target='_blank' rel="noreferrer">
            <motion.button className="vk-button"
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.8 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
                }}
            ></motion.button>
        </a>
    ]
    const contacts = [
        [
            <div className="contact">
                <img className="contact-avatar" 
                    src={require('../../../images/VolodyaAvatar.jpg')}
                    alt=""
                />
                <div className="contact-info">
                    Hey!<br/>
                    I'm the Public Relations Minister.<br/>
                    Please contact me for any question!
                
                    <div className="contact-links">
                        {links.map(link => {return link})}
                    </div>
                </div>
            </div>,
            // 1
        ],
        [
            <div className="contact">
                <img className="contact-avatar" 
                    src={require('../../../images/mishaBull.jpeg')}
                    alt=""
                />
                <div className="contact-info">
                    Hey!<br/>
                    And i am the head brewer and ideological inspirer.<br/>
                    If suddenly the Public Relations Minister does not answer you -<br/>
                    he is fired!<br/>
                    Contact me directly.
                    <div className="contact-links">
                        <a href="mailto:forbull@gmail.com?subject=Big%20News&body=Hi,%0D%0A%0D%0A" title="forbull@gmail.com" target='_blank'rel="noreferrer">
                            <motion.button className="gmail-button" 
                                whileHover={{ scale: 1.2 }} 
                                whileTap={styles.whileTap}
                                transition={styles.transition}
                            ></motion.button>
                        </a>
                    </div>
                </div>
            </div>,
            // 2
        ]
    ]


    return (
        <motion.div className="contacts-wrapper"
            key='contacts'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            {contacts.map(contact => {
                return (
                    <motion.div className="contact-wrapper"
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        {contact}
                    </motion.div>
                )
            })}
        </motion.div>
    )
}

export default Contacts