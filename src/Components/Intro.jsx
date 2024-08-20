import React from 'react'
import { motion } from 'framer-motion'
function Intro() {
    return (
        <div className='overflow-hidden'>

            <motion.img src="./nothing-ph2-1.jpg" className='object-cover w-full sm:h-full  mb-30 ' style={{ height: '660px' }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                initial={{
                    opacity: 0,
                    scale: 0.9
                }}
                transition={{
                    duration: 5
                }}
            />
            <motion.div className='h-20 w-auto text-white text-4xl m-auto ml-4 mb-8 text-center'
                whileInView={{
                    opacity: 1,
                }}
                initial={{
                    opacity: 0,
                }}
                transition={{
                    duration: 2
                }}
                viewport={{ amount: 0.5, once: false }}
            >We make tech fun again.</motion.div>
            <div className='bg-gray-200' style={{height: '900px'}} >
                <img src="./nothing-ph2-2.jpg" alt="" className='object-cover m-auto mt-20 sm:h-full' style={{height: '600px'}}/>
           
            <div className='h-12 w-full text-gray-800 pt-20 text-4xl bg-gray-200 text-center'>Nothing Phone(2) is here.</div>
            </div>
        </div>
    )
}

export default Intro