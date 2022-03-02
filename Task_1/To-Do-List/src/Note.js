import React, { useState } from "react";
import { BiX, BiCheck } from "react-icons/bi";
function Note(props) {
    const [checked, setchecked] = useState(false);
    function handleClick() {
        props.onDelete(props.id);
    }
    function taskdone() {
        setchecked(true);
    }

    return (
        <div className="note" style={{ backgroundColor: checked ? "#90da90" : "" }}>
            <h3 style={{ textDecoration: checked ? "line-through" : "none", marginLeft: "10px" }}>
                {props.title}
            </h3>
            <div className="icons">
                <BiCheck onClick={taskdone} style={{ cursor: "pointer", margin: "0px 5px" }} />
                <BiX onClick={handleClick} style={{ cursor: "pointer", margin: "0px 5px" }} />
            </div>
        </div>
    );
}

export default Note;
