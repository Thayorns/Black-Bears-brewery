import { motion ,useScroll } from "framer-motion"

import { Avatar } from 'antd'

import './nav.css'

const Nav = ({handlePageChoose}) => {
    const avatar = <img src={require('../../images/smallLogo.png')}  alt="Black Bears brewery logo"/>
    const { scrollYProgress } = useScroll()
    
    
    return (
      <motion.div>
        
        <motion.nav className="nav">
          <Avatar size={90} icon={avatar}/>
          <button onClick={() => handlePageChoose('home')}>Home</button>
          <button onClick={() => handlePageChoose('beers')}>Beers</button>
          <button onClick={() => handlePageChoose('contacts')}>Contacts</button>
          <button onClick={() => handlePageChoose('gallery')}>Gallery</button>
        </motion.nav>
        <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
        />
      </motion.div>
    );
}

export default Nav