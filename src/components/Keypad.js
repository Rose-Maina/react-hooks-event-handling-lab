// Code Keypad Component Here

import React from "react";

function Keypad (){
    function enterPassword(event) {
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={enterPassword}/>
        </div>
    )
}
export default Keypad;

