import { useState } from "react"

const Display = ({counter}) => <>{counter}</>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} /> <br />
      <Button onClick={increaseByOne} text='Plus one'/> <br />
      <Button onClick={decreaseByOne} text='Minus one'/> <br />
      <Button onClick={setToZero} text='Reset'/>
    </div>
  )
}

export default App
