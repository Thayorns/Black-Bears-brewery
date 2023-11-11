import { motion } from 'framer-motion';


import './home.css'

const Home = () => {

    return (
        <motion.div className="home"
            key='home'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            
                
                <motion.div className="brewery-span-wrapper">
                    <p className="brewery-span">Welcome to our brewery, where every glass holds a story, every sip is an adventure, and every guest is a cherished part of our brewing family.</p><br/>
                    <p className="brewery-span">Step into our brewery and let the flavors of crafted perfection and the spirit of camaraderie surround you. Here, every pour is a celebration, and every visitor is a valued member of our brewing community.</p>
                </motion.div>
                <motion.div className="img-logo-wrapper">
                    <img src={require('../../../images/bigLogo.jpg')}  alt="Black Bears brewery logo"/>
                </motion.div>
                
            
        </motion.div>
    )
}

export default Home