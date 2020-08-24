import React from 'react';
import './Comment.scss';
import UserAvatar from './UserAvatar';
import { CommentType } from '../../interfaces/types';
import { Card, CardHeader, Avatar } from '@material-ui/core';
import DeleteIconButton from '../DeleteIconButton/DeleteIconButton';

interface CommentProps {
  comment: CommentType;
  clickHandler: () => any
}

const Comment: React.FC<CommentProps> = ({comment, clickHandler}) => {
    return (
      <Card className="Comment">
        <div className="comment-date">{comment.date}</div>
        <CardHeader
          avatar={
            <Avatar>
              <UserAvatar user={comment.author} />
            </Avatar>
          }
          action={<DeleteIconButton clickHandler={clickHandler} />}
          title={comment.text}
        />
      </Card>
    );
  }

  export default Comment;