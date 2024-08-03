import { GradientTypography } from "./components/GradientTypography";
import { Test } from "./components/Test";
import { ThemeSwitch } from "./components/ThemeSwitch";

export function App() {
  return (
    <>
      <div class="absolute z-[-1] h-full w-full bg-[radial-gradient(#cbced4_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#454545_1px,transparent_1px)]"></div>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-light dark:bg-dark bg-[radial-gradient(90%_50%_at_50%_5%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div class="absolute top-0 right-5">
        {" "}
        <ThemeSwitch />
      </div>
      <header class="pt-[12vh] flex items-center justify-center flex-col">
        <GradientTypography size="7xl">
          <span class="flex">
            NETEST
            <svg class="h-[4.5rem]" viewBox="0 0 24 24">
              <path
                fill="#43b6b4"
                d="M6.125 12.15q.65-1.65 1.563-3.175T9.75 6.1l-1.3-.275q-.5-.1-.975.05t-.825.5L3.5 9.525q-.375.375-.288.9t.588.725zm14.7-9.75q-2.65-.125-5.037 1.025T11.525 6.45q-1.2 1.2-2.113 2.6T7.826 12q-.125.325-.125.663t.25.587l3.125 3.125q.25.25.588.25t.662-.125q1.55-.675 2.95-1.588t2.6-2.112q1.875-1.875 3.025-4.262T21.925 3.5q0-.2-.1-.4t-.25-.35t-.35-.25t-.4-.1m-6.35 7.45q-.575-.575-.575-1.412t.575-1.413t1.413-.575t1.412.575t.575 1.413T17.3 9.85t-1.412.575t-1.413-.575m-2.3 8.35l1 2.325q.2.5.725.6t.9-.275l3.15-3.15q.35-.35.5-.837t.05-.988l-.25-1.3q-1.375 1.15-2.887 2.063T12.175 18.2M4.05 16.05q.875-.875 2.125-.888t2.125.863t.875 2.125t-.875 2.125q-1.2 1.2-2.838 1.425t-3.287.45q.225-1.65.463-3.287T4.05 16.05"
              />
            </svg>
          </span>
        </GradientTypography>
        <h2 class="font-semibold text-xl text-slate-700 dark:text-slate-200 pt-2 text-center">
          Test the <strong>connection's speed</strong> of your{" "}
          <strong>network</strong>.
        </h2>
      </header>
      <Test />
    </>
  );
}
