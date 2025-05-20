import Navbar from '../components/moleclues/Navbar'
import Footer from '../components/moleclues/Footer'
import Sidebar from '../components/moleclues/Sidebar'

const MainLayout = ({children}) => {
  return (
    <div className='w-full h-screen flex flex-col  dark:bg-dark-background md:bg-background  transition-all duration-500'>
        <Navbar />
        {/* Mobile */}
        <Sidebar />
        <main className='flex-1 mt-16'>
          {children}
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout