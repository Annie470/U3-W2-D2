
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList =(props)=> {
    
        return (<>
        <ListGroup>
          {props.comments.map((comment) => (
            <SingleComment key={comment._id} comment={comment} setForUp={props.setForUp} forUp={props.forUp}/>
          ))}
        </ListGroup>
      </>)
   
}
export default CommentList;