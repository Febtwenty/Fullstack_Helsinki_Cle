const Notification = ({ newName }) => {
    if (newName === null) {
        return null
    }

    return (
        <div className="notification">
            Added {newName}
        </div>
    )
}

export default Notification