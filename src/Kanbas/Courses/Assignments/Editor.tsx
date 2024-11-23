import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import FacultyOnly from '../../FacultyOnly';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addAssignment, updateAssignment } from './reducer';
import * as coursesClient from '../client';
import * as assignmentClient from './client';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const assignment = assignments.find((assignment: any) => assignment._id === aid);
    const dispatch = useDispatch();

    const createAssignmentForCourse = async (newAssignment: any) => {
        if (!cid) return;
        const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
        dispatch(addAssignment(assignment));
    };
    const saveAssignment = async (assignment: any) => {
        await assignmentClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    const [title, setTitle] = useState(assignment ? assignment.title : '');
    const [description, setDescription] = useState(assignment ? assignment.description : '');
    const [points, setPoints] = useState(assignment ? assignment.points : 0);
    const [due, setDueDate] = useState(assignment ? assignment.due : '');
    const [availableFrom, setAvailableFrom] = useState(assignment ? assignment.availableFrom : '');
    const [availableTo, setAvailableTo] = useState(assignment ? assignment.availableTo : '');

    return (
        <form id='wd-assignments-editor'>
            <label htmlFor='wd-name' className='form-label'>
                Assignment Name
            </label>
            <input
                id='wd-name'
                className='form-control'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br />
            <textarea
                id='wd-description'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />

            <div className='row mb-3'>
                <label htmlFor='wd-points' className='col-sm-2 col-form-label'>
                    Points
                </label>
                <div className='col-sm-10'>
                    <input
                        id='wd-points'
                        className='form-control'
                        value={points}
                        onChange={(e) => setPoints(parseInt(e.target.value))}
                    />
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
                            value={due}
                            onChange={(e) => setDueDate(e.target.value)}
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
                                    value={availableFrom}
                                    onChange={(e) => setAvailableFrom(e.target.value)}
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
                                    value={availableTo}
                                    onChange={(e) => setAvailableTo(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FacultyOnly>
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
                                onClick={() =>
                                    assignment
                                        ? saveAssignment({
                                              ...assignment,
                                              title: title,
                                              description: description,
                                              points: points,
                                              due: due,
                                              availableFrom: availableFrom,
                                              availableTo: availableTo,
                                          })
                                        : createAssignmentForCourse({
                                              title: title,
                                              description: description,
                                              points: points,
                                              due: due,
                                              availableFrom: availableFrom,
                                              availableTo: availableTo,
                                          })
                                }
                            />
                        </Link>
                    </div>
                </div>
            </FacultyOnly>
        </form>
    );
}
