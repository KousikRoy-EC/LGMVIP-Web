import React, { useState } from "react";

function Form(props) {
    const [info, setinfo] = useState({
        name: "",
        email: "",
        web: "",
        gender: "",
        skill: [],
    });

    function clicked(event) {
        props.addUser(info);
        setinfo({
            name: "",
            email: "",
            web: "",
            gender: "",
            skill: [],
        });
        event.preventDefault();
    }

    function handlechange(event) {
        var name = event.target.name;
        var value = event.target.value;
        if (name === "skill") {
            setinfo({ ...info, [name]: [...info.skill, value] });
        } else {
            setinfo({ ...info, [name]: value });
        }
    }

    return (
        <div className="FormContainer">
            <div className="form">
                <form>
                    <div style={{ textAlign: "center" }}>Registration form</div>
                    <div className="row">
                        <input
                            className="input"
                            type="text"
                            id="name"
                            name="name"
                            value={info.name}
                            onChange={handlechange}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="row">
                        <input
                            className="input"
                            type="text"
                            id="email"
                            name="email"
                            value={info.email}
                            onChange={handlechange}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="row">
                        <input
                            className="input"
                            type="text"
                            id="web"
                            name="web"
                            value={info.web}
                            onChange={handlechange}
                            placeholder="Enter your website"
                        />
                    </div>

                    <div className="row">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <label style={{ marginRight: "10px" }}>Gender</label>

                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={handlechange}
                                checked={info.gender === "male"}
                            />
                            <label className="form-check-label">Male</label>

                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={handlechange}
                                checked={info.gender === "female"}
                            />
                            <label className="form-check-label">Feamale</label>
                        </div>
                    </div>

                    <div className="row">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <label style={{ marginRight: "10px" }}>Skills</label>

                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="skill"
                                value="Java"
                                onChange={handlechange}
                                checked={info.skill.indexOf("Java") !== -1}
                            />
                            <label className="form-check-label">Java</label>

                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="skill"
                                value="Python"
                                onChange={handlechange}
                                checked={info.skill.indexOf("Python") !== -1}
                            />
                            <label className="form-check-label">Python</label>

                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="skill"
                                value="React"
                                onChange={handlechange}
                                checked={info.skill.indexOf("React") !== -1}
                            />
                            <label className="form-check-label">React</label>

                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="skill"
                                value="NoSQL"
                                onChange={handlechange}
                                checked={info.skill.indexOf("NoSQL") !== -1}
                            />
                            <label className="form-check-label">NoSQL</label>
                        </div>
                    </div>

                    <div className="row">
                        <button type="submit" onClick={clicked}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
