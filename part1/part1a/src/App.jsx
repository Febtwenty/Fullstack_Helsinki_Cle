const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old. I guess..</p>
    </div>
  )
}

const App = () => {
  const name = 'febtwenty'
  const age = 0

  return (
    <div>
      <h1>Greetings fellow passengers!</h1>
      <Hello name={name} age={age}/>
      <Hello name='Alex' age={26+10}/>
    </div>
  )
}

export default App
