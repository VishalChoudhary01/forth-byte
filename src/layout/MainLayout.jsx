import Navbar from '../components/moleclues/Navbar'
import Footer from '../components/moleclues/Footer'
import Sidebar from '../components/moleclues/Sidebar'
import { useState } from 'react'

const MainLayout = ({children}) => {
  const [sideMenuOpen,setSideMenuOpen]=useState(false)

  const handleSideMenu=()=>{
    setSideMenuOpen((prevState)=>!prevState)
  }
  return (
    <div className='w-full h-screen flex flex-col  dark:bg-dark-background md:bg-background  transition-all duration-500'>
        <Navbar isOpen={sideMenuOpen} handleOpen={handleSideMenu} />
        {/* Mobile */}
        <Sidebar isOpen={sideMenuOpen} handleOpen={handleSideMenu} />
        <main className='flex-1 mt-16'>
          {children}
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout