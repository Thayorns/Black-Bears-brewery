import { motion , AnimatePresence } from "framer-motion"
import { useEffect } from "react"

import Gallery from './gallery/gallery'
import Contacts from './contacts/contacts'
import Beers from './beers/beers'
import Home from "./home/home"



import './main.css'

const Main = ({activePage, toggleClose}) => {
    
    const pages = {
        home: <Home />,
        beers: <Beers />,
        contacts: <Contacts />,
        gallery: <Gallery />
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePage]);

    return (
        <AnimatePresence mode="wait" className='main'>
            {Object.keys(pages).map((page) => (
                activePage === page && (
                <motion.div key={page} onClick={toggleClose}>
                    {pages[page]}
                </motion.div>
                )
            ))}
        </AnimatePresence>
    )
}

export default Main