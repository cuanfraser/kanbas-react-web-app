import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { pathname } = useLocation();
    const active = (path: string) => (pathname.includes(path) ? "active" : "text-danger");

    return (
        <div id='wd-account-navigation' className='wd list-group fs-5 rounded-0'>
            {!currentUser &&
                <Link
                    to={`/Kanbas/Account/Signin`}
                    className={`list-group-item border-0 ${active('Signin')}`}
                >
                    Signin
                </Link>
            }

            {!currentUser &&
                <Link
                    to={`/Kanbas/Account/Signup`}
                    className={`list-group-item border-0 ${active('Signup')}`}
                >
                    Signup
                </Link>}

            {currentUser &&
                <Link
                    to={`/Kanbas/Account/Profile`}
                    className={`list-group-item border-0 ${active('Profile')}`}
                >
                    Profile
                </Link>
            }

            {currentUser && currentUser.role === 'ADMIN' &&
                <Link to={`/Kanbas/Account/Users`} className={`list-group-item border-0 ${active('Users')}`}>
                    Users
                </Link>
            }
        </div>
    );
}
