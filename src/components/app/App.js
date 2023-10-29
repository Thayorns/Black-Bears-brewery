import Main from "../main/main"
import Nav from "../nav/nav"
import Footer from "../footer/footer"
import { useState } from "react"

import './App.css'

function App() {
  
  const [activePage, setActivePage] = useState('home')
  
  const handlePageChoose = (page) => {
    setActivePage(page)
  }
  
  
  return (
    <div className="App">
      <Nav handlePageChoose={handlePageChoose}/>
      <Main activePage={activePage}/>
      <Footer />
    </div>
  );
}

export default App;
