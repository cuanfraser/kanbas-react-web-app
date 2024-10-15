import { Link } from 'react-router-dom';
export default function Dashboard() {
    return (
        <div id='wd-dashboard'>
            <h1 id='wd-dashboard-title'>Dashboard</h1> <hr />
            <h2 id='wd-dashboard-published'>Published Courses (12)</h2> <hr />
            <div id='wd-dashboard-courses' className='row'>
                <div className='row row-cols-1 row-cols-md-5 g-4'>
                    <div className='wd-dashboard-course col' style={{ width: '300px' }}>
                        <div className='card rounded-3 overflow-hidden'>
                            <Link
                                className='wd-dashboard-course-link text-decoration-none text-dark'
                                to='/Kanbas/Courses/1234/Home'
                            >
                                <img src='/images/reactjs.jpg' width='100%' height={160} />
                                <div className='card-body'>
                                    <h5 className='wd-dashboard-course-title card-title'>
                                        CS1234 React JS
                                    </h5>
                                    <p className='wd-dashboard-course-title card-text'>
                                        Full Stack software developer
                                    </p>
                                    <button className='btn btn-primary'> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='wd-dashboard-course col' style={{ width: '300px' }}>
                        <div className='card rounded-3 overflow-hidden'>
                            <Link
                                className='wd-dashboard-course-link text-decoration-none text-dark'
                                to='/Kanbas/Courses/2/Home'
                            >
                                <img src='/images/class2.jpg' width='100%' height={160} />
                                <div className='card-body'>
                                    <h5 className='wd-dashboard-course-title card-title'>
                                        Class 2
                                    </h5>
                                    <p className='wd-dashboard-course-title card-text'>Being a dev</p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='wd-dashboard-course col' style={{ width: '300px' }}>
                        <div className='card rounded-3 overflow-hidden'>
                            <Link
                                className='wd-dashboard-course-link text-decoration-none text-dark'
                                to='/Kanbas/Courses/3/Home'
                            >
                                <img src='/images/class3.jpg' width='100%' height={160} />
                                <div className='card-body'>
                                    <h5 className='wd-dashboard-course-title card-title'>
                                        Class 3
                                    </h5>
                                    <p className='wd-dashboard-course-title card-text'>Stuff</p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='wd-dashboard-course col' style={{ width: '300px' }}>
                        <div className='card rounded-3 overflow-hidden'>
                            <Link
                                className='wd-dashboard-course-link text-decoration-none text-dark'
                                to='/Kanbas/Courses/4/Home'
                            >
                                <img src='/images/class4.jpg' width='100%' height={160} />
                                <div className='card-body'>
                                    <h5 className='wd-dashboard-course-title card-title'>
                                        Class 4
                                    </h5>
                                    <p className='wd-dashboard-course-title card-text'>Content</p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='wd-dashboard-course col' style={{ width: '300px' }}>
                        <div className='card rounded-3 overflow-hidden'>
                            <Link
                                className='wd-dashboard-course-link text-decoration-none text-dark'
                                to='/Kanbas/Courses/5/Home'
                            >
                                <img src='/images/class5.jpg' width='100%' height={160} />
                                <div className='card-body'>
                                    <h5 className='wd-dashboard-course-title card-title'>
                                        Class 5
                                    </h5>
                                    <p className='wd-dashboard-course-title card-text'>More stuff</p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='wd-dashboard-course col' style={{ width: '300px' }}>
                        <div className='card rounded-3 overflow-hidden'>
                            <Link
                                className='wd-dashboard-course-link text-decoration-none text-dark'
                                to='/Kanbas/Courses/6/Home'
                            >
                                <img src='/images/class6.jpg' width='100%' height={160} />
                                <div className='card-body'>
                                    <h5 className='wd-dashboard-course-title card-title'>
                                        Class 6
                                    </h5>
                                    <p className='wd-dashboard-course-title card-text'>Wow</p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='wd-dashboard-course col' style={{ width: '300px' }}>
                        <div className='card rounded-3 overflow-hidden'>
                            <Link
                                className='wd-dashboard-course-link text-decoration-none text-dark'
                                to='/Kanbas/Courses/7/Home'
                            >
                                <img src='/images/class7.jpg' width='100%' height={160} />
                                <div className='card-body'>
                                    <h5 className='wd-dashboard-course-title card-title'>
                                        Class 7
                                    </h5>
                                    <p className='wd-dashboard-course-title card-text'>Learning</p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
