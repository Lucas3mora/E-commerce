
import React from 'react';
import { Container, Row, Col, ListGroup , Image ,Button , Form } from 'react-bootstrap';


interface CustomFooterProps {}

const Footer: React.FC<CustomFooterProps> = () => {
  return (
    <footer className="d-flex  py-5 rounded-top-5 bg-image"style={{ backgroundImage: `url('src/assests/bg.jpeg')`}}>
      <Container>
        
        <Row>
          <Col lg={11}>
            <h5 className='ms-5 display-2 text-danger'>Let's Talk</h5>
            <p className='ms-5 fs-4 text-white '>
              Reach out to us today in the way that's most convenient for you. We're
              excited to hear from you and help you take your business to the next
              level!
            </p>
          </Col>
          </Row>
          
<Row className='ms-5'>

 <Col  lg={5}>
  <Image

   src={"../src/assests/egypt.ico"}

  alt="Egypt Flag"

  width="35px"

  height="auto"

  fluid

  />
      <h5 className='fs-2 text-white'>Egypt</h5>
       <Row/>
            
            <ListGroup variant="flush">
              <div className='fs-6 my-3 text-white'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg> Tarad El Nile, El Velal, Building # 1, Benha.</div>
              <div className='fs-6  text-white'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> +20 777 5000</div>
            </ListGroup>
          </Col>
          
          <Col lg={5}>
          <Image

src={"../src/assests/england.ico"}

alt="England Flag"

width="35px"

height="auto"

fluid

/>
            <Col>
            <h5 className='fs-2 text-white'>England</h5>
            </Col>
            
            <ListGroup variant="flush">
              <div className='fs-6 my-3 text-white'> <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg> Hornsey Rd, North London N7 7AJ.</div>
 <div className='fs-6 text-white'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> +020 7619 5000</div>
            </ListGroup>
            
          </Col>
          </Row>
          
          <Col lg={8} className="d-flex align-items-center  ">
            <a href="https://www.arsenal.com/the-club/contact-arsenal" className="ms-5 fs-3 text-white my-5">
              Contact Us
            </a>
          </Col>
          
            
 

</Container>

    
      <Container  className='my-5 mx-5 d-flex w-80 '>
      
        <Form className='ms-5 border my-5 bg-white rounded-5' >
          <Row className='ms-4 '>
          <Col lg={5}>
          <Form.Group  className="mb-3 mt-5 ms-5  " controlId="formName">  
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          </Col>

          <Col lg={5}>
          <Form.Group className="mb-3 mt-5 ms-3" controlId="formName">
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          </Col>
          </Row>
          <Row className='ms-4 '>
          <Col lg={10}>
          <Form.Group className="mb-3  ms-5" controlId="formEmail">
            <Form.Control type="text" placeholder="Email" />
          </Form.Group>
          </Col>
          </Row>

          <Row className='ms-4 '>
          <Col lg={10}>
          <Form.Group className="mb-3 ms-5" controlId="formCountry">
            <Form.Select id="text" >
              <option selected>Country</option>
              <option value="1">Egypt</option>
              <option value="2">Palestine</option>
              <option value="3">England</option>
              <option value="4">Usa</option>
              <option value="5">Sweden</option>
              <option value="6">France</option>
              <option value="7">Germany</option>
              <option value="8">Morocco</option>
              <option value="9">Algeria</option>
              <option value="10">Netherlands</option>
              <option value="11">Turkey</option>             
            </Form.Select>
          </Form.Group>
          </Col>
          </Row>

          <Row className='ms-4'>
          <Col lg={10}>
          <Form.Group className="mb-3 ms-5" controlId="formMessage">        
            <Form.Control as="textarea" rows={7} placeholder="Enter your message" />
          </Form.Group>
          </Col>
          </Row>

          <Row className='ms-4'>
          <Col>
          <Button className='ms-5 rounded-pill mb-5' variant="primary" type="submit">
            Submit
          </Button>
          </Col>
          </Row>
        </Form>
        
        
      
    
  
        
        </Container>
        


</footer>

  )
};

export default Footer;