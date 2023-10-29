import { motion , AnimatePresence } from "framer-motion"


import Gallery from './gallery/gallery'
import Contacts from './contacts/contacts'
import Beers from './beers/beers'
import Home from "./home/home"



import './main.css'

const Main = ({activePage}) => {

    
    return (
        <AnimatePresence mode="wait">
            {activePage === 'home' && (
                <motion.div key="home">
                    <Home />
                </motion.div>
            )}
            {activePage === 'beers' && (
                <motion.div key="beers">
                    <Beers />
                </motion.div>
            )}
            {activePage === 'contacts' && (
                <motion.div key="contacts">
                    <Contacts />
                </motion.div>
            )}
            {activePage === 'gallery' && (
                <motion.div key="gallery">
                    <Gallery />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Main