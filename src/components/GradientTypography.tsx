import { JSX } from "preact/jsx-runtime";
import { type sizes } from "../types/sizes";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  size?: sizes;
  hover?: string;
};
const sizes = {
  xl: "text-xl",
  "2xl": "text-xl md:text-2xl",
  "3xl": "text-2xl md:text-3xl",
  "4xl": "text-3xl md:text-4xl",
  "5xl": "text-4xl md:text-5xl",
  "6xl": "text-5xl md:text-6xl",
  "7xl": "text-6xl md:text-7xl",
  "8xl": "text-7xl md:text-8xl",
  "9xl": "text-8xl md:text-9xl",
};
export function GradientTypography({ children, size = "6xl", hover }: Props) {
  return (
    <h1
      class={`transition-colors duration-300 gradient-bg text-color-bg font-extrabold ${sizes[size]} text-center ${hover}`}
    >
      {children}
    </h1>
  );
}
