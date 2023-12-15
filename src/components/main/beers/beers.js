import { motion } from "framer-motion";

import './beers.css'
  
  const cardVariants = {
    offscreen: {
    y: 300
    },
    onscreen: {
    y: 50,
    rotate: -10,
    transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
    }
    }
  }
  
  // const hue = (h) => `hsl(${h}, 100%, 50%)`
  


function Card({ img,title,span }) {
  // const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" 
        // style={{ background }} 
      />
      <motion.div className="card" variants={cardVariants}>
        {title}
        {span}
        {img}
      </motion.div>
    </motion.div>
  )
}


  
const beers = [
  [<img src={require('../../../images/citraDream.jpg')}alt=""/>,<h4>Citra Dream</h4>,<span>american pale ale</span> ],
  [<img src={require('../../../images/sidr.jpg')}alt=""/>, <h4>Варин сад</h4>,<span>cidr</span>],
  [<img src={require('../../../images/foreverHooligans.jpg')}alt=""/>, <h4>Forever Hooligans</h4>,<span>light unfiltered</span>],
  [<img src={require('../../../images/geekPicnicBeard.jpg')}alt=""/>, <h4>Geek Picnic</h4>,<span>pale ale</span>],
  [<img src={require('../../../images/lightEle.jpg')}alt=""/>, <h4>Light Ale</h4>,<span>light pale ale</span>],
  [<img src={require('../../../images/nightmarePaleEle.jpg')}alt=""/>, <h4>Night Mare</h4>,<span>pale ale</span>],
  [<img src={require('../../../images/parkalaIpa.jpg')}alt=""/>, <h4>Parkala</h4>,<span>indian pale ale</span>],
  [<img src={require('../../../images/stout.jpg')}alt=""/>, <h4>Dark Night</h4>,<span>stout</span>],
  [<img src={require('../../../images/wheatDream.jpg')}alt=""/>, <h4>Wheat Dream</h4>,<span>wheat ale</span>],
  [<img src={require('../../../images/marryXmas.jpg')}alt=""/>, <h4>New Year Edition</h4>,<span>wheat ale</span>],
]



const Beers = () => {
  return (
    <motion.div className="beers-wrapper"
        key='beers'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.6}}
    > 
      <div className="beers-cards">
        {
          beers.map(([img, title, span]) =>
            (
              <Card img={img} title={title} span={span} key={img} />
            )
          )
        }
      </div>
    </motion.div>
  )
}
export default Beers