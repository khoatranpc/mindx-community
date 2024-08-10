import dynamic from "next/dynamic";
import { Folder } from "@/global";
import { Obj } from "@/global/interface";
import MindXLoading from "@/components/MindXLoading";

const LazyImport = (folder: keyof typeof Folder, dir: string, props?: Obj, ssr?: boolean, absoluteLoading?: boolean) => {

    const DynamicComponent = dynamic(() => {
        switch (folder) {
            case 'APP':
                return import(`@/app/${dir}`);
            case 'COMPONENTS':
                return import(`@/components/${dir}`);
            case 'SCREENS':
                return import(`@/screens/${dir}`);
            case 'LAYTOUTS':
                return import(`@/layouts/${dir}`);
            default:
                return import(`@/screens/${dir}`);
        }
    }, {
        ssr: ssr ?? false,
        loading: () => <MindXLoading centered absolute={absoluteLoading} />
    });
    return () => <DynamicComponent {...props} />;
}

export {
    LazyImport
}