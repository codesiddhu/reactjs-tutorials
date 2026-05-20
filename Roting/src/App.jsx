import{Routes,Route} from 'react-router-dom'
import Homepage from './Components/Homepage'
import AboutPage from './Components/AboutPage'
import ContactPage from './Components/ContactPage'
import ProductsPage from './Components/ProductsPage'
import Navbar from './Components/Navbar'
import Men from './Components/Men'
import Women from './Components/Women'
import Kids from './Components/Kids'
import DisplaySingleProducts from './Components/DisplaySingleProducts'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} >
                <Route index element = {<Men/>}/> 
                <Route path = "women" element = {<Women/>}/>
                <Route path = "kids" element = {<Kids/>}/>

        </Route>
        <Route path = "/single/:id" element = {<DisplaySingleProducts/>}/>
      </Routes>
    </div>
  )
}

export default App