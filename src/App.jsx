
import MainLayout from "./layout/MainLayout"
import { BrowserRouter as Router  , Routes,Route } from "react-router"
import { Provider } from "react-redux"
import {Home,About,Blog,Careers,Contact,Services,UnavailablePage} from "./pages/index";
import  store  from "./redux/store"

function App() {

  return (
   <Provider store={store}>
   <Router>
   <MainLayout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="*" element={<UnavailablePage/>}/>
    </Routes>
   </MainLayout>
   </Router>
    </Provider>
  )
}

export default App
