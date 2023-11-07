import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import  {Computers}  from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen'>
        <div className='absolute left-10 top-40 w-9 h-9'>
          <div className='flex flex-col justify-center items-cetner'>
            <div className='mx-auto w-3 h-3 rounded-full bg-[#915eff]'></div>
            <div className='mx-auto w-1 h-80 violet-gradient'></div>
          </div>
        </div>
        <Computers />

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        
        <a className='cursor-pointer' href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer'>
            <motion.div 
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
            }} 
            className='w-3 h-3 rounded-full bg-secondary mb-1 cursor-pointer'>
              
            </motion.div>
          </div>
        </a>

        </div>
    </section>

  )
}

export default Hero