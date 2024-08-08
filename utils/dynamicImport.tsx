import dynamic from "next/dynamic";
import { Folder } from "@/global";
import { Obj } from "@/global/interface";
import MindXLoading from "@/components/MindXLoading";

const LazyImport = (folder: keyof typeof Folder, dir: string, props?: Obj, ssr?: boolean) => {

    const DynamicComponent = dynamic(() => {
        switch (folder) {
            case 'APP':
                return import(`@/app/${dir}`);
            case 'COMPONENTS':
                return import(`@/components/${dir}`);
            case 'SCREENS':
                return import(`@/screens/${dir}`);
            default:
                return import(`@/screens/${dir}`);
        }
    }, {
        ssr: ssr ?? false,
        loading: () => <MindXLoading centered />
    });
    return () => <DynamicComponent {...props} />;
}

export {
    LazyImport
}