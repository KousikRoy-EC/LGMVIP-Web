import React, { useState } from "react";

function Calculator() {
    const [data, setdata] = useState("");

    function calculateans() {
        const answers = eval(data);

        setdata(answers);
    }

    function handleClick(e) {
        const value = e.target.getAttribute("value");
        switch (value) {
            case "clean":
                setdata("");
                break;
            case "Equal":
                calculateans();
                break;
            default:
                setdata((prevalue) => {
                    return prevalue + value;
                });
        }
    }

    return (
        <div className="Calculator">
            <div className="Display">{data}</div>
            <div className="Keypad">
                <div onClick={handleClick} label="C" value="clean" className="Button">
                    C
                </div>
                <div onClick={handleClick} label="7" value="7" className="Button">
                    7
                </div>
                <div onClick={handleClick} label="4" value="4" className="Button">
                    4
                </div>
                <div onClick={handleClick} label="1" value="1" className="Button">
                    1
                </div>
                <div onClick={handleClick} label="0" value="0" className="Button">
                    0
                </div>
                <div className="Button">N/A</div>
                <div onClick={handleClick} label="8" value="8" className="Button">
                    8
                </div>
                <div onClick={handleClick} label="5" value="5" className="Button">
                    5
                </div>
                <div onClick={handleClick} label="2" value="2" className="Button">
                    2
                </div>
                <div onClick={handleClick} label="00" value="00" className="Button">
                    00
                </div>

                <div className="Button">N/A</div>
                <div onClick={handleClick} label="9" value="9" className="Button">
                    9
                </div>
                <div onClick={handleClick} label="6" value="6" className="Button">
                    6
                </div>
                <div onClick={handleClick} label="3" value="3" className="Button">
                    3
                </div>
                <div onClick={handleClick} label="." value="." className="Button">
                    .
                </div>

                <div onClick={handleClick} label="-" value="-" className="Button">
                    -
                </div>
                <div
                    onClick={handleClick}
                    label="+"

                    value="+"
                    className="Button"
                >
                    +
                </div>
                <div onClick={handleClick} label="x" value="*" className="Button">
                    x
                </div>
                <div onClick={handleClick} label="/" value="/" className="Button">
                    /
                </div>

                <div
                    onClick={handleClick}
                    label="="

                    value="Equal"
                    className="Button"
                >
                    =
                </div>
            </div>
        </div>
    );
}

export default Calculator;
