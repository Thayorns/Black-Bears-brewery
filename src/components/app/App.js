import Main from "../main/main"
import Nav from "../nav/nav"
import Footer from "../footer/footer"
import { useState } from "react"

import './App.css'

function App() {
  
  const [activePage, setActivePage] = useState('home')
  // PAGE SWITCH
  const handlePageChoose = (page) => {
    setActivePage(page)
  }
  // ОТКРЫТИЕ - ЗАКРЫТИЕ БУРГЕР-контента
  const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    }    
  const toggleClose = () => {
    setIsOpen(false);
  }
  
  return (
    <div className="App">
      <Nav handlePageChoose={handlePageChoose}
        activePage={activePage}
        toggleOpen={toggleOpen}
        isOpen={isOpen}/>
      <Main activePage={activePage}
        toggleClose={toggleClose}/>
      <Footer />
    </div>
  );
}

export default App;
