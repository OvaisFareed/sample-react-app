import React from 'react';

export interface CustomInputProps {
    user: {
      name: string,
      avatarUrl: string
    }
}

const Avatar: React.FC<CustomInputProps> = (props) => {return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  );
}

export default Avatar;