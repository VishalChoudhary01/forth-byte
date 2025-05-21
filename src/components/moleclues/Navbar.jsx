import Logo from "./../atoms/Logo"
import {navbarMenu} from "./../../constants/index"
import { NavLink } from 'react-router'
import Toggle from '../atoms/Toggle'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { motion,AnimatePresence } from "motion/react";
const Navbar = ({isOpen,handleOpen}) => {

  
  return (
    <nav className='md:w-full md:h-14 w-full h-14 lg:py-2.5 py-2  lg:px-8 md:px-5 px-3   bg-NavBg fixed z-40 backdrop-blur-md dark:bg-NavDarkBg text-heading1 dark:text-dark-heading1 transition-all duration-300   flex items-center justify-between'>
      <Logo/>
      <ul className='md:flex hidden xl:gap-x-9  lg:gap-x-8 md:gap-x-6 lg:text-[1.05rem] md:text-[0.9rem]'>
        {
          navbarMenu.map((menu,indx)=>(
            <NavLink 
              to={menu.path}
              key={indx}
              className={({ isActive }) => 
  `relative pb-1 transition-all duration-300 font-Raleway hover:scale-105  
   hover:text-link-hover hover:dark:text-dark-link-hover
   ${
     isActive 
       ? 'text-link font-[500] dark:text-dark-link after:w-full after:bg-link dark:after:bg-dark-link after:animate-underlineExpand'
       : 'after:w-0 after:bg-transparent'
   }
   after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
}
            >
              {menu.name}
            </NavLink>
          ))
        }
      </ul>

       <div className="md:block hidden">
      <Toggle/>
        </div> 

       <motion.div
        
        onClick={handleOpen}
        whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
        className="md:hidden block text-2xl text-link dark:text-dark-link"
        >
         <AnimatePresence mode="wait">
    {isOpen ? (
      <motion.span
        key="close"
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="inline-block" 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }} 
      >
        <IoCloseOutline />
      </motion.span>
    ) : (
      <motion.span
        key="menu"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="inline-block" 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }} 
      >
        <RxHamburgerMenu />
      </motion.span>
    )}
  </AnimatePresence>
        </motion.div>
       

    </nav>
  )
}

export default Navbar