import { MdDoNotDisturbAlt } from 'react-icons/md';
import { FaBell, FaCheckCircle, FaHome } from 'react-icons/fa';
import { BiImport } from 'react-icons/bi';
import { LiaFileImportSolid } from 'react-icons/lia';
import { IoIosStats } from 'react-icons/io';
import { LuMegaphone } from 'react-icons/lu';
import FacultyOnly from '../../FacultyOnly';

export default function CourseStatus() {
    return (
        <div id='wd-course-status' style={{ width: '300px' }}>
            <h2>Course Status</h2>
            <FacultyOnly>
                <div className='d-flex'>
                    <div className='w-50 pe-1'>
                        <button className='btn btn-lg btn-secondary w-100 text-nowrap '>
                            <MdDoNotDisturbAlt className='me-2 fs-5' /> Unpublish{' '}
                        </button>
                    </div>
                    <div className='w-50'>
                        <button className='btn btn-lg btn-success w-100'>
                            <FaCheckCircle className='me-2 fs-5' /> Publish{' '}
                        </button>
                    </div>
                </div>
                <br />
                <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
                    <BiImport className='me-2 fs-5' /> Import Existing Content{' '}
                </button>
                <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
                    <LiaFileImportSolid className='me-2 fs-5' /> Import from Commons{' '}
                </button>
                <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
                    <FaHome className='me-2 fs-5' /> Choose Home Page{' '}
                </button>
            </FacultyOnly>

            <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
                <IoIosStats className='me-2 fs-5' /> View Course Screen{' '}
            </button>

            <FacultyOnly>
                <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
                    <LuMegaphone className='me-2 fs-5' /> New Announcemnt{' '}
                </button>
                <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
                    <IoIosStats className='me-2 fs-5' /> New Analytics{' '}
                </button>
            </FacultyOnly>

            <button className='btn btn-lg btn-secondary w-100 mt-1 text-start'>
                <FaBell className='me-2 fs-5' /> View Course Notifications{' '}
            </button>
        </div>
    );
}
