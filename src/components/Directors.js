import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>

      {
        directors.map(({ name, movies }, i) => (
          <div key={i}>
            <p>Name: {name}</p>
            <p>Movies:</p>
            <ul>
              {movies.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default Directors;

