
import { ListGroup, Button } from "react-bootstrap";

const SingleComment =(props)=> {
  
  const delComm = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.comment._id, {
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
          props.setForUp(!props.forUp);
        } else {
          alert("Errore nell'eliminazione del commento");
        }
      })
      .catch((error) => {
        console.error("Errore:", error);
        alert("Errore di rete");
      });
  };
 
    return (
      <>
     
        <ListGroup>
          <ListGroup.Item key={props.comment._id} className="text-dark">
            <h6 className="text-danger">{props.comment.author}</h6>
            <p>{props.comment.comment}</p>
            <p className="text-end">
              {new Date(props.comment.createdAt).toLocaleDateString()}
            </p>
            <div className="text-end">
              <Button variant="danger" size="sm" onClick={delComm}>
                Elimina
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </>
    );
  }


export default SingleComment;
