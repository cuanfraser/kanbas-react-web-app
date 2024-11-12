import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setTodo, updateTodo } from './todosReducer';

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className='list-group-item'>
            <div className='d-flex justify-content-start flex-row'>
                <div className='p-2'>
                    <input
                        className='form-control col-md-1'
                        value={todo.title}
                        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
                    />
                </div>

                <div className='p-2'>
                    <button
                        className='btn btn-warning'
                        onClick={() => dispatch(updateTodo(todo))}
                        id='wd-update-todo-click'
                    >
                        Update
                    </button>
                </div>

                <div className='p-2'>
                    <button
                        className='btn btn-success'
                        onClick={() => dispatch(addTodo(todo))}
                        id='wd-add-todo-click'
                    >
                        Add
                    </button>
                </div>
            </div>
        </li>
    );
}
