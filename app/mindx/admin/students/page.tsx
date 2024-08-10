import React from 'react';
import { LazyImport } from '@/utils/dynamicImport';

const Student = () => {
    const DynamicStudent = LazyImport('SCREENS', 'Student', undefined, false, true);
    return <DynamicStudent />
}

export default Student;