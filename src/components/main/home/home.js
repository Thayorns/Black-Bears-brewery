import { motion } from 'framer-motion';


import './home.css'

const Home = () => {
    // const {scrollY} = useScroll()
    // const bgWrapper = useTransform(scrollY, [0, window.innerHeight], [0, -150])
    // const bgWrapper = useTransform(scrollY, [0, 800], [1, 0.8])

    return (
        <motion.div className="home"
            key='home'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            // style={{ scale: bgWrapper }}
        >
            <motion.div className="logo-wrapper">
                
                <motion.div className="brewery-span-wrapper">
                    <span className="brewery-span">We brew beer for You and ourselves.<br/>Brew till it gains a soul and the meaning.</span>
                </motion.div>
                <motion.div className="img-logo-wrapper">
                    <img src={require('../../../images/bigLogo.jpg')}  alt="Black Bears brewery logo"/>
                </motion.div>
                
            </motion.div>
        </motion.div>
    )
}

export default Home