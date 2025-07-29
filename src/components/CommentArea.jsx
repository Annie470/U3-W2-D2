import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea =(props)=> {

   const [comments, setComments] = useState([])
   const [isError, setIsError]= useState(false)
   const [forUp, setForUp] = useState(false)
  

 
  const chiamataCommenti = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.bookId}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgyMWYzMmZlMzZkMDAwMTU5NzU4MTYiLCJpYXQiOjE3NTMzNTgxMzAsImV4cCI6MTc1NDU2NzczMH0.e0s40I7Kn-R4ZbRhY2HdP17MOyFqP76G-kLpdCuZ1Xs',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Errore Server: ${response.status}`);
        }
      })
      .then((data) => {
        setIsError(false);
        setComments(data);
      })
      .catch((error) => {
        setIsError(true);
        console.error(error);
      });
  };

 
  useEffect(()=> {chiamataCommenti()},[props.bookId, forUp])


    return (
      <>
        {isError && (
          <Alert variant="danger">Errore nel caricamento dei commenti</Alert>
        )}
       
            <AddComment id={props.bookId} setForUp={setForUp} />
             <h6 className="text-center mt-1">Recensioni:</h6>
            <CommentList comments={comments} setForUp={setForUp} forUp={forUp}/>
      </>
    );
  }


export default CommentArea;