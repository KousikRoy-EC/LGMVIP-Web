import React from "react";

function Navbar(props) {
    function ShowUsers(event) {
        props.show(true);
        event.preventDefault();
    }

    return (
        <div>
            <ul>
                <p>Kousik Roy</p>
                <button type="button" onClick={ShowUsers} className="button">
                    Get Users
                </button>
            </ul>
        </div>
    );
}

export default Navbar;
