import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";


const AddComment =(props)=> {


  const [comm, setComm]= useState({
      author: "",
      comment: "",
      rate: "",
      elementId: props.id,
    })

  useEffect(()=> {setComm({
  ...comm,
  elementId: props.id,
})}, [props.id])
  

  const postComm = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgyMWYzMmZlMzZkMDAwMTU5NzU4MTYiLCJpYXQiOjE3NTMzNTgxMzAsImV4cCI6MTc1NDU2NzczMH0.e0s40I7Kn-R4ZbRhY2HdP17MOyFqP76G-kLpdCuZ1Xs",
      },
      body: JSON.stringify(comm),
    })
      .then((response) => {
        if (response.ok) {
          alert("Commento inviato con successo!");
          setComm({
              author: "",
              comment: "",
              rate: "",
              elementId: props.id,
          });
          props.setForUp(!props.forUp);
        } else {
          alert("Errore nell'invio del commento");
        }
      })
      .catch((error) => {
        console.error("Errore:", error);
        alert("Errore di rete");
      });
  };


    return (
      <>
        <h6 className="text-center mb-0">Commenta:</h6>
        <Form onSubmit={postComm} className="text-end p-3">
          <Form.Group controlId="commentAdd" className="mb-2">
            <Form.Control
              type="email"
              placeholder="Email"
              value={comm.author}
              onChange={(e) =>
                setComm({
                    ...comm,
                    author: e.target.value,
                })
              }
              required
            />
      
            <Form.Control
              type="number"
              placeholder="Rate (1-5)"
              min="1"
              max="5"
              value={comm.rate}
              onChange={(e) =>
              setComm({
                    ...comm,
                    rate: e.target.value,
                  
                })
              }
              required
            />
            <Form.Control
              type="text"
              placeholder="Commento"
              value={comm.comment}
              onChange={(e) =>
                setComm({
                    ...comm,
                    comment: e.target.value,
                
                })
              }
              required
            />
          </Form.Group>

          <Button className="bg-warning mb-2 border-0" type="submit" variant="primary">
            Invia
          </Button>
        </Form>
      </>
    );
  }


export default AddComment;



