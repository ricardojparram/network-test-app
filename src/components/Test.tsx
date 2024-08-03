import { useState } from "preact/hooks";
import { GradientTypography } from "./GradientTypography";

export function Test() {
  const [status, setStatus] = useState(false);
  return (
    <>
      <main class="flex justify-center my-auto mt-[16vh]">
        <div>
          <h4
            class={`${
              status ? "text-slate-800" : "text-slate-300"
            } text-9xl hidden`}
          >
            0<span class="text-5xl">Mbps</span>
          </h4>
        </div>
        <div>
          <button
            class="w-[200px] h-[200px] relative inline-flex items-center justify-center p-1 mb-2 me-2
                   overflow-hidden text-sm font-medium rounded-full group transition-all duration-300 bg-size-200
                   bg-pos-0 hover:bg-pos-80 bg-gradient-to-br from-green-400 to-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200
                   shadow-lg hover:shadow-xl hover:shadow-blue-300/50 hover:scale-105 shadow-blue-400/50"
          >
            <span class="relative p-2 bg-light dark:bg-dark rounded-full w-full h-full flex items-center justify-center flex-wrap">
              <GradientTypography size="5xl" hover="group-hover:bg-pos-80">
                GO
              </GradientTypography>
            </span>
          </button>
        </div>
      </main>
    </>
  );
}
