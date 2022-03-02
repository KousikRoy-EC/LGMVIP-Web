import React from "react"


function Card(props) {
    let User = props.info;
    return (<div>
        <div style={{ marginTop: "3rem" }}>
            <div>
                <div className="column">
                    <div className="card">
                        <img src="http://bootdey.com/img/Content/user_1.jpg" alt="avatar" className="Avatar" />
                        <p style={{ padding: "3px" }}>Name : {User.name}</p>
                        <p style={{ padding: "3px" }}>Gender : {User.gender}</p>
                        <p style={{ padding: "3px" }}>Skills : {User.skill.map((skill) => { return skill + ", " })}</p>
                        <p style={{ padding: "3px" }}>Email : {User.email}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Card;