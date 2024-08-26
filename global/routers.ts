import { Page } from "./enum";

const routerByPage: Record<Page, string> = {
    // Admin
    AdminDashboard: '/mindx/admin/dashboard',
    AdminEvent: '/mindx/admin/events',
    AdminListStudent: '/mindx/admin/students',
    AdminWaiting: '/mindx/admin/students?waiting=true',
    AdminLecture: '/mindx/admin/lectures',
    AdminCourses: '/mindx/admin/courses'
};

export {
    routerByPage
}