import React from "react";
import "./styleCompoments.css";

export default function Exercice1() {
    return (
        <div>
            <label className="exo1-label">Zone de saisie limité</label>
            <textarea
                readOnly={true}
                maxLenght={3}
                spellCheck={true}
                className="exo1-textarea">
            </textarea>
            <p className="exo1-info"> Max : 3 caractères</p>
        </div>

    );
}
 
/*EXERCICE 1 
import React from 'react'; 
 
function App() { 
  return ( 
    <div class="wrapper"> = "class" est un mot reserve en JS, en React on utilise "className" pour les classes CSS
      <textarea  (/>) = doit avoir une balise ouvrante et fermante et non une auto-fermées
        readonly="true" = propriété HTML sont transformées en camelCase en React
        maxlength="3"    = propriété HTML sont transformées en camelCase en React
        spellcheck="true"  = propriété HTML sont transformées en camelCase en React
        style="background-color: gray;" = dans React "style" prend un objet en js, pas une string
      /> 
    </div> 
  );    
} 
export default App; */