import React from "react";
import "./style.css";
import Exercice1 from "./Compoments/Exercice1";
import Exercice2 from "./Compoments/Exercice2";
import Exercice3 from "./Compoments/Exercice3";
import Compteur from "./Compoments/Compteur";



function App() {
  return (
    <div className="container">
      <h1>TP 1 - REACT -- Exercices</h1>

      <div className="section" >
        <Exercice1/>
        <Exercice2/>
        <Exercice3/>
        <Compteur/>
      </div>
    </div>
  );
}

export default App;
