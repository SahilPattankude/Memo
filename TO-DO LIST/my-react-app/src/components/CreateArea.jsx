import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
// import Style from "./style.css";

function CreateArea(props) {

    const [note, setNote] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });

    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            creator: "",
            title: "",
            message: "",
            tags: "",
        });
        event.preventDefault()

    }

    return (
        <div >
            <form >
                <h1>Create a Memory🪄</h1>
                <input
                    name="creator"
                    onChange={handleChange}
                    value={note.creator}
                    placeholder="Creator"
                />
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    name="message"
                    onChange={handleChange}
                    value={note.message}
                    placeholder="Message"

                />
                <input
                    name="tags"
                    onChange={handleChange}
                    value={note.tags}
                    placeholder="Tag"
                />

                <Zoom in={true}>
                    <Fab type="submit" onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>



            </form>
        </div>

    )




}
export default CreateArea;