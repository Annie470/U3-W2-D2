import { Card } from "react-bootstrap";

const SingleBook =(props)=> {

    return (
      <Card
        style={{ height: '100%' }}
        className={
          "d-flex flex-column " +
          (props.id === props.book.asin ? "border-5 border-danger" : "")
        }
      >
        <Card.Img
          variant="top"
          src={props.book.img}
          className="card-img-fixed"
          onClick={() => props.setId(props.book.asin)}
        />
        <Card.Body className="d-flex flex-column text-center justify-content-start">
          <Card.Title>{props.book.title}</Card.Title>
          <div className="flex-grow-1 d-flex flex-column justify-content-end">
            <Card.Text className="text-start">{props.book.price}€</Card.Text>
            <Card.Text className="text-start">Categoria: {props.book.category}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    );
  }


export default SingleBook;
