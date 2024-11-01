import * as db from '../../Database';
import { BsGripVertical } from 'react-icons/bs';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { FaPlus } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { VscNotebook } from 'react-icons/vsc';
import { IoEllipsisVertical } from 'react-icons/io5';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import FacultyOnly from '../../FacultyOnly';

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div id='wd-assignments' className='text-nowrap'>
            <div id='wd-assignments-controls' className='row'>
                <div className='col-sm-1'>
                    <CiSearch />
                </div>
                <div className='col-sm-6'>
                    <input
                        id='wd-search-assignment'
                        className='form-control w-50'
                        placeholder='Search for Assignments'
                    />
                </div>

                <FacultyOnly>
                    <div className='col-sm-5'>
                        <button
                            id='wd-add-assignment-group'
                            className='btn btn-lg btn-secondary me-1 float-end'
                        >
                            <FaPlus className='position-relative me-2' style={{ bottom: '1px' }} />
                            Group
                        </button>
                        <Link
                            id='wd-add-assignment'
                            className='btn btn-lg btn-danger me-1 float-end'
                            to={`/Kanbas/Courses/${cid}/Assignments/new`}
                        >
                            <FaPlus className='position-relative me-2' style={{ bottom: '1px' }} />
                            Assignment
                        </Link>
                    </div>
                </FacultyOnly>
            </div>

            <ul id='wd-assignment-list' className='list-group rounded-0'>
                <li className='wd-assignment-list-item list-group-item p-0 fs-5 border-gray'>
                    <div className='wd-title wd-title p-3 ps-2 bg-secondary'>
                        <BsGripVertical className='me-2 fs-3' />
                        ASSIGNMENTS
                        <FacultyOnly>
                            <IoEllipsisVertical className='fs-4 float-end' />
                            <FaPlus className='me-2 float-end ' style={{ bottom: '1px' }} />
                        </FacultyOnly>
                        <button className='btn btn-sm btn-secondary float-end'>40% of Total</button>
                    </div>
                </li>

                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                            className='text-decoration-none'
                        >
                            <li className='wd-assignment-list-item wd-lesson list-group-item p-3 ps-1'>
                                <div className='row align-items-center'>
                                    <div className='col-md-1'>
                                        <BsGripVertical className='fs-3' />
                                        <VscNotebook className='fs-3 text-success' />
                                    </div>

                                    <div className='col-md-10'>
                                        <a
                                            className='wd-assignment-link text-dark text-bold text-decoration-none'
                                            href='#/Kanbas/Courses/1234/Assignments/A1'
                                        >
                                            <h2>{assignment.title}</h2>
                                        </a>
                                        <div className='d-flex flex-row'>
                                            <p className='text-success'>
                                                {assignment.modules} Modules |{' '}
                                            </p>
                                            <p> Not available until {assignment.available} | </p>
                                            <p>
                                                Due {assignment.due} | {assignment.points} pts
                                            </p>
                                        </div>
                                    </div>
                                    <FacultyOnly>
                                        <div className='col-md-1'>
                                            <LessonControlButtons />
                                        </div>
                                    </FacultyOnly>
                                </div>
                            </li>
                        </Link>
                    ))}
            </ul>
        </div>
    );
}
