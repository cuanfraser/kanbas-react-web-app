import { useParams } from 'react-router';
import * as db from '../../Database';
import { Link } from 'react-router-dom';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === aid);
    return (
        <form id='wd-assignments-editor'>
            <label htmlFor='wd-name' className='form-label'>
                Assignment Name
            </label>
            <input id='wd-name' className='form-control' value={assignment?.title} />

            <br />
            <textarea id='wd-description' className='form-control'>
                {assignment?.description}
            </textarea>
            <br />

            <div className='row mb-3'>
                <label htmlFor='wd-points' className='col-sm-2 col-form-label'>
                    Points
                </label>
                <div className='col-sm-10'>
                    <input id='wd-points' className='form-control' value={assignment?.points} />
                </div>
            </div>

            <div className='row mb-3'>
                <label htmlFor='wd-group' className='col-sm-2 col-form-label'>
                    Assignment Group
                </label>
                <div className='col-sm-10'>
                    <select id='wd-group' className='form-select'>
                        <option value='assignments'>Assignments</option>
                    </select>
                </div>
            </div>

            <div className='row mb-3'>
                <label htmlFor='wd-display-grade-as' className='col-sm-2 col-form-label'>
                    Display Grade as
                </label>
                <div className='col-sm-10'>
                    <select id='wd-display-grade-as' className='form-select'>
                        <option value='percentage'>Percentage</option>
                        <option value='number'>Number</option>
                    </select>
                </div>
            </div>

            <div className='row mb-3'>
                <label htmlFor='wd-entry-options' className='col-sm-2 col-form-label'>
                    Submission Type
                </label>

                <div id='wd-entry-options' className='col-sm-10 '>
                    <div className='form-control'>
                        <select id='wd-submission-type' className='form-select'>
                            <option value='online'>Online</option>
                        </select>

                        <label htmlFor='wd-text-entry' className='form-label'>
                            Online Entry Options
                        </label>

                        <div className='form-check'>
                            <label htmlFor='wd-text-entry' className='form-check-label'>
                                Text Entry
                            </label>
                            <input
                                id='wd-text-entry'
                                className='form-check-input'
                                type='checkbox'
                                value={'Text Entry'}
                            />
                        </div>

                        <div className='form-check'>
                            <label htmlFor='wd-website-url' className='form-check-label'>
                                Website URL
                            </label>
                            <input
                                id='wd-website-url'
                                className='form-check-input'
                                type='checkbox'
                                value={'Website URL'}
                            />
                        </div>

                        <div className='form-check'>
                            <label htmlFor='wd-media-recordings' className='form-check-label'>
                                Media Recordings
                            </label>
                            <input
                                id='wd-media-recordings'
                                className='form-check-input'
                                type='checkbox'
                                value={'Media Recordings'}
                            />
                        </div>

                        <div className='form-check'>
                            <label htmlFor='wd-student-annotation' className='form-check-label'>
                                Student Annotation
                            </label>
                            <input
                                id='wd-student-annotation'
                                className='form-check-input'
                                type='checkbox'
                                value={'Student Annotation'}
                            />
                        </div>

                        <div className='form-check'>
                            <label htmlFor='wd-file-upload' className='form-check-label'>
                                File Uploads
                            </label>
                            <input
                                id='wd-file-upload'
                                className='form-check-input'
                                type='checkbox'
                                value={'File Uploads'}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mb-3'>
                <label htmlFor='assign-options' className='col-sm-2 col-form-label'>
                    Assign
                </label>

                <div id='assign-options' className='col-sm-10'>
                    <div className='form-control'>
                        <label htmlFor='wd-assign-to' className='form-label'>
                            Assign to
                        </label>

                        <input id='wd-assign-to' className='form-control' value={'Everyone'} />
                        <label htmlFor='wd-due-date' className='form-label'>
                            Due
                        </label>
                        <input
                            id='wd-due-date'
                            className='form-control'
                            type='date'
                            value={assignment?.due}
                        />
                        <div className='row mb-3'>
                            <div className='col-sm-6'>
                                <label htmlFor='wd-available-from' className='form-label'>
                                    Available from
                                </label>
                                <input
                                    id='wd-available-from'
                                    className='form-control'
                                    type='date'
                                    value={assignment?.available}
                                />
                            </div>

                            <div className='col-sm-6'>
                                <label htmlFor='wd-available-until' className='form-label'>
                                    Until
                                </label>
                                <input
                                    id='wd-available-until'
                                    className='form-control'
                                    type='date'
                                    value={assignment?.available}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mb-3 justify-content-end'>
                <div className='col-md-2'>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <input
                            id='wd-cancel'
                            className='form-control btn btn-sm'
                            type='button'
                            value='Cancel'
                        />
                    </Link>
                </div>
                <div className='col-md-2'>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <input
                            id='wd-save'
                            className='form-control btn btn-sm btn-danger'
                            type='button'
                            value='Save'
                        />
                    </Link>
                </div>
            </div>
        </form>
    );
}
