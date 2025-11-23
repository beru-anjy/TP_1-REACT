import React from "react";
import BrightText from "./BrightText";
import "./styleCompoments.css";

export default function Exercice2(){
    return (
        <div className="exo2-container">
            <BrightText color="red" />
            <BrightText color="gren" />
            <BrightText color="blue" />
        </div>
    );
}