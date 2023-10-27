import { motion, useTransform } from 'framer-motion';


import './home.css'

const Home = () => {
    

    return (
        <motion.div className="home"
            key='beers'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div className="logo-wrapper">
                
                <motion.div className="img-logo-wrapper">
                    <img src={require('../../../images/bigLogo.jpg')}  alt="Black Bears brewery logo"/>
                </motion.div>
                <motion.div className="brewery-span-wrapper">
                    <span className="brewery-span">We brew beer for You and ourselves.<br/>Brew till it gains a soul and meaning.</span>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Home