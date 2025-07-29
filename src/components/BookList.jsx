import SingleBook from "./SingleBook";
import { Container, Row, Col, Form} from "react-bootstrap";
import { useState } from "react";
import CommentArea from "./CommentArea";

const BookList =(props)=> {
  const [cercato, setCercato] = useState("")
  const [id, setId] = useState("")

    const filtrati =props.arrayBook.filter((book) =>
      book.title.toLowerCase().includes(cercato.toLowerCase())
    );
return (
    <>
    <Container className="d-flex flex-column align-items-center bg-warning-subtle" fluid>
 <Form.Group className="w-50 mt-3" controlId="searchbar">
        <Form.Control className="border border-warning"
          type="text"
          placeholder="Cerca.."
          value={cercato}
          onChange={(e) => setCercato(e.target.value)}
        />
      </Form.Group>
    <Container fluid className="py-3 w-75">
      <Row>
      <Col>
        <Row className="justify-content-center gy-2">
      {filtrati.map((book) => (
          <Col xs={12} md={4} lg={4} key={book.asin}>
        <SingleBook  book={book} setId={setId} id={id} />
        </Col>
      ))}
      </Row>
      </Col>
      <Col>
      <CommentArea bookId={id} /></Col>
      </Row>
      </Container>
      </Container>
    </>
  );
}

export default BookList;
