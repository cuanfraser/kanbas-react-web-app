export default function AssignmentEditor() {
    return (
        <div id='wd-assignments-editor'>
            <label htmlFor='wd-name'>Assignment Name</label>
            <input id='wd-name' value='A1 - ENV + HTML' />
            <br />
            <br />
            <textarea id='wd-description'>
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-points'>Points</label>
                    </td>
                    <td>
                        <input id='wd-points' value={100} />
                    </td>
                </tr>
                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-group'>Assignment Group</label>
                    </td>
                    <td>
                        <select id='wd-group'>
                            <option value='assignments'>Assignments</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-display-grade-as'>Display Grade as</label>
                    </td>
                    <td>
                        <select id='wd-display-grade-as'>
                            <option value='percentage'>Percentage</option>
                            <option value='number'>Number</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-submission-type'>Submission Type</label>
                    </td>
                    <td>
                        <select id='wd-submission-type'>
                            <option value='online'>Online</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-text-entry'>Online Entry Options</label>
                        <table>
                            <tr>
                                <td align='right' valign='top'>
                                    <label htmlFor='wd-text-entry'>Text Entry</label>
                                    <input
                                        id='wd-text-entry'
                                        type='checkbox'
                                        value={'Text Entry'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align='right' valign='top'>
                                    <label htmlFor='wd-website-url'>Website URL</label>
                                    <input
                                        id='wd-website-url'
                                        type='checkbox'
                                        value={'Website URL'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align='right' valign='top'>
                                    <label htmlFor='wd-media-recordings'>Media Recordings</label>
                                    <input
                                        id='wd-media-recordings'
                                        type='checkbox'
                                        value={'Media Recordings'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align='right' valign='top'>
                                    <label htmlFor='wd-student-annotation'>
                                        Student Annotation
                                    </label>
                                    <input
                                        id='wd-student-annotation'
                                        type='checkbox'
                                        value={'Student Annotation'}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td align='right' valign='top'>
                                    <label htmlFor='wd-file-upload'>File Uploads</label>
                                    <input
                                        id='wd-file-upload'
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
                        <label htmlFor='wd-assign-to'>Assign to</label>
                    </td>
                    <td>
                        <input id='wd-assign-to' value={'Everyone'} />
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-due-date'>Due</label>
                    </td>
                    <td>
                        <input id='wd-due-date' type='date' value={'2024-05-13'} />
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-available-from'>Available from</label>
                    </td>
                    <td>
                        <input id='wd-available-from' type='date' value={'2024-05-06'} />
                    </td>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-available-until'>Until</label>
                    </td>
                    <td>
                        <input id='wd-available-until' type='date' value={'2024-05-20'} />
                    </td>
                </tr>
            </table>
            <input id='wd-cancel' type='button' value='Cancel' />
            <input id='wd-save' type='button' value='Save' />
        </div>
    );
}
