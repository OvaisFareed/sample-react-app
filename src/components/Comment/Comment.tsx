import React from 'react';
import UserInfo from './UserInfo';

export interface CustomInputProps {
  comment: {
    author: {
      name: string,
      avatarUrl: string
    };
    text: string;
    date: string;
    
  }
}

const Comment: React.FC<CustomInputProps> = (props) => {
    return (
      <div className="Comment">
        <UserInfo user={props.comment.author} />
        <div className="Comment-text">
          {props.comment.text}
        </div>
        <div className="Comment-date">
          {props.comment.date}
        </div>
      </div>
    );
  }

  export default Comment;