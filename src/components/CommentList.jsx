import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
    render() {
        return (<>
        <ListGroup>
          {this.props.comments.map((comment) => (
            <SingleComment comment={comment} />
          ))}
        </ListGroup>
      </>)
   } 
}
export default CommentList;