import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div id='wd-account-navigation' className='wd list-group fs-5 rounded-0'>
            {!currentUser && (
                <div>
                    <Link
                        to={`/Kanbas/Account/Signin`}
                        className='list-group-item active border border-0'
                    >
                        Signin
                    </Link>
                    <br />
                    <Link
                        to={`/Kanbas/Account/Signup`}
                        className='list-group-item text-danger border border-0'
                    >
                        Signup
                    </Link>
                    <br />
                </div>
            )}

            {currentUser && (
                <Link
                    to={`/Kanbas/Account/Profile`}
                    className='list-group-item text-danger border border-0'
                >
                    Profile
                </Link>
            )}
            <br />
        </div>
    );
}
