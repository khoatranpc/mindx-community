import { LazyImport } from '@/utils/dynamicImport';

interface Props {
    children: React.ReactNode
}
const AdminLayout = (props: Props) => {
    const AdminLayoutCpt = LazyImport('LAYTOUTS', 'AdminLayout', props);
    return <AdminLayoutCpt />
};
export default AdminLayout;