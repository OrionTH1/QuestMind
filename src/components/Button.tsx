import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  text: string;
  variant: "outline" | "fill";
  isHidden?: boolean;
}

export function Button({
  width,
  text,
  variant,
  isHidden,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        `w-[${width ? width : "12rem"}] `,
        variant === "outline" ? "border border-cyan-800" : "bg-cyan-800",
        isHidden ? "hidden" : "flex",
        "p-3 items-center justify-center rounded-[10px] hover:bg-cyan-900 transition"
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
