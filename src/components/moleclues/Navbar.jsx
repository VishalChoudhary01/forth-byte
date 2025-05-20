import Logo from "./../atoms/Logo"
import {navbarMenu} from "./../../constants/index"
import { NavLink } from 'react-router'
import Toggle from '../atoms/Toggle'
const Navbar = () => {
  return (
    <nav className='md:w-full md:h-14 w-full h-16 lg:py-2.5 py-2  lg:px-8 md:px-5 px-3   bg-NavBg fixed z-40 backdrop-blur-md dark:bg-NavDarkBg text-heading1 dark:text-dark-heading1 transition-all duration-300   flex items-center justify-between'>
      <Logo/>
      <ul className='md:flex hidden xl:gap-x-9  lg:gap-x-8 md:gap-x-6'>
        {
          navbarMenu.map((menu,indx)=>(
            <NavLink 
              to={menu.path}
              key={indx}
              className={({ isActive }) => 
  `relative pb-1 transition-all duration-300 font-Raleway hover:scale-105 lg:text-[1.05rem] md:text-[0.9rem] 
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

      <Toggle/>

    </nav>
  )
}

export default Navbar