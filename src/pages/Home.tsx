import { type SubmitHandler, useForm } from "react-hook-form";
import { BsFillCaretRightFill } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { createQuestion } from "../api";
import { useSystemStore, useQuestionsStore } from "../store";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Loading } from "../components/Loading";
import { Config } from "../components/Config";

interface QuestionFormTypes {
  studySubject: string;
}

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isConfigOpened, setIsConfigOpened] = useState(false);
  const { register, handleSubmit } = useForm<QuestionFormTypes>();
  useForm<QuestionFormTypes>();
  const { ammount, difficulty, setQuestions } = useQuestionsStore();
  const { language, setStudySubject } = useSystemStore();
  const navigate = useNavigate();

  const handleConfigButtonClick = (event: unknown) => {
    setIsConfigOpened((value) => !value);
    console.log(event);
  };

  const handleSubjectFormSubmit: SubmitHandler<QuestionFormTypes> = async (
    data
  ) => {
    setIsConfigOpened(false);
    setIsLoading(true);

    const questions = await createQuestion(
      data.studySubject,
      difficulty,
      ammount,
      language
    );
    console.log(questions);
    setQuestions(questions);
    setStudySubject(data.studySubject);

    setIsLoading(false);
    navigate("/questions");
  };

  return (
    <div className="h-svh flex flex-col items-center justify-center mt-[-100px] ">
      {isConfigOpened && <Config setIsConfigOpen={setIsConfigOpened} />}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="">
          <h1 className="text-[1.75rem] text-center font-medium mb-5">
            What do you want to study? 📚
          </h1>

          <form
            className="flex"
            onSubmit={handleSubmit(handleSubjectFormSubmit)}
          >
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Write the subject that do you want to exercice"
                {...register("studySubject")}
                className="
            w-[500px] border border-cyan-400 border-opacity-80 rounded-[10px] p-3
            px-9 placeholder:text-base placeholder:text-opacity-60
            "
              />

              <button
                type="button"
                className="absolute left-3"
                onClick={handleConfigButtonClick}
              >
                <GoGear color="#000000" />
              </button>

              <button type="submit" className="absolute right-3">
                <BsFillCaretRightFill size={20} color="#3B82F6" opacity={0.4} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
