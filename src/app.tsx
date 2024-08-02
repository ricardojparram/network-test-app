import { GradientTypography } from "./components/GradientTypography";
import { Test } from "./components/Test";

export function App() {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_10%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <header class="pt-16 flex items-center justify-center flex-col">
        <GradientTypography size="7xl">NETEST</GradientTypography>
        <h2 class="font-semibold text-xl text-slate-700 pt-2 text-center">
          Test the <strong>connection's speed</strong> of your{" "}
          <strong>network</strong>.
        </h2>
      </header>
      <Test />
    </>
  );
}
