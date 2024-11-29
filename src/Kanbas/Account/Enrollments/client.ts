import axios from 'axios';
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const deleteEnrollment = async (enrollmentId: string) => {
    const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
    return response.data;
};


