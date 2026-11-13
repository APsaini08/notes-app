import React, { useState } from 'react'

const App = () => {
  const [a, setA] = useState(0);
  function changeA(){
    console.log("Hello");
    setA(a+1);
  }
  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={changeA}>click</button>
    </div>
  )
}

export default App
