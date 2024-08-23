import { LazyImport } from "@/utils/dynamicImport";

const Mail = LazyImport('SCREENS', 'Admin/Mails', undefined, undefined, true);
export default Mail;