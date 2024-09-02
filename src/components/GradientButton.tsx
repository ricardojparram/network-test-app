import { type JSX } from "preact/jsx-runtime";
import { GradientTypography } from "./GradientTypography.jsx";
import { type sizes } from "../types/sizes";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  size?: sizes;
  class?: string;
  onClick?: any;
};
export function GradientButton({
  children,
  class: className,
  onClick,
  size = "5xl",
}: Props) {
  return (
    <button
      class={`relative inline-flex items-center justify-center group 
              overflow-hidden rounded-full gradient-bg transition-all duration-300 hover:bg-pos-80 p-1 focus:ring-4 focus:outline-none focus:ring-white shadow-lg hover:p-1.5 hover:shadow-xl hover:shadow-blue-300/50 hover:scale-105 shadow-blue-400/50 
              ${className ? className : "w-[200px] h-[200px] "}
            `}
      onClick={onClick}
    >
      <span
        class={`relative rounded-full w-full h-full flex items-center justify-center flex-wrap bg-light dark:bg-dark`}
      >
        <GradientTypography size={size} hover="group-hover:bg-pos-80">
          {children}
        </GradientTypography>
      </span>
    </button>
  );
}
