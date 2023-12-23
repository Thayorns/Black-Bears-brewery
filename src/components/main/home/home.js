import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Carousel } from 'antd';

import './home.css'

const contentStyle = {
  height: 'auto',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
}
const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 10 : -10,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 10 : -10,
        opacity: 0
      }
    }
}
const images = [
    require('../../../images/teamWork.jpg'),
    require('../../../images/teamWork2.jpeg'),
]
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}
const Home = () => {
    
    const [[img, direction], setImg] = useState([0, 0])
    
    const imageIndex = wrap(0, images.length, img);
    
    const paginate = (newDirection) => {
        setImg([img + newDirection, newDirection])
    }
    
    const styles = {
        whileTap: {scale: 0.8},
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20 
        }
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
                <motion.h1   
                    whileTap={styles.whileTap}
                    transition={styles.transition}
                >Welcome to the Black Bears Brewery!
                </motion.h1>
                <motion.h2   
                    whileTap={styles.whileTap}
                    transition={styles.transition}
                >
                    Where every glass holds a story, every sip is an adventure, and every guest is a cherished part of our brewing family.</motion.h2>
            </motion.div> 
            
            <h3>Here are our brewers working together at the latest craft beer festival:<br/>
                {/* <motion.div className="carousel-container">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img className="carousel-img"
                            key={img}
                            src={images[imageIndex]}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                // e.preventDefault()
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                                }
                            }}
                        />
                    </AnimatePresence>
                    <div className="next" onClick={() => paginate(1)}>
                        {"‣"}
                    </div>
                    <div className="prev" onClick={() => paginate(-1)}>
                        {"‣"}
                    </div>
                </motion.div> */}
                <Carousel autoplay >
                    <div className="carousel-container">
                        <img className="carousel-img" alt=""src={require('../../../images/teamWork.jpg')} style={contentStyle}/>
                    </div>
                    <div className="carousel-container">
                        <img className="carousel-img" alt=""src={require('../../../images/teamWork2.jpeg')} style={contentStyle}/>
                    </div>
                    
                </Carousel>
            </h3>

            <motion.div className='home-pub-beers'>
                <motion.p whileTap={styles.whileTap}
                    transition={styles.transition}>
                    We are thrilled to announce that Black Bears Brewery craft beers are now being served in local pubs and bars!
                    Our carefully crafted brews, that hold the passion, flavor and tradition of our brewers,
                    have found their way into the hearts and mugs of local establishments.
                    So, rich and flavorful experiences now await you right in your neighborhood. 
                    Stop by, order a pint of your new favorite Black Bears brew, and enjoy the familiar comfort of your local pub with our signature touch.
                </motion.p>
            </motion.div>

        </motion.div>
    )
}

export default Home