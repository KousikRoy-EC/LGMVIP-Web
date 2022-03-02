import React from "react";

function Layout(props) {
    const User = props.User;
    return (
        <div style={{ marginTop: "3rem" }}>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={User.avatar} alt="avatar" className="Avatar" />
                        <p>{User.first_name + " " + User.last_name}</p>
                        <p>{User.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
