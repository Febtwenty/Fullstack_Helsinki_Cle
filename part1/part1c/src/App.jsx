import { useState } from "react"

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <p>
        The app is used by pressing the buttons.
      </p>
    )
  }
  return (
    <p>
      Button press History: {props.allClicks.join(' ')}
    </p>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const [value, setValue] = useState(10)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    setTotal(total + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(total + 1)
  }

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}

      <History allClicks={allClicks} />

      <p>Total Clicks: {total}</p>

      <p>
        {value}
        <Button onClick={() => setToValue(1000)} text='thousand' />
        <Button onClick={() => setToValue(0)} text='reset' />
        <Button onClick={() => setToValue(value + 1)} text='increment' />
      </p>
    </div>
  )
}

export default App
