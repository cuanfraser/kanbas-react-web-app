export default function Assignments() {
    return (
        <div id='wd-assignments'>
            <input id='wd-search-assignment' placeholder='Search for Assignments' />
            <button id='wd-add-assignment-group'>+ Group</button>
            <button id='wd-add-assignment'>+ Assignment</button>
            <h3 id='wd-assignments-title'>
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id='wd-assignment-list'>
                <li className='wd-assignment-list-item'>
                    <a className='wd-assignment-link' href='#/Kanbas/Courses/1234/Assignments/A1'>
                        A1 - ENV + HTML
                    </a>
                    <br />
                    Multiple Modules
                    <br />
                    Due Tomorrow!
                </li>
                <li className='wd-assignment-list-item'>
                    <a className='wd-assignment-link' href='#/Kanbas/Courses/1234/Assignments/A2'>
                        A2 - CSS + BOOTSTRAP
                    </a>
                    <br />
                    Multiple Modules
                    <br />
                    Due Next Week!
                </li>
                <li className='wd-assignment-list-item'>
                    <a className='wd-assignment-link' href='#/Kanbas/Courses/1234/Assignments/A3'>
                        A3 - JAVASCRIPT + REACT
                    </a>
                    <br />
                    One Modules
                    <br />
                    Due 2025!
                </li>
            </ul>
        </div>
    );
}
