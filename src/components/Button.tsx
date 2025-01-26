import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  text: string;
  variant: "outline" | "fill";
  isHidden?: boolean;
}

export function Button({
  width,
  height,
  text,
  variant,
  isHidden,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        `w-[${width ? width : "12rem"}] h-[${
          height ? height : "3.5rem"
        }] p-4 items-center justify-center rounded-[10px]`,
        variant === "outline" ? "border border-cyan-800" : "bg-cyan-800",
        isHidden ? "hidden" : "flex"
      )}
    >
      <span
        className={twMerge(variant === "outline" ? "text-black" : "text-white")}
      >
        {text}
      </span>
    </button>
  );
}
