import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as client from './client';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './reducer';
export default function Signup() {
    const [user, setUser] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signup = async () => {
        const currentUser = await client.signup(user);
        dispatch(setCurrentUser(currentUser));
        navigate('/Kanbas/Account/Profile');
    };

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    useEffect(() => {
        if (currentUser) return navigate('/Kanbas/Account/Profile');
    }, [currentUser, navigate])

    return (
        <div className='wd-signup-screen'>
            <h3>Sign up</h3>
            <input
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className='wd-username form-control mb-2'
                placeholder='username'
            />
            <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type='password'
                className='wd-password form-control mb-2'
                placeholder='password'
            />
            <button onClick={signup} className='wd-signup-btn btn btn-primary mb-2 w-100'>
                Sign up
            </button>
            <Link to='/Kanbas/Account/Signin' className='wd-signin-link'>
                Sign in
            </Link>
        </div>
    );
}
