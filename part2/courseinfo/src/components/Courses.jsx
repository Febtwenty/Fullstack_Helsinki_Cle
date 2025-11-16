const Courses = ({ courses }) => {

    const totalExercises = (course) => {
        const exercises = course.parts.map(part => part.exercises)
        const totalExercises = exercises.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        return totalExercises
    }

    return (
        <>
        {courses.map(course =>
            <div key={course.id}>
                <h1>{course.name}</h1>
                <div>
                    {course.parts.map(part =>
                        <p key={part.id}>{part.name} {part.exercises}</p>
                )}
                <p>Total of {totalExercises(course)} exercises</p>
                </div>
            </div>
        )}
        </>
    )
}

export default Courses