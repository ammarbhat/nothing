import React from 'react'
import { motion } from 'framer-motion'
function Intro() {
    return (
        <div className='overflow-hidden'>
            
            <motion.img src="./nothing-ph2-1.jpg" className='object-cover w-full sm:h-full  mb-30 ' style={{ height: '560px' }}
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
            <motion.div className='h-20 w-full text-white text-4xl m-8 ml-4 text-center'
                whileInView={{
                    opacity: 1,
                }}
                initial={{
                    opacity: 0,
                }}
                transition={{
                    duration: 2
                }}
                viewport={{amount: 0.5, once: false}}
            >We make tech fun again.</motion.div>
            <div className='bg-gray-200'>
            <img src="./nothing-ph2-2.jpg" alt="" className='object-cover m-auto sm:h-full  mb-30 ' style={{ maxHeight: '560px' }} />
            </div>
            <div className='h-20 w-full text-gray-800 pt-5 text-4xl bg-gray-200 text-center'>Nothing Phone(2) is here.</div>

        </div>
    )
}

export default Intro