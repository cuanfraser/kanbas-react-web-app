import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FacultyOnly from '../FacultyOnly';
import StudentOnly from '../StudentOnly';
import { useEffect, useState } from 'react';
import EnrollButtons from '../Account/Enrollments/EnrollButtons';
import * as accountClient from '../Account/client';
import * as enrollmentClient from '../Account/Enrollments/client';
import { addEnrollment, deleteEnrollment, setEnrollments } from '../Account/Enrollments/reducer';

export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const dispatch = useDispatch();
    const [showAll, setShowAll] = useState(false);

    const fetchEnrollments = async () => {
        const enrollments = await accountClient.findUserEnrollments();
        dispatch(setEnrollments(enrollments));
    };

    const enroll = async (courseId: string) => {
        const newEnrollment = await accountClient.enrollUserInCourse(courseId);
        dispatch(addEnrollment(newEnrollment));
    }

    const unenroll = async (enrollmentId: string) => {
        await enrollmentClient.deleteEnrollment(enrollmentId);
        dispatch(deleteEnrollment(enrollmentId));
    }

    useEffect(() => {
        if (currentUser.role === 'FACULTY') {
            setShowAll(true);
        }
        fetchEnrollments();
    }, [currentUser.role]);

    return (
        <div id='wd-dashboard'>
            <h1 id='wd-dashboard-title'>Dashboard</h1> <hr />
            <FacultyOnly>
                <h5>
                    New Course
                    <button
                        className='btn btn-primary float-end'
                        id='wd-add-new-course-click'
                        onClick={addNewCourse}
                    >
                        Add
                    </button>
                    <button
                        className='btn btn-warning float-end me-2'
                        onClick={updateCourse}
                        id='wd-update-course-click'
                    >
                        Update
                    </button>
                </h5>
                <br />
                <input
                    value={course.name}
                    className='form-control mb-2'
                    onChange={(e) => setCourse({ ...course, name: e.target.value })}
                />
                <textarea
                    value={course.description}
                    className='form-control'
                    onChange={(e) => setCourse({ ...course, description: e.target.value })}
                />
                <hr />
            </FacultyOnly>
            <StudentOnly>
                <button className='btn btn-primary float-end' onClick={() => setShowAll(!showAll)}>
                    Enrollments
                </button>
            </StudentOnly>
            {showAll && <h2 id='wd-dashboard-published'>Published Courses ({courses.length})</h2>}
            {!showAll && <h2 id='wd-dashboard-enrolled'>Enrolled Courses</h2>}
            <hr />
            <div id='wd-dashboard-courses' className='row'>
                <div className='row row-cols-1 row-cols-md-5 g-4'>
                    {courses.map((course) => (
                        <div className='wd-dashboard-course col' style={{ width: '300px' }}>
                            <div className='card rounded-3 overflow-hidden'>
                                <Link
                                    className='wd-dashboard-course-link text-decoration-none text-dark'
                                    to={`/Kanbas/Courses/${course._id}/Home`}
                                >
                                    <img
                                        src={course.img ? course.img : '/images/reactjs.jpg'}
                                        width='100%'
                                        height={160}
                                    />
                                    <div className='card-body'>
                                        <h5 className='wd-dashboard-course-title card-title'>
                                            {course.name}
                                        </h5>
                                        <p
                                            className='wd-dashboard-course-title card-text overflow-y-hidden'
                                            style={{ maxHeight: 100 }}
                                        >
                                            {course.description}
                                        </p>
                                        <button className='btn btn-primary me-2'> Go </button>

                                        <FacultyOnly>
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}
                                                className='btn btn-danger float-end'
                                                id='wd-delete-course-click'
                                            >
                                                Delete
                                            </button>

                                            <button
                                                id='wd-edit-course-click'
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className='btn btn-warning me-2 float-end'
                                            >
                                                Edit
                                            </button>
                                        </FacultyOnly>

                                        <StudentOnly>
                                            <EnrollButtons
                                                courseId={course._id}
                                                userId={currentUser._id}
                                                enrollments={enrollments}
                                                unenroll={unenroll}
                                                enroll={enroll}
                                            />
                                        </StudentOnly>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
