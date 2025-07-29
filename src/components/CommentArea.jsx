import { Component } from 'react';
import { Alert } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';

class CommentArea extends Component {
  state = {
    comments: [],
    isError: false,
  };

 
  chiamataCommenti = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
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
        this.setState({ comments: data, isError: false });
      })
      .catch((error) => {
        this.setState({ isError: true });
        console.error(error);
      });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.bookId !== this.props.bookId && this.props.bookId) {
      this.chiamataCommenti();
    }
  }

  render() {
    return (
      <>
        {this.state.isError && (
          <Alert variant="danger">Errore nel caricamento dei commenti</Alert>
        )}
       
            <AddComment id={this.props.bookId} />
             <h6 className="text-center mt-1">Recensioni:</h6>
            <CommentList comments={this.state.comments} />
      </>
    );
  }
}

export default CommentArea;