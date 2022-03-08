import { useState } from "react";
import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

const Display = ({counter}) => <div>{counter}</div>

const App = () => {
  const [ counter, setCounter ] = useState(0)
  
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <Navbar />
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
    </>
  )
}
export default App;

