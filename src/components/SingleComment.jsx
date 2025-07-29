import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";

class SingleComment extends Component {
  delComm = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.comment._id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgyMWYzMmZlMzZkMDAwMTU5NzU4MTYiLCJpYXQiOjE3NTMzNTgxMzAsImV4cCI6MTc1NDU2NzczMH0.e0s40I7Kn-R4ZbRhY2HdP17MOyFqP76G-kLpdCuZ1Xs",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Commento eliminato!");
        } else {
          alert("Errore nell'eliminazione del commento");
        }
      })
      .catch((error) => {
        console.error("Errore:", error);
        alert("Errore di rete");
      });
  };

  render() {

    return (
      <>
     
        <ListGroup>
          <ListGroup.Item key={this.props.comment._id} className="text-dark">
            <h6 className="text-danger">{this.props.comment.author}</h6>
            <p>{this.props.comment.comment}</p>
            <p className="text-end">
              {new Date(this.props.comment.createdAt).toLocaleDateString()}
            </p>
            <div className="text-end">
              <Button variant="danger" size="sm" onClick={this.delComm}>
                Elimina
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}

export default SingleComment;
