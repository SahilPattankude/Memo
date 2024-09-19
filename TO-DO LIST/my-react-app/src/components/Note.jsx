import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }
    return (

        <div className="note">
            <p>{props.creator}</p>
            <p>{props.title}</p>
            <p>{props.message}</p>
            <p>{props.tags}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;
