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
            <table>
                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-points' className='form-label'>
                            Points
                        </label>
                    </td>
                    <td>
                        <input id='wd-points' className='form-control' value={100} />
                    </td>
                </tr>
                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-group' className='form-label'>
                            Assignment Group
                        </label>
                    </td>
                    <td>
                        <select id='wd-group' className='form-control'>
                            <option value='assignments'>Assignments</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-display-grade-as' className='form-label'>
                            Display Grade as
                        </label>
                    </td>
                    <td>
                        <select id='wd-display-grade-as' className='form-control'>
                            <option value='percentage'>Percentage</option>
                            <option value='number'>Number</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-submission-type' className='form-label'>
                            Submission Type
                        </label>
                    </td>
                    <td>
                        <select id='wd-submission-type' className='form-control'>
                            <option value='online'>Online</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-text-entry' className='form-label'>
                            Online Entry Options
                        </label>
                        <table>
                            <tr>
                                <td align='right' valign='top'>
                                    <label htmlFor='wd-text-entry' className='form-label'>
                                        Text Entry
                                    </label>
                                    <input
                                        id='wd-text-entry'
                                        className='form-control'
                                        type='checkbox'
                                        value={'Text Entry'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align='right' valign='top'>
                                    <label htmlFor='wd-website-url' className='form-label'>
                                        Website URL
                                    </label>
                                    <input
                                        id='wd-website-url'
                                        className='form-control'
                                        type='checkbox'
                                        value={'Website URL'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align='right' valign='top'>
                                    <label htmlFor='wd-media-recordings' className='form-label'>
                                        Media Recordings
                                    </label>
                                    <input
                                        id='wd-media-recordings'
                                        className='form-control'
                                        type='checkbox'
                                        value={'Media Recordings'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align='right' valign='top'>
                                    <label htmlFor='wd-student-annotation' className='form-label'>
                                        Student Annotation
                                    </label>
                                    <input
                                        id='wd-student-annotation'
                                        className='form-control'
                                        type='checkbox'
                                        value={'Student Annotation'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align='right' valign='top'>
                                    <label htmlFor='wd-file-upload' className='form-label'>
                                        File Uploads
                                    </label>
                                    <input
                                        id='wd-file-upload'
                                        className='form-control'
                                        type='checkbox'
                                        value={'File Uploads'}
                                    />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-assign-to' className='form-label'>
                            Assign to
                        </label>
                    </td>
                    <td>
                        <input id='wd-assign-to' className='form-control' value={'Everyone'} />
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-due-date' className='form-label'>
                            Due
                        </label>
                    </td>
                    <td>
                        <input
                            id='wd-due-date'
                            className='form-control'
                            type='date'
                            value={'2024-05-13'}
                        />
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-available-from' className='form-label'>
                            Available from
                        </label>
                    </td>
                    <td>
                        <input
                            id='wd-available-from'
                            className='form-control'
                            type='date'
                            value={'2024-05-06'}
                        />
                    </td>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-available-until' className='form-label'>
                            Until
                        </label>
                    </td>
                    <td>
                        <input
                            id='wd-available-until'
                            className='form-control'
                            type='date'
                            value={'2024-05-20'}
                        />
                    </td>
                </tr>
            </table>
            <input id='wd-cancel' className='form-control' type='button' value='Cancel' />
            <input id='wd-save' className='form-control' type='button' value='Save' />
        </form>
    );
}
