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
                        <input id='wd-group' value={'ASSIGNMENTS'} />
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-display-grade-as'>Display Grade as</label>
                    </td>
                    <td>
                        <input id='wd-display-grade-as' value={'Percentage'} />
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-submission-type'>Submission Type</label>
                    </td>
                    <td>
                        <input id='wd-submission-type' value={'Online'} />
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-text-entry'>Online Entry Options</label>
                    </td>
                    <td>
                        <input id='wd-text-entry' value={'Online'} />
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
                        <input id='wd-due-date' type='date' value={'05/13/2024'} />
                    </td>
                </tr>

                <tr>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-available-from'>Available from</label>
                    </td>
                    <td>
                        <input id='wd-available-from' type='date' value={'05/06/2024'} />
                    </td>
                    <td align='right' valign='top'>
                        <label htmlFor='wd-available-until'>Until</label>
                    </td>
                    <td>
                        <input id='wd-available-until' type='date' value={'05/20/2024'} />
                    </td>
                </tr>
            </table>
        </div>
    );
}
