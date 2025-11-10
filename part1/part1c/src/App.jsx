const App = (props) => {
  const {counter} = props
  console.log(counter)

  return (
    <div>
      {counter}
    </div>
  )
}

export default App
