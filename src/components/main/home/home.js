import { motion, useDragControls } from 'framer-motion';
import Draggable from 'react-draggable';

import './home.css'

const Home = () => {
    const controls = useDragControls()

    function startDrag(event) {
        controls.start(event)
      }

    return (
        <motion.div className="home"
            key='home'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
        >  
            <motion.div className='home-brewery-section'>
                <motion.h1 initial={{x: -300, opacity: 0}}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.4, type: "spring" }}
                >Welcome to the Black Bears Brewery!
                </motion.h1>
                <motion.h2>Where every glass holds a story, every sip is an adventure, and every guest is a cherished part of our brewing family.</motion.h2>
            </motion.div> 
            
            <motion.div className='home-reposts-section'
                onPointerDown={startDrag}>
                
                <Draggable>
                    <img className='draggable-cards' src={require('../../../images/1stDragable.jpg')} alt='draggable card' />
                </Draggable>
                <motion.img 
                    drag="x y" 
                    dragControls={controls}
                    className='draggable-cards' 
                    src={require('../../../images/1stDragable.jpg')}>
                </motion.img>
                <motion.img 
                    drag="x y" 
                    dragControls={controls}
                    className='draggable-cards' 
                    src={require('../../../images/1stDragable.jpg')}>
                </motion.img>

            </motion.div>

        </motion.div>
    )
}

export default Home