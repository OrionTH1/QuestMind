import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "./Button";
import { IoMdClose } from "react-icons/io";
import { Languages, QuestionsDifficulty } from "../utils/types";
import { useQuestionsStore } from "../store/questionsStore";
import { useSystemStore } from "../store/systemStore";

interface ConfigFormTypes {
  questionsSize: number;
  questionsDifficulty: QuestionsDifficulty;
  questionsLanguage: Languages;
}

export function Config({
  setIsConfigOpen,
}: {
  setIsConfigOpen: (state: boolean) => void;
}) {
  const { register, handleSubmit } = useForm<ConfigFormTypes>();
  const { difficulty, ammount, setDifficulty, setQuestionsAmmount } =
    useQuestionsStore();
  const { language, setLanguage } = useSystemStore();

  const handleConfigFormSubmit: SubmitHandler<ConfigFormTypes> = (data) => {
    setIsConfigOpen(false);
    setDifficulty(data.questionsDifficulty);
    setQuestionsAmmount(data.questionsSize);
    setLanguage(data.questionsLanguage);
  };
  return (
    <form
      className="flex flex-col absolute z-10 bg-[#f7f7f7] border shadow rounded-lg w-[400px] h-[500px] p-3"
      onSubmit={handleSubmit(handleConfigFormSubmit)}
    >
      <div className="flex items-center">
        <button
          type="button"
          className="absolute"
          onClick={() => setIsConfigOpen(false)}
        >
          <IoMdClose />
        </button>
        <h1 className="w-full text-lg font-bold text-center">Settings</h1>
      </div>
      <hr className="border bg-[#e6e6e6] -mx-3 my-3" />

      <div className="flex flex-col flex-grow fill gap-y-3">
        <div className="flex justify-between">
          <h2 className="text-sm font-medium">How many questions</h2>
          <input
            type="number"
            defaultValue={ammount}
            min={1}
            max={8}
            {...register("questionsSize")}
            className="w-[5.5rem] h-[2.2rem] text-sm rounded bg-[#e6e6e6] p-3"
          />
        </div>

        <div className="flex justify-between">
          <h2 className="text-sm font-medium">Difficulty</h2>
          <select
            className="w-[5.5rem] h-[2.2rem] text-sm rounded bg-[#e6e6e6]  px-3"
            defaultValue={difficulty}
            {...register("questionsDifficulty")}
          >
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="flex justify-between">
          <h2 className="text-sm font-medium">Language</h2>
          <select
            className="w-[5.5rem] h-[2.2rem] text-sm rounded bg-[#e6e6e6]  px-3"
            defaultValue={language}
            {...register("questionsLanguage")}
          >
            <option value="english">English</option>
            <option value="portuguse">Português</option>
          </select>
        </div>
      </div>

      <div className="w-full flex flex-row-reverse">
        <Button width="10rem" type="submit" variant="fill" text="Save" />
      </div>
    </form>
  );
}
