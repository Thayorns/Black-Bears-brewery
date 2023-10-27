import { motion ,useScroll } from "framer-motion"
import { useState } from "react"
import { Avatar } from 'antd'

import './nav.css'

const Nav = () => {
    const avatar = <img src={require('../../images/smallLogo.png')}  alt="Black Bears brewery logo"/>
    const { scrollYProgress } = useScroll()
    
    return (
      <motion.div>
        
        <motion.nav className="nav">
          <Avatar size={90} icon={avatar}/>
        </motion.nav>
        
        <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
        />
      </motion.div>
    );
}

export default Nav