
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const CustomNav=()=> {
  return (
    <Navbar expand="lg" className="bg-warning">
     <Container fluid className='d-flex align-items-center'>
        <Navbar.Brand href="#home" >
          <img src="/public/ZillaLogo.png" alt="Logo" className="me-3 img-fluid" style={{ maxHeight: '60px' }}/>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto'/>
        
        <Navbar.Collapse id="basic-navbar-nav">         
          <Nav className="ms-auto d-flex flex-row justify-content-around">
            <Nav.Link className='fs-4' href="#home">Home</Nav.Link>
            <Nav.Link className='fs-4' href="#link">About</Nav.Link>
            <Nav.Link className='fs-4' href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;