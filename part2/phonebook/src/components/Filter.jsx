const Filter = ({ filter, setFilter }) => {
    return (
        <div>
            <form>
                <div>Filter shown with<input value={filter} onChange={e => setFilter(e.target.value)} /></div>
            </form>
        </div>
    )
}

export default Filter