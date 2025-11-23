import React from "react";
import "./styleCompoments.css";

export default function Exercice3() {

    function handleClick() {
        console.log("Bonjour");
    }

    return (
        <div className="exo3-container">
        <button className="exo3-button" onClick={handleClick}>Click Me!</button>
        </div>
    );
}