import React from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteIconButton: React.FC<{clickHandler: () => any}> = ({clickHandler}) => {

    return (
        <IconButton
        className="delete-btn"
        aria-label="delete"
        onClick={clickHandler}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    );
}

export default DeleteIconButton;