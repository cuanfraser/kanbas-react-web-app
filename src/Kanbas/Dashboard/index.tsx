import { Link } from 'react-router-dom';
export default function Dashboard() {
    return (
        <div id='wd-dashboard'>
            <h1 id='wd-dashboard-title'>Dashboard</h1> <hr />
            <h2 id='wd-dashboard-published'>Published Courses (12)</h2> <hr />
            <div id='wd-dashboard-courses'>
                <div className='wd-dashboard-course'>
                    <Link className='wd-dashboard-course-link' to='/Kanbas/Courses/1234/Home'>
                        <img src='/images/reactjs.jpg' width={200} />
                        <div>
                            <h5>CS1234 React JS</h5>
                            <p className='wd-dashboard-course-title'>
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className='wd-dashboard-course'>
                    <Link className='wd-dashboard-course-link' to='/Kanbas/Courses/2/Home'>
                        <img src='/images/class2.jpg' width={200} />
                        <div>
                            <h5>Class 2</h5>
                            <p className='wd-dashboard-course-title'>Being a dev</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className='wd-dashboard-course'>
                    <Link className='wd-dashboard-course-link' to='/Kanbas/Courses/3/Home'>
                        <img src='/images/class3.jpg' width={200} />
                        <div>
                            <h5>Class 3</h5>
                            <p className='wd-dashboard-course-title'>Stuff</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className='wd-dashboard-course'>
                    <Link className='wd-dashboard-course-link' to='/Kanbas/Courses/4/Home'>
                        <img src='/images/class4.jpg' width={200} />
                        <div>
                            <h5>Class 4</h5>
                            <p className='wd-dashboard-course-title'>Content</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className='wd-dashboard-course'>
                    <Link className='wd-dashboard-course-link' to='/Kanbas/Courses/5/Home'>
                        <img src='/images/class5.jpg' width={200} />
                        <div>
                            <h5>Class 5</h5>
                            <p className='wd-dashboard-course-title'>More stuff</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className='wd-dashboard-course'>
                    <Link className='wd-dashboard-course-link' to='/Kanbas/Courses/6/Home'>
                        <img src='/images/class6.jpg' width={200} />
                        <div>
                            <h5>Class 6</h5>
                            <p className='wd-dashboard-course-title'>Wow</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className='wd-dashboard-course'>
                    <Link className='wd-dashboard-course-link' to='/Kanbas/Courses/7/Home'>
                        <img src='/images/class7.jpg' width={200} />
                        <div>
                            <h5>Class 7</h5>
                            <p className='wd-dashboard-course-title'>Learning</p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
