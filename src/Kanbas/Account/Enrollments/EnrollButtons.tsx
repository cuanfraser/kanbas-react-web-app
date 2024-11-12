import { useDispatch } from 'react-redux';
import { addEnrollment, deleteEnrollment } from './reducer';

export default function EnrollButtons({
    courseId,
    userId,
    enrollments,
}: {
    courseId: string;
    userId: string;
    enrollments: any[];
}) {
    const dispatch = useDispatch();
    const enrollment = enrollments.find(
        (enrollment: any) => enrollment.user === userId && enrollment.course === courseId
    );
    if (enrollment) {
        return (
            <button
                className='btn btn-danger'
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteEnrollment(enrollment._id));
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
                    dispatch(addEnrollment({ user: userId, course: courseId }));
                }}
            >
                Enroll
            </button>
        );
    }
}
