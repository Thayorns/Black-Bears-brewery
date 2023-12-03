import { motion } from 'framer-motion';
import ReactFlow, { Background, Controls, applyNodeChanges, applyEdgeChanges, } from 'reactflow';
import { useState, useCallback } from 'react'

import 'reactflow/dist/style.css';
import './home.css'

const initialEdges = [
    { id: '1-3', source: '1', target: '3', type: "step" },
    { id: '1-4', source: '1', target: '4', type: 'step'},
    { id: '1-5', source: '1', target: '5', type: "step"},
]
const initialNodes = [
    {
        id: '1',
        type: 'input',
        position: { x: 100, y: -100 },
        data: {label: 
            <img className='draggable-cards'
            style={{width: '450px', height: '300px'}}
            src={require('../../../images/teamWork.jpg')} alt='draggable card' 
            />}
    },
    {
        id: '2',
        type: 'input',
        position: { x: -100, y: -220 },
        data: {label: 
            <img className='draggable-cards'
            style={{width: '450px', height: '300px'}}
            src={require('../../../images/teamWork2.jpg')} alt='draggable card' 
            />}
    },
    {
        id: '3',
        position: { x: -200, y: 200 },
        data: {label: <img className='draggable-cards' src={require('../../../images/2ndDragable.jpg')} alt='draggable card'/>
        }
    },
    {
        id: '4',
        position: { x: 200, y: 350 },
        data: {label: <img className='draggable-cards' src={require('../../../images/3rdDragable.jpg')} alt='draggable card' />}
    },
    {
        id: '5',
        position: { x: 400, y: -250 },
        data: {label: <img className='draggable-cards' src={require('../../../images/1stDragable.jpg')}  alt='draggable card' />}
    },
]

const Home = () => {
    
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    
        const onNodesChange = useCallback(
            (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
            [],
        )
        const onEdgesChange = useCallback(
            (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
            [],
        )
        

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
                    // initial={{x: -300, opacity: 0}}
                    // animate={{ x: 0, opacity: 1 }}
                    // transition={{ delay: 1.4, type: "spring" }}
                >Welcome to the Black Bears Brewery!
                </motion.h1>
                <motion.h2>Where every glass holds a story, every sip is an adventure, and every guest is a cherished part of our brewing family.</motion.h2>
            </motion.div> 
            
            <h3>Here are our brewers working together at the latest craft beer festival:</h3>
            <motion.div className='home-reposts-section'>
                <ReactFlow nodes={nodes} 
                    // zoomOnScroll={false} 
                    fitView
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}>
                    <Background />
                    <Controls />
                </ReactFlow>
            </motion.div>

            <motion.div className='home-pub-beers'>
                <p>
                    We are thrilled to announce that Black Bears Brewery craft beers are now being served in local pubs and bars!
                    Our carefully crafted brews, that hold the passion, flavor and tradition of our brewers,
                    have found their way into the hearts and mugs of local establishments.
                    So, rich and flavorful experiences now await you right in your neighborhood. 
                    Stop by, order a pint of your new favorite Black Bears brew, and enjoy the familiar comfort of your local pub with our signature touch.
                </p>
            </motion.div>

        </motion.div>
    )
}

export default Home