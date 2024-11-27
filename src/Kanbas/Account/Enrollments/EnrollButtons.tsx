export default function EnrollButtons({
    course,
    updateEnrollment,
}: {
    course: any;
    updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
    if (course.enrolled) {
        return (
            <button
                className='btn btn-danger'
                onClick={(e) => {
                    e.preventDefault();
                    updateEnrollment(course._id, !course.enrolled);
                }}
            >
                Unenroll
            </button>
        );
    } else {
        return (
            <button
                className='btn btn-primary'
                onClick={(e) => {
                    e.preventDefault();
                    updateEnrollment(course._id, !course.enrolled);
                }}
            >
                Enroll
            </button>
        );
    }
}
