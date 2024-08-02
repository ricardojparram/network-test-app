import { useState } from "preact/hooks";
import { GradientTypography } from "./GradientTypography";

export function Test() {
  const [status, setStatus] = useState(false);
  return (
    <>
      <main class="flex justify-center m-auto">
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
          <button class="w-[200px] h-[200px] relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 shadow-lg shadow-blue-300/50">
            <span class="pulse-fade-in relative p-2 bg-white rounded-full w-full h-full flex items-center justify-center flex-wrap">
              <GradientTypography
                size="5xl"
                hover="group-hover:bg-gradient-to-bl"
              >
                GO
              </GradientTypography>
            </span>
          </button>
        </div>
      </main>
    </>
  );
}
