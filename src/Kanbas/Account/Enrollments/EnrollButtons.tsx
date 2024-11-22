export default function EnrollButtons({
    courseId,
    userId,
    enrollments,
    unenroll,
    enroll
}: {
    courseId: string;
    userId: string;
    enrollments: any[];
    unenroll: (enrollmentId: string) => void;
    enroll: (course: string) => void;
}) {
    const enrollment = enrollments.find(
        (enrollment: any) => enrollment.user === userId && enrollment.course === courseId
    );
    if (enrollment) {
        return (
            <button
                className='btn btn-danger'
                onClick={(e) => {
                    e.preventDefault();
                    unenroll(enrollment._id);
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
                    enroll(courseId);
                }}
            >
                Enroll
            </button>
        );
    }
}
