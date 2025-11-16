const Course = ({ course }) => {
    console.log(course)

    const exercises = course.parts.map(part => part.exercises)
    
    const totalExercises = exercises.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    return (
        <>
        <h1>{course.name}</h1>
        <div>
            {course.parts.map(part =>
                <p key={part.id}>{part.name} {part.exercises}</p>
            )}
        </div>
        <div>
            <b>Total of {totalExercises} exercises</b>
        </div>
        </>
    )
}

export default Course