import React, { useState } from "react";
import "./Form.scss";
import { TextField, IconButton } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Comment from "../Comment/Comment";
import { CommentType } from "../../interfaces/types";
import dp from '../../assets/avatars/avatar.jpg';
import CustomDialog from "../../utils/CustomDialog/CustomDialog";

const Form: React.FC = () => {
  const COMMENST_DB_KEY = 'comments';
  
  // get data from local storage
  const getDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(COMMENST_DB_KEY) || '[]');
  }

  // set data in local storage
  const setDataInLocalStorage = (comments: any[]) => {
    localStorage.setItem(COMMENST_DB_KEY, JSON.stringify(comments));
  }

  const [open, setOpen] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [selectedIndex, setIndex] = useState(-1);
  const [comments, setComments] = useState((getDataFromLocalStorage() || []) as CommentType[]);

  // handle comment change
  // const handleInputChange = (e: any, index: number) => {
  //     const { name, value } = e.target;
  //     const list: any = [...comments];
  //     list[index][name] = value;
  //     setComments(list);
  //   };

  // handle comment change
  const handleInputChange = (e: any) => {
    const { value } = e.target;
    setCommentText(value)
  };

  // handle click event of the Remove button
  const openRemoveDialog = (index: number) => {
    setIndex(index);
    setOpen(true);
  };

  const handleRemoveClick = (confirmDelete: boolean) => {
    if(confirmDelete){
      const list = [...comments];
      list.splice(selectedIndex, 1);
      setDataInLocalStorage(list);
      setComments(list);
    }
    setOpen(false);
  };

  // handle submit/click event of the Add button
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const comment: any = {};
    comment.text = commentText;
    comment.author = {
      name: "Ovais",
      avatarUrl: dp,
    };
    comment.date = new Date().toLocaleString();
    comments.push(comment);
    setDataInLocalStorage(comments);
    setComments(comments);
    setCommentText('');
  };

  return (
    <div className="Form">
      <h3>Add a comment:</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          className="comment-input"
          label="Comment"
          variant="outlined"
          value={commentText}
          onChange={(e: any) => handleInputChange(e)}
        />
        <IconButton className="add-btn" color="primary" type="submit">
          <SendIcon />
        </IconButton>
      </form>
      <ul className="field-list">
        {comments.length > 0 &&
          comments.map((c, i) => {
            return (
              <li key={i}>
                <Comment comment={c} clickHandler={() => openRemoveDialog(i)} />
              </li>
            );
          })}
      </ul>
      <CustomDialog
        open={open}
        handleClose={handleRemoveClick}
        dialogTitle="Delete Comment"
        dialogContent="Are you sure want to delete this comment?"
        okButtonText="Confirm"
        cancelButtonText="Cancel"
       />
    </div>
  );
};

export default Form;
