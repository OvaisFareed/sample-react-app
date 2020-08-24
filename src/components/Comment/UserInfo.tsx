import React from 'react';
import Avatar from './UserAvatar';
import { Author } from '../../interfaces/types';

interface UserProps {
  user: Author
}

const UserInfo: React.FC<UserProps> = (props) => {
    return (
        <div className="UserInfo">
          <Avatar user={props.user} />
          <div className="UserInfo-name">
            {props.user.name}
          </div>
        </div>
      );
  }

  export default UserInfo;