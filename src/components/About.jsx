import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from '../styles';
import {services} from './navlinks';
import {fadeIn,textVariant} from '../motion';

const Card=({title,icon})=>{
  return(
    <Tilt className='xs:w-[250px] w-full '>
      <motion.div
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ' 
      variants={fadeIn("right","spring",0.1,1)}>
     <div options={{max:45,}} className='w-full h-full'>
      <img src={icon} alt="icon" />
     </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {

  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h1 className={styles.sectionHeadText}>Overview</h1>
    </motion.div>
  
    <motion.p variants={fadeIn("","",0.1,1)}>
I'm a software engineer at google and I'm wesech in anna ekhtart elmagal dah
    </motion.p>

    <div className='mt-5 w-full flex flex-wrap gap-10'>
      {services.map((service)=>(<Card {...service}/>))}

    </div>
    </>
     ) 
    
    
}

    



export default About