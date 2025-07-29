import Alert from 'react-bootstrap/Alert';
import { Container } from 'react-bootstrap';

const Welcome=()=> {
  return (
    <Container fluid className='bg-warning-subtle py-3 border-top border-black'>
    <Alert variant="light" className='text-center border-1 border-warning mx-auto my-0 w-75'>
      <Alert.Heading className='display-1'>CatZilla Library</Alert.Heading>
      <p>
     La tua e-library preferita!
      </p>
    </Alert>
    </Container>
  );
}

export default Welcome;