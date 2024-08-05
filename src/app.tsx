import { GradientTypography } from "./components/GradientTypography";
import { FxemojiRocket } from "./components/icons/rocket";
import { Test } from "./components/Test";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { UserInfo } from "./components/UserInfo";

export function App() {
  return (
    <>
      <div class="absolute z-[-1] h-full w-full bg-[radial-gradient(#c1c4c9_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#454545_1px,transparent_1px)]"></div>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-light dark:bg-dark bg-[radial-gradient(90%_50%_at_50%_5%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div class="absolute top-0 right-5">
        <ThemeSwitch />
      </div>
      <header class="pt-[12vh] px-6 flex items-center justify-center flex-col">
        <GradientTypography size="7xl">
          <span class="flex tracking-wider">
            NETEST
            <FxemojiRocket class="ml-5 drop-shadow-orange-lg" />
          </span>
        </GradientTypography>
        <h2 class="font-semibold text-lg md:text-xl text-slate-700 dark:text-slate-200 pt-5 text-center">
          Test the <strong>connection's speed</strong> of your{" "}
          <strong>network</strong>.
        </h2>
      </header>
      <main class="mx-auto mt-[10vh] flex flex-col items-center justify-start gap-4">
        <UserInfo />
        <Test />
      </main>
    </>
  );
}
