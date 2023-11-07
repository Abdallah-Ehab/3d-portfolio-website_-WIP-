import React,{useState,useEffect} from 'react'
import {styles} from '../styles.js'
import { Link } from 'react-router-dom'
import {AE,close,menu} from '../assets'
import {navLinks} from './navlinks.js'

const Navbar = () => {
  const [active,SetActive] = useState('');
  const [toggle,Settoggle]=useState(false);
  return (
    
    <nav className= {`${styles.paddingX} w-full flex items-center justify-center fixed top-0 z-20 violet-gradient`}>
      <div className='relative w-full flex justify-between items-center'>
        <Link to='/' className='flex items-center w-max-xl' onClick={()=>{
          SetActive("");
          window.scrollTo(0,0);
        }}>
          <img src={AE} alt="logo" className='my-5 w-20 h-20 object-contain'/>
        </Link>
        <ul className='flex gap-9 list-none hidden sm:flex'>
          {navLinks.map((link)=>(
          
          <li 
          key={link.id}
          className={`${active === link.title ? "text-white":"text-secondary"} 
          hover:text-white text[18px] font-medium cursor-pointer`} 
          onClick={
            ()=>{SetActive(link.title)}
          }>
           
            <a href={`#${link.id}`}>{link.title} </a>
          
          </li>

          ))}
    
        </ul>

        <div className='flex flex-1 justify-end items-center sm:hidden'>
          <img onClick={()=>{Settoggle(!toggle)}}
          className='cursor-pointer object-contain'
          src={toggle?close:menu} alt="toggle" />
          
          <div className={`${!toggle?'hidden':'flex'} absolute right-0 top-20 p-6 my-2 min-w-[140px] black-gradient z-10 rounded-xl`}>
          <ul className='flex flex-col items-start gap-4 list-none'>
          {navLinks.map((link)=>(
          
          <li 
          key={link.id}
          className={`${active === link.title ? "text-white":"text-secondary"} 
          hover:text-white text[18px] font-medium cursor-pointer`} 
          onClick={
            ()=>{
              SetActive(link.title)
              Settoggle(!toggle)
            }
          }>
           
            <a href={`#${link.id}`}>{link.title} </a>
          
          </li>

          ))}
    
        </ul>
          </div>
        </div>
      </div>
    </nav>
    )
}
export default Navbar