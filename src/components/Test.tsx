import { useState } from "preact/hooks";
import { GradientButton } from "./GradientButton";
export function Test() {
  const initialState = {
    status: 0,
    downloadSpeed: 0,
    loadSpeed: 0,
    latency: 0,
  };

  const [test, setTest] = useState(initialState);
  const [showTest, setShow] = useState(false);

  const downloadSpeedTest = async () => {
    const testTime = 10;
    let uniqueUrl =
      "https://getsamplefiles.com/download/mkv/sample-1.mkv?t=" +
      new Date().getTime();
    const response = await fetch(uniqueUrl);
    const reader = response.body?.getReader();
    if (!reader) {
      console.error("Failed to get reader from response body");
      return;
    }
    let receivedLength: number = 0;
    let startTime: Date = new Date();
    let currentTime: Date, timeElapsed: number;
    while (true) {
      const { done, value } = await reader?.read();
      receivedLength += value?.length ?? 0;
      currentTime = new Date();
      timeElapsed = (currentTime.getTime() - startTime.getTime()) / 1000;
      let speed = ((8 / 1000000) * (receivedLength / timeElapsed)).toFixed(1);
      setTest((state) => ({ ...state, downloadSpeed: Number(speed) }));
      if (done || timeElapsed > testTime) {
        break;
      }
    }
    currentTime = new Date();
    timeElapsed = (currentTime.getTime() - startTime.getTime()) / 1000;
    let averageSpeed = ((8 / 1000000) * (receivedLength / timeElapsed)).toFixed(
      1
    );
    setTest((state) => ({
      ...state,
      status: 2,
      downloadSpeed: Number(averageSpeed),
    }));
  };

  const beginTest = () => {
    setTest(initialState);
    setTest((state) => ({ ...state, status: 1 }));
    setTimeout(() => {
      setShow(true);
      downloadSpeedTest();
    }, 340);
  };
  return (
    <>
      <div
        class={`${test.status && "animate-blurred-fade-out"} ${
          showTest && "hidden"
        }`}
      >
        <GradientButton onClick={beginTest}>GO</GradientButton>
      </div>

      {showTest && (
        <div class="animate-blurred-fade-in w-[90vw] max-w-[900px] flex text-slate-700 dark:text-slate-200">
          <h4 class="w-[70%] md:w-[70%] text-end text-[24vw] md:text-[24vh] leading-[28vw] md:leading-[24vh] font-bold ">
            {test.downloadSpeed}
          </h4>
          <div class="w-auto flex flex-col items-stretch px-2 pt-6 md:px-5 text-[6vw] md:text-[6vh] font-extrabold">
            <span class="">Mbps</span>
            {test.status === 1 && (
              <div class="loader w-[40px] md:w-[60px] "></div>
            )}
            {test.status === 2 && (
              <GradientButton
                class="w-[50px] h-[50px] md:w-[80px] md:h-[80px]"
                size="2xl"
                onClick={beginTest}
              >
                <svg
                  class="w-8 h-8 md:w-12 md:h-12 transition-colors duration-150 fill-[#43b5b4] group-hover:fill-[#40a0d0]"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20" />
                </svg>
              </GradientButton>
            )}
          </div>
        </div>
      )}
    </>
  );
}
