import React from "react";
import astro from "./astro.jpg"
import "./App.css";

function Box(){
    return(
        <div className="box">
            <h3>Imaginate to Create</h3>
            <div>
                <img src={astro} alt="space" className="space" />
            </div>
        </div>
    )
}

export default Box;