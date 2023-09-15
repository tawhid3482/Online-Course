
const Course = ({ selectCourse, remaining, totalTime }) => {
    let num = 1;
    return (
        <div>
            <p className="text-blue-600 font-bold">Credit Hour Remaining {remaining} </p>
            <hr className="border-t-1 border-gray-400"/>
            <br />
            <p className="font-bold text-2xl">Course Name</p>
            {
                selectCourse.map((course) => (
                    <p key={course.id}>{num++}. {course.course_name}</p>
                ))
            }
            <br />
            <hr  className="border-t-1 border-gray-400" />
            <p className="text-lg font-medium">Total Credit Hour: {totalTime}   </p>
        </div>
    );
};

export default Course;