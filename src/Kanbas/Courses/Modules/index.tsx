import { useParams } from 'react-router';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons';
import ModulesControls from './ModulesControls';
import { BsGripVertical } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addModule, deleteModule, editModule, updateModule, setModules } from './reducer';
import * as coursesClient from '../client';
import * as modulesClient from './client';
import FacultyOnly from '../../FacultyOnly';

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState('');
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };
    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };
    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };
    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };

    useEffect(() => {
        fetchModules();
    }, []);

    return (
        <div>
            <FacultyOnly>
                <ModulesControls
                    setModuleName={setModuleName}
                    moduleName={moduleName}
                    addModule={createModuleForCourse}
                />
                <br />
                <br />
                <br />
                <br />
            </FacultyOnly>

            <ul id='wd-modules' className='list-group rounded-0'>
                {modules.map((module: any) => (
                    <li className='wd-module list-group-item p-0 mb-5 fs-5 border-gray' key={module._id}>
                        <div className='wd-title wd-title p-3 ps-2 bg-secondary'>
                            <BsGripVertical className='me-2 fs-3' />
                            {!module.editing && module.name}
                            {module.editing && (
                                <input
                                    className='form-control w-50 d-inline-block'
                                    onChange={(e) =>
                                        dispatch(updateModule({ ...module, name: e.target.value }))
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            saveModule({ ...module, editing: false });
                                        }
                                    }}
                                    defaultValue={module.name}
                                />
                            )}
                            <FacultyOnly>
                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={(moduleId) => removeModule(moduleId)}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                                />
                            </FacultyOnly>
                        </div>

                        {module.lessons && (
                            <ul className='wd-lessons list-group rounded-0'>
                                {module.lessons.map((lesson: any) => (
                                    <li className='wd-lesson list-group-item p-3 ps-1 d-flex align-items-center' key={lesson.id}>
                                        <BsGripVertical className='me-2 fs-3' />
                                        <p className='flex-grow-1 m-0'>{lesson.name}</p>

                                        <FacultyOnly>
                                            <div className='justify-content-end'>
                                                <LessonControlButtons />
                                            </div>
                                        </FacultyOnly>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
