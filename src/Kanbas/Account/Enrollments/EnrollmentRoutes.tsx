import { Navigate, useParams } from 'react-router-dom';
export default function EnrollmentRoutes({ children, userCourses }: { children: any; userCourses: any[] }) {
    const { cid } = useParams();
    const enrollment = userCourses.find(course => course._id === cid);

    if (enrollment) {
        return children;
    } else {
        return <Navigate to='/Kanbas/Dashboard' />;
    }
}
