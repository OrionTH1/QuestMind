import type { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface OptionProps {
  option: "A" | "B" | "C" | "D" | "E";
  text: string;
  register: UseFormRegisterReturn;
  status: boolean | "waiting";
}

export function Option({ option, text, register, status }: OptionProps) {
  return (
    <div className="flex flex-col gap-y-4">
      <label
        className={twMerge(
          "flex gap-4 items-center ",
          status === "waiting" && "cursor-pointer"
        )}
      >
        <input
          type="radio"
          value={option}
          disabled={status !== "waiting" && true}
          className={twMerge(
            "appearance-none h-[40px] outline-2  p-5 rounded-[5px] transition-all duration-150 ease-in",
            status === "waiting"
              ? "outline-cyan-800 checked:outline bg-[#f5f4f4] hover:bg-[#ebebeb]"
              : status === true
              ? "bg-green"
              : "bg-red"
          )}
          {...register}
        />
        <p
          className={twMerge(
            "absolute left-[13px]",
            status !== "waiting" && "text-white"
          )}
        >
          {option}&#41;
        </p>

        <p className="text-sm">{text}</p>
      </label>
      <div
        className={twMerge(
          "bg-opacity-20 p-2 rounded",
          status === "waiting"
            ? "hidden"
            : status === true
            ? "bg-green"
            : "bg-red"
        )}
      >
        <p className="text-sm">
          O Renascimento valorizava a razão, a ciência e a individualidade,
          rompendo com a visão teocêntrica predominante na Idade Média.
        </p>
      </div>
    </div>
  );
}
