import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import horrorBooks from './assets/data/horror.json';

const CardsContainer=()=> {
  return ( 
    <Container fluid className='p-3 bg-warning-subtle'>
        <Row className='g-2'>
        {console.log(horrorBooks)}
        { horrorBooks.map((book) => {
            return (
     <Col key={book.asin} xs={12} md={3} lg={2}>
       <Card className="h-100 d-flex flex-column " style={{ minHeight: '350px' }}>
<Card.Img variant="top" src={book.img} className="card-img-fixed" />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='flex-grow-1'>{book.title}</Card.Title>
        <Card.Text>{book.price}€</Card.Text>
        <Card.Text>Categoria: {book.category}</Card.Text>
        <Button className='bg-warning border-0 w-50 mx-auto'>Compra</Button>
      </Card.Body>
    </Card>
    </Col>
            )
        })}
</Row>
    </Container>
  );
}

export default CardsContainer;