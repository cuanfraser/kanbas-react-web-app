import { BsGripVertical } from 'react-icons/bs';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { FaPlus } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { VscNotebook } from 'react-icons/vsc';
import { IoEllipsisVertical } from 'react-icons/io5';

export default function Assignments() {
    return (
        <div id='wd-assignments' className='text-nowrap'>
            <div id='wd-assignments-controls d-flex flex-row' className=''>
                <div>
                    <CiSearch />
                </div>
                <input
                    id='wd-search-assignment'
                    className='form-control w-50'
                    placeholder='Search for Assignments'
                />

                <button
                    id='wd-add-assignment-group'
                    className='btn btn-lg btn-secondary me-1 float-end'
                >
                    <FaPlus className='position-relative me-2' style={{ bottom: '1px' }} />
                    Group
                </button>
                <button id='wd-add-assignment' className='btn btn-lg btn-danger me-1 float-end'>
                    <FaPlus className='position-relative me-2' style={{ bottom: '1px' }} />
                    Assignment
                </button>
            </div>

            <ul id='wd-assignment-list' className='list-group rounded-0'>
                <li className='wd-assignment-list-item list-group-item p-0 fs-5 border-gray'>
                    <div className='wd-title wd-title p-3 ps-2 bg-secondary'>
                        <BsGripVertical className='me-2 fs-3' />
                        ASSIGNMENTS
                        <IoEllipsisVertical className='fs-4 float-end' />
                        <FaPlus className='me-2 float-end ' style={{ bottom: '1px' }} />
                        <button className='btn btn-sm btn-secondary float-end'>40% of Total</button>
                    </div>
                </li>

                <li className='wd-assignment-list-item wd-lesson list-group-item p-3 ps-1'>
                    <div className='d-flex flex-row align-items-center'>
                        <BsGripVertical className='me-2 fs-3' />
                        <VscNotebook className='me-2 fs-3 text-success' />
                        <div>
                            <a
                                className='wd-assignment-link text-dark text-bold text-decoration-none'
                                href='#/Kanbas/Courses/1234/Assignments/A1'
                            >
                                <h2>A1</h2>
                            </a>
                            <div className='d-flex flex-row'>
                                <p className='text-success'>Multiple Modules | </p>
                                <p> Not available until May 6 at 12:00 am | </p>
                                <p>Due May 13 at 11:59pm | 100 pts</p>
                            </div>
                        </div>
                        <div className='justify-content-end float-end'>
                            <LessonControlButtons />
                        </div>
                    </div>
                </li>
                <li className='wd-assignment-list-item wd-lesson list-group-item p-3 ps-1'>
                    <div className='d-flex flex-row align-items-center'>
                        <BsGripVertical className='me-2 fs-3' />
                        <VscNotebook className='me-2 fs-3 text-success' />
                        <div>
                            <a
                                className='wd-assignment-link text-dark text-bold text-decoration-none'
                                href='#/Kanbas/Courses/1234/Assignments/A2'
                            >
                                <h2>A2</h2>
                            </a>
                            <div className='d-flex flex-row'>
                                <p className='text-success'>Multiple Modules | </p>
                                <p> Not available until May 6 at 12:00 am | </p>
                                <p>Due May 13 at 11:59pm | 100 pts</p>
                            </div>
                        </div>
                        <div className='justify-content-end float-end'>
                            <LessonControlButtons />
                        </div>
                    </div>
                </li>
                <li className='wd-assignment-list-item wd-lesson list-group-item p-3 ps-1'>
                    <div className='d-flex flex-row align-items-center'>
                        <BsGripVertical className='me-2 fs-3' />
                        <VscNotebook className='me-2 fs-3 text-success' />
                        <div>
                            <a
                                className='wd-assignment-link text-dark text-bold text-decoration-none'
                                href='#/Kanbas/Courses/1234/Assignments/A3'
                            >
                                <h2>A3</h2>
                            </a>
                            <div className='d-flex flex-row'>
                                <p className='text-success'>Multiple Modules | </p>
                                <p> Not available until May 6 at 12:00 am | </p>
                                <p>Due May 13 at 11:59pm | 100 pts</p>
                            </div>
                        </div>
                        <div className='justify-content-end float-end'>
                            <LessonControlButtons />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
