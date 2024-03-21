import { Routes , Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Footer from "./components/Footer"


function App() {
  
  return (
    <div>
      
    <ShoppingCartProvider>
    <Navbar  />
    
    <Container fluid className="my-5 ">
    <Routes>
      
      <Route path="/"element={<Store/>}/>
      <Route path="/about"element={<About/>}/>
    </Routes>
  </Container>
  
  </ShoppingCartProvider>
  <Footer/>
  </div>
    
      
  )
}

export default App
