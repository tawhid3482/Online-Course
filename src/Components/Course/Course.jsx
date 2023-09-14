
const Course = ({ selectCourse, remaining, totalTime }) => {
    console.log(selectCourse)
    let num = 1;
    return (
        <div>
            <p>Credit Hour Remaining {remaining} hr</p>
            <p className="font-bold text-2xl">Course Name</p>
            {
                selectCourse.map((course) => (
                    <p key={course.id}>{num++}. {course.course_name}</p>
                ))
            }
            <p className="text-lg font-medium">Total Credit Hour:{totalTime} </p>
        </div>
    );
};

export default Course;