import { motion } from 'framer-motion';
import ReactFlow, { Background, Controls, applyNodeChanges, applyEdgeChanges, } from 'reactflow';
import { useState, useCallback } from 'react'

import 'reactflow/dist/style.css';
import './home.css'

const initialEdges = [
    { id: '1-2', source: '1', target: '2', type: "step" },
    { id: '1-3', source: '1', target: '3', type: 'step'},
    { id: '1-4', source: '1', target: '4', type: "step"},
]
const initialNodes = [
    {
        id: '1',
        type: 'input',
        position: { x: 0, y: -100 },
        data: {label: 
            <img className='draggable-cards'
            style={{width: '650px', height: '500px'}}
            src={require('../../../images/teamWork.jpg')} alt='draggable card' 
            />}
    },
    {
        id: '2',
        position: { x: -200, y: 200 },
        data: {label: <img className='draggable-cards' src={require('../../../images/2ndDragable.jpg')} alt='draggable card'/>
        }
    },
    {
        id: '3',
        position: { x: 200, y: 350 },
        data: {label: <img className='draggable-cards' src={require('../../../images/3rdDragable.jpg')} alt='draggable card' />}
    },
    {
        id: '4',
        position: { x: 600, y: -150 },
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
                <motion.h1 initial={{x: -300, opacity: 0}}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.4, type: "spring" }}
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

        </motion.div>
    )
}

export default Home