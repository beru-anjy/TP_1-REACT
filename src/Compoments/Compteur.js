import React, {useState} from "react";
import "./styleCompoments.css";

export default function Compteur() {
    const [count, setCount] = useState(0);

    return (
        <div className="compteur-card">
            <h2 className="compteur-number">{count}</h2>
            <div className="compteur-buttons">
                <button className="btn-plus" onClick={() => setCount (count + 1)}> +1
                </button>
                <button className="btn-reset" onClick={() => setCount(0)}> Reset
                </button>
            </div>
        </div>
    )
}