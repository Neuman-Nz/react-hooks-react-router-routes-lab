import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map(({name,movies},i) =>(
          <div key={i}>
             <h3>Name: {name}</h3>
             <p>Movies:</p>
             <ul>
             {
              movies.map((item,i) =>(
                <li key={i}>{item}</li>
              ))
             }
             </ul>
          </div>
        ))
      }
    </div>
  )
}

export default Actors;