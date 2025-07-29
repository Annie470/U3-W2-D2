import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer=()=> {
  return (
    <Container className='bg-warning m-0 border-top border-black' fluid >
      <Row className='p-2'>
        <Col className='text-end'> CatZilla &copy; {new Date().getFullYear()}</Col>
      </Row>
    </Container>
  );
}

export default Footer;