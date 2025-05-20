import React from 'react'
import Logo from "./../atoms/Logo"
import {navbarMenu} from "./../../constants/index"
import { NavLink } from 'react-router'
import Toggle from '../atoms/Toggle'
const Navbar = () => {
  return (
    <nav className='w-full lg:py-2.5 py-2 lg:text-[1.3rem] lg:px-8 md:px-5 px-3 bg-NavBg fixed z-40    font-medium dark:bg-NavDarkBg text-heading1 dark:text-dark-heading1 transition-all duration-400   flex items-center justify-between'>
      <Logo/>
      <ul className='md:flex hidden xl:gap-x-9 font-OpenSans lg:gap-x-8 md:gap-x-6'>
        {
          navbarMenu.map((menu,indx)=>(
            <NavLink 
              to={menu.path}
              key={indx}
              className={({ isActive }) => 
                `hover:text-red-500 transition-colors ${
                  isActive 
                    ? 'text-red-600 dark:text-red-400 font-semibold' 
                    : 'text-black dark:text-gray-300'
                }`
              }
            >
              {menu.name}
            </NavLink>
          ))
        }
      </ul>

      <Toggle/>

    </nav>
  )
}

export default Navbar