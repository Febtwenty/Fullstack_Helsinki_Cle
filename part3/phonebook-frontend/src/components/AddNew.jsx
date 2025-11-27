const AddNew = ({ addEntry, newName, setNewName, newNumber, setNewNumber }) => {
    return (
        <div>
            <h2>add a new</h2>
            <form onSubmit={addEntry}>
                <div>Name: <input value={newName} onChange={e => setNewName(e.target.value)}/></div>
                <div>Number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)}/></div>
                <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}

export default AddNew