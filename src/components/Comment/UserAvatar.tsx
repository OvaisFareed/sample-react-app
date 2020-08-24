import React from 'react';
import { Author } from '../../interfaces/types';

interface UserAvatarProps {
  user: Author
}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
  
  return (
    <img className="UserAvatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

export default UserAvatar;