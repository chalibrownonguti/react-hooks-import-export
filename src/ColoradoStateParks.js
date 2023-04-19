import React from "react";
import howManyParks from "./parks/howManyParks";
import Hogwarts from "./Hogwarts";
export default ColoradoStateParks;

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (<>
  <h1>Colorado State Parks!</h1>;
   <Hogwarts/>
  
  </>)
  
  
}


