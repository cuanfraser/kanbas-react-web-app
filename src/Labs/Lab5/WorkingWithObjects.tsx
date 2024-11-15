import React, { useState } from 'react';
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: 'NodeJS Assignment',
        description: 'Create a NodeJS server with ExpressJS',
        due: '2021-10-10',
        completed: false,
        score: 0,
    });
    const [module, setModule] = useState({
        id: 2,
        name: 'NodeJS Module',
        description: 'How to use modules',
        course: 2,
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    return (
        <div id='wd-working-with-objects'>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a
                id='wd-retrieve-assignments'
                className='btn btn-primary'
                href={`${REMOTE_SERVER}/lab5/assignment`}
            >
                Get Assignment
            </a>
            <hr />
            <h4>Retrieving Properties</h4>
            <a
                id='wd-retrieve-assignment-title'
                className='btn btn-primary'
                href={`${REMOTE_SERVER}/lab5/assignment/title`}
            >
                Get Title
            </a>
            <hr />
            <h4>Modifying Properties</h4>
            <a
                id='wd-update-assignment-title'
                className='btn btn-primary float-end'
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
            >
                Update Title
            </a>
            <input
                className='form-control w-75'
                id='wd-assignment-title'
                defaultValue={assignment.title}
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            />
            <hr />
            <a
                id='wd-update-assignment-score'
                className='btn btn-primary float-end'
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
            >
                Update Score
            </a>
            <input
                type='number'
                className='form-control w-75'
                id='wd-assignment-score'
                defaultValue={assignment.score}
                onChange={(e) => setAssignment({ ...assignment, score: Number(e.target.value) })}
            />
            <hr />
            <a
                id='wd-update-assignment-completed'
                className='btn btn-primary float-end'
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
            >
                Update completed
            </a>
            <input
                type='checkbox'
                id='wd-assignment-completed'
                defaultChecked={assignment.completed}
                onChange={(e) => setAssignment({ ...assignment, completed: Boolean(e.target.value) })}
            />
            <hr />

            <h4>Module</h4>
            <a
                id='wd-retrieve-assignments'
                className='btn btn-primary'
                href={`${REMOTE_SERVER}/lab5/module`}
            >
                Get Module
            </a>
            <hr />
            <a
                id='wd-retrieve-assignment-title'
                className='btn btn-primary'
                href={`${REMOTE_SERVER}/lab5/module/name`}
            >
                Get Module Name
            </a>
            <hr />
            <a
                id='wd-update-module-name'
                className='btn btn-primary float-end'
                href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}
            >
                Update Name
            </a>
            <input
                className='form-control w-75'
                id='wd-module-name'
                defaultValue={module.name}
                onChange={(e) => setModule({ ...module, name: e.target.value })}
            />
            <hr />
            <a
                id='wd-update-module-description'
                className='btn btn-primary float-end'
                href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}
            >
                Update Description
            </a>
            <input
                className='form-control w-75'
                id='wd-module-description'
                defaultValue={module.description}
                onChange={(e) => setModule({ ...module, description: e.target.value })}
            />
            <hr />
        </div>
    );
}
