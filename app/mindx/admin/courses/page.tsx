import React from 'react';
import { LazyImport } from '@/utils/dynamicImport';

const AdminCourses = () => {
    const AdminCourseCpt = LazyImport('SCREENS', 'Admin/Courses', undefined, undefined, true);
    return <AdminCourseCpt />
}

export default AdminCourses;