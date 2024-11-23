export default function EnrollButtons({
    course,
    userId,
    enrollments,
    unenroll,
    enroll
}: {
    course: any;
    userId: string;
    enrollments: any[];
    unenroll: (enrollmentId: string, course: any) => void;
    enroll: (course: string) => void;
}) {
    const enrollment = enrollments.find(
        (enrollment: any) => enrollment.user === userId && enrollment.course === course._id
    );
    if (enrollment) {
        return (
            <button
                className='btn btn-danger'
                onClick={(e) => {
                    e.preventDefault();
                    unenroll(enrollment._id, course);
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
                    enroll(course);
                }}
            >
                Enroll
            </button>
        );
    }
}
