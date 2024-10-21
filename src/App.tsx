import { Routes , Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Details } from "./pages/Details"
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
    <Container className="ms-5 me-5 py-5">
    <Routes>
    <Route path="/details/:id"element={<Details/>}/>
    </Routes>
    </Container>
  </ShoppingCartProvider>
  <Footer/>
  </div>
    
      
  )
}

export default App
