'use client';
import React from 'react';
import { LazyImport } from '@/utils/dynamicImport';
import './styles.scss';

const AdminLectures = () => {
    const LecturesCpt = LazyImport('SCREENS', 'Admin/Lectures', undefined, undefined, true);
    return <LecturesCpt />
}

export default AdminLectures;