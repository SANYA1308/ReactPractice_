import React from 'react';
import {sum, sub, mul, div} from "./Cal";
function App(){
  return(
    <ul>
      <li>{sum(40,2)}</li>
      <li>{sub(40,2)}</li>
      <li>{mul(40,2)}</li>
      <li>{div(40,2)}</li>
    </ul>
  )
};

export default App;