import { JSX } from "preact/jsx-runtime";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  size?: keyof typeof sizes;
  hover?: string;
};
const sizes = {
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};
export function GradientTypography({ children, size = "6xl", hover }: Props) {
  return (
    <h1
      class={`transition-colors duration-300 grandient-bg text-color-bg font-extrabold ${sizes[size]} text-center ${hover}`}
    >
      {children}
    </h1>
  );
}
