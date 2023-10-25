import { motion , AnimatePresence } from "framer-motion"
import Gallery from '../main/gallery/gallery'
import Contacts from '../main/contacts/contacts'
import Beers from '../main/beers/beers'
import Home from "./home/home"



import './main.css'

const Main = () => {


    return (
        <AnimatePresence mode="wait">
            <motion.div key="home">
                <Home />
            </motion.div>
            <motion.div key="beers">
                <Beers />
            </motion.div>
            <motion.div key="contacts">
                <Contacts />
            </motion.div>
            <motion.div key="gallery">
                <Gallery />
            </motion.div>
        </AnimatePresence>
    )
}

export default Main