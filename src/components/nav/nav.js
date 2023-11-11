import { motion ,useScroll, AnimatePresence } from "framer-motion"
// import { HomeOutlined } from '@ant-design/icons'
import { Avatar,Breadcrumb } from 'antd'
// import { useEffect, useState } from "react"
import './nav.css'

const Nav = ({ handlePageChoose, activePage, toggleOpen, isOpen }) => {
   
    const avatar = <img src={require('../../images/smallLogo.png')}  alt="Black Bears brewery logo"/>
    const { scrollYProgress } = useScroll()
    const pages = [
      { key: 'home', title: 'Brewery' },
      { key: 'beers', title: 'Beer' },
      { key: 'contacts', title: 'Contact Us' },
      { key: 'gallery', title: 'Gallery' }
    ]
    const breadCrumb =  <Breadcrumb
                          items={pages.map(page => ({
                            title: (
                              <span
                                key={page.key}
                                className={activePage === page.key ? 'title active' : 'title'}
                                onClick={() => handlePageChoose(page.key)}
                              >
                                {page.title}
                              </span>
                            )
                          }))}
                        />


    return (
      <motion.div>
        
        <motion.nav className="nav">
          
          <Avatar size={60} icon={avatar}/>
          
          <button className="burger-button" onClick={toggleOpen}>
            <motion.span
              className="burger-line"
              initial={{ rotate: 0, y: 0 }}
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 15 : 0  }}
            ></motion.span>
            <motion.span
              className="burger-line"
              initial={{ opacity: 1 }}
              animate={{ opacity: isOpen ? 0 : 1 }}
            ></motion.span>
            <motion.span
              className="burger-line"
              initial={{ rotate: 0, y: 0 }}
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -15 : 0  }}
            ></motion.span>
          </button>
          
          {breadCrumb}
        </motion.nav>
        
        <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
        />
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div className="burger-content"
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -500, 
                transition: { delay: 0.05,
                  type: "spring"
                }
              }}
            >
              {pages.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0, transition:{duration: 0.4, delay: index * 0.1 }}}
                  exit={{ opacity: 0, x: -100 }}
                  className="menu-item"
                  onClick={() => {
                    handlePageChoose(item.key)
                    toggleOpen(item.key)
                  }
                  }
                >
                  <motion.div
                    className={activePage === item.key ? 'title active' : 'title'}
                  >
                    {item.title}
                  </motion.div>
                  
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
}

export default Nav