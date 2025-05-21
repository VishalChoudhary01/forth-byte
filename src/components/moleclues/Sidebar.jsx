import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {navbarMenu} from "./../../constants/index"
import { NavLink } from 'react-router'
import Toggle from '../atoms/Toggle'
const Sidebar = ({ isOpen,handleOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='md:hidden fixed left-0 right-0 top-12  z-50 h-screen'
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: { x: 0 },
            hidden: { x: '100%' }
          }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <div className="flex h-full w-full">
            <motion.div
              className="w-[40%] h-full backdrop-blur-lg bg-glass-bg dark:bg-dark-glass-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            <div className="w-[60%] h-full bg-NavBg  dark:bg-NavDarkBg backdrop-blur-2xl p-6">
              <span
              className='absolute right-2 top-1'
              ><Toggle/></span>
              <nav className="flex flex-col w-fit space-y-4   text-heading1 dark:text-dark-heading1">
                {
                  navbarMenu.map((item,idx)=>(
                    <NavLink 
                    key={idx} 
                    to={item.path}
                    onClick={()=>setTimeout(handleOpen,520)}
                    end 
                    className={({ isActive }) => 
                      `relative pb-1 transition-all duration-300 font-Raleway hover:scale-105 text-[0.9rem] 
                       hover:text-link-hover hover:dark:text-dark-link-hover
                       ${
                         isActive 
                           ? 'text-link font-[500] dark:text-dark-link after:w-full after:bg-link dark:after:bg-dark-link after:animate-underlineExpand'
                           : 'after:w-0 after:bg-transparent'
                       }
                       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                    }
                  >
                    {console.log(idx)||item.name}
                  </NavLink>

                  ))
                }

              </nav>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Sidebar