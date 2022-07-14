// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function clickFocus() {
        console.log("Good!");
    }

    function clickBlur() {
        console.log("Hey! Eyes on me!");
    }

    return (
        <button onFocus={clickFocus} onBlur={clickBlur}>Eyes on me</button>
    );
    }

export default EyesOnMe;
    
