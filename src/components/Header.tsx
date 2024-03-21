// Header.tsx
import React from 'react';
import { Button, Container, Navbar as NavbarTs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <NavbarTs className=' my-5 rounded-bottom-5'  bg="image" style={{ backgroundImage: `url('src/assests/bg.jpeg')` }}> 
      <Container className='py-5 my-4'>
        <NavbarTs.Brand><h1 className="display-1 text-primary">Your Product,</h1>
        <h1 className="display-1 text-white">Our Expertise.</h1>
         <h1 className='display-6 text-white'>Let's take your business to the next level.</h1>
        <br/> <Button 
         variant="primary"

         size="lg"
   
         className="rounded-pill px-4 py-2"
         >
             Let's Talk </Button></NavbarTs.Brand>
        
        
      </Container>
    </NavbarTs>
  );
};

export default Header;