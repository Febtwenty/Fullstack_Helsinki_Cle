const Course = ({ course }) => {
    console.log(course)
    return (
        <>
        <h1>{course.name}</h1>
        <div>
            {course.parts.map(part =>
                <p key={part.id}>{part.name} {part.exercises}</p>
            )}
        </div>
        </>
    )
}

export default Course