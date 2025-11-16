const Numbers = ({ numbers }) => {
  return (
    <ul>
        {numbers.map(number => 
            <li key={number.name}>{number.name}</li>
        )}
    </ul>
  )
}

export default Numbers