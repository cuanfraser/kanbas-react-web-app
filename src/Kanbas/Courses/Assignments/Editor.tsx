export default function AssignmentEditor() {
    return (
        <form id='wd-assignments-editor'>
            <label htmlFor='wd-name' className='form-label'>
                Assignment Name
            </label>
            <input id='wd-name' className='form-control' value='A1 - ENV + HTML' />
            <br />
            <br />
            <textarea id='wd-description' className='form-control'>
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />

            <label htmlFor='wd-points' className='form-label'>
                Points
            </label>

            <input id='wd-points' className='form-control' value={100} />

            <label htmlFor='wd-group' className='form-label'>
                Assignment Group
            </label>

            <select id='wd-group' className='form-control'>
                <option value='assignments'>Assignments</option>
            </select>

            <label htmlFor='wd-display-grade-as' className='form-label'>
                Display Grade as
            </label>

            <select id='wd-display-grade-as' className='form-control'>
                <option value='percentage'>Percentage</option>
                <option value='number'>Number</option>
            </select>

            <label htmlFor='wd-submission-type' className='form-label'>
                Submission Type
            </label>

            <select id='wd-submission-type' className='form-control'>
                <option value='online'>Online</option>
            </select>

            <label htmlFor='wd-text-entry' className='form-label'>
                Online Entry Options
            </label>

            <label htmlFor='wd-text-entry' className='form-label'>
                Text Entry
            </label>
            <input
                id='wd-text-entry'
                className='form-control'
                type='checkbox'
                value={'Text Entry'}
            />

            <label htmlFor='wd-website-url' className='form-label'>
                Website URL
            </label>
            <input
                id='wd-website-url'
                className='form-control'
                type='checkbox'
                value={'Website URL'}
            />

            <label htmlFor='wd-media-recordings' className='form-label'>
                Media Recordings
            </label>
            <input
                id='wd-media-recordings'
                className='form-control'
                type='checkbox'
                value={'Media Recordings'}
            />

            <label htmlFor='wd-student-annotation' className='form-label'>
                Student Annotation
            </label>
            <input
                id='wd-student-annotation'
                className='form-control'
                type='checkbox'
                value={'Student Annotation'}
            />

            <label htmlFor='wd-file-upload' className='form-label'>
                File Uploads
            </label>
            <input
                id='wd-file-upload'
                className='form-control'
                type='checkbox'
                value={'File Uploads'}
            />

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

            <input id='wd-cancel' className='form-control' type='button' value='Cancel' />
            <input id='wd-save' className='form-control' type='button' value='Save' />
        </form>
    );
}
