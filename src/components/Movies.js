import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
       <h1>Movies Page</h1> 
          {
            movies.map(({title,genres,time},i) => (
              <div key={i}>
                  <h3>Name: {title}</h3>
                  <p>Time: {time}</p>
                  <p>Genres:</p>
                  <ul>
                    {genres.map((item,i) =>(
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
              </div>
            ))
          }
    </div>
  );
}

export default Movies;

