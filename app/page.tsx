import { LazyImport } from "@/utils/dynamicImport";

export default function Home() {
  const IntroduceCpt = LazyImport('SCREENS', 'Introduce', undefined, undefined, true);
  return <IntroduceCpt />;
}
