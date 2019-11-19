import React from 'react';
import Avatar from './Avatar';

export interface CustomInputProps {
    user: {
      name: string,
      avatarUrl: string
    }
}

const UserInfo: React.FC<CustomInputProps> = (props) => {
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