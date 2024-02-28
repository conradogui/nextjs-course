import Post from "./Post.jsx";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal.jsx";

function PostsList({isPosting, onStopPosting}) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");


  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Mariana" body="learning vue" />
      </ul>
    </>
  );
}

export default PostsList;
