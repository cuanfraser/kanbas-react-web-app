export default function AssignmentEditor() {
    return (
        <form id='wd-assignments-editor'>
            <label htmlFor='wd-name' className='form-label'>
                Assignment Name
            </label>
            <input id='wd-name' className='form-control' value='A1 - ENV + HTML' />

            <br />
            <textarea id='wd-description' className='form-control'>
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />

            <div className='row mb-3'>
                <label htmlFor='wd-points' className='col-sm-2 col-form-label'>
                    Points
                </label>
                <div className='col-sm-10'>
                    <input id='wd-points' className='form-control' value={100} />
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

            <label htmlFor='wd-assign-to' className='form-label'>
                Assign to
            </label>
            <input id='wd-assign-to' className='form-control' value={'Everyone'} />

            <label htmlFor='wd-due-date' className='form-label'>
                Due
            </label>
            <input id='wd-due-date' className='form-control' type='date' value={'2024-05-13'} />

            <label htmlFor='wd-available-from' className='form-label'>
                Available from
            </label>
            <input
                id='wd-available-from'
                className='form-control'
                type='date'
                value={'2024-05-06'}
            />

            <label htmlFor='wd-available-until' className='form-label'>
                Until
            </label>
            <input
                id='wd-available-until'
                className='form-control'
                type='date'
                value={'2024-05-20'}
            />

            <input id='wd-cancel' className='form-control btn ' type='button' value='Cancel' />
            <input
                id='wd-save'
                className='form-control btn btn-danger'
                type='button'
                value='Save'
            />
        </form>
    );
}
