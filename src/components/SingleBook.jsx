import { Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  render() {
    const { book, id, setStateBookList } = this.props;

    return (
      <Card
        style={{ height: '100%' }}
        className={
          "d-flex flex-column " +
          (id === book.asin ? "border-5 border-danger" : "")
        }
      >
        <Card.Img
          variant="top"
          src={book.img}
          className="card-img-fixed"
          onClick={() => setStateBookList({ id: book.asin })}
        />
        <Card.Body className="d-flex flex-column text-center justify-content-start">
          <Card.Title>{book.title}</Card.Title>
          <div className="flex-grow-1 d-flex flex-column justify-content-end">
            <Card.Text className="text-start">{book.price}€</Card.Text>
            <Card.Text className="text-start">Categoria: {book.category}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
