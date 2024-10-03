import { BsGripVertical } from 'react-icons/bs';
import LessonControlButtons from '../Modules/LessonControlButtons';
import { FaPlus } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

export default function Assignments() {
    return (
        <div id='wd-assignments' className='text-nowrap'>
            <div id='wd-assignments-controls' className='text-nowrap'>
                <div className='input-group'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text' id='basic-addon1'>
                            <CiSearch />
                        </span>
                    </div>
                    <input
                        id='wd-search-assignment'
                        className='form-control'
                        placeholder='Search for Assignments'
                    />
                </div>

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
                <li className='wd-module list-group-item p-0 mb-5 fs-5 border-gray'>
                    <div className='wd-title wd-title p-3 ps-2 bg-secondary'>
                        <BsGripVertical className='me-2 fs-3' />
                        <h3 id='wd-assignments-title'>
                            ASSIGNMENTS 40% of Total <button>+</button>
                        </h3>
                    </div>
                </li>

                <li className='wd-assignment-list-item wd-lesson list-group-item p-3 ps-1'>
                    <BsGripVertical className='me-2 fs-3' />
                    <div>
                        <a
                            className='wd-assignment-link'
                            href='#/Kanbas/Courses/1234/Assignments/A1'
                        >
                            A1 - ENV + HTML
                        </a>
                        <br />
                        Multiple Modules | Not available until May 6 at 12:00 am |
                        <br />
                        Due May 13 at 11:59pm | 100 pts
                    </div>
                    <LessonControlButtons />
                </li>
                <li className='wd-assignment-list-item wd-lesson list-group-item p-3 ps-1'>
                    <BsGripVertical className='me-2 fs-3' />
                    <div>
                        <a
                            className='wd-assignment-link'
                            href='#/Kanbas/Courses/1234/Assignments/A2'
                        >
                            A2 - CSS + BOOTSTRAP
                        </a>
                        <br />
                        Multiple Modules | Not available until May 13 at 12:00 am |
                        <br />
                        Due May 20 at 11:59pm | 100 pts
                    </div>
                    <LessonControlButtons />
                </li>
                <li className='wd-assignment-list-item wd-lesson list-group-item p-3 ps-1'>
                    <BsGripVertical className='me-2 fs-3' />
                    <div>
                        <a
                            className='wd-assignment-link'
                            href='#/Kanbas/Courses/1234/Assignments/A3'
                        >
                            A3 - JAVASCRIPT + REACT
                        </a>
                        <br />
                        Multiple Modules | Not available until May 20 at 12:00 am |
                        <br />
                        Due May 27 at 11:59pm | 100 pts
                    </div>
                    <LessonControlButtons />
                </li>
            </ul>
        </div>
    );
}
