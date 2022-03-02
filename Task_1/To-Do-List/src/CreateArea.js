import React, { useState } from "react";


function CreateArea(props) {

    const [note, setNote] = useState("");

    function handleChange(event) {
        const content = event.target.value;

        setNote(content);
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote("");
        event.preventDefault();
    }


    return (
        <div>
            <div className="create-note" >
                <form >
                    <div className="Header">
                        <p>   My To Do List</p>
                    </div>

                    <input
                        name="note"
                        onChange={handleChange}
                        value={note}
                        placeholder="Title..."
                    />

                    <button type="button" onClick={submitNote}>Add</button>
                </form>
            </div>
        </div>

    );
}

export default CreateArea;