import { Option } from "../components/Option";
import { type SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/Button";
import { useQuestionsStore } from "../store";

interface InputTypes {
  option: "A" | "B" | "C" | "D" | "E";
}

export function Questions() {
  const {
    register,
    handleSubmit,
    formState,
    reset: resetForm,
  } = useForm<InputTypes>();
  const isFormSubmitted = formState.isSubmitted;
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const { questions, actualCount, increaseCorrectCount, increaseActualCount } =
    useQuestionsStore();
  console.log(actualCount);
  const actualQuestion = questions[actualCount - 1];
  const navigate = useNavigate();

  const handleNextQuestionClick = () => {
    if (actualCount === questions.length) {
      navigate("/questions/finished");
      return;
    }

    setIsAnswerCorrect(false);
    increaseActualCount();
    resetForm();
  };

  const handleFormSubmit: SubmitHandler<InputTypes> = (data) => {
    if (!data.option) return;

    if (actualQuestion.options[data.option].isCorrect) {
      setIsAnswerCorrect(true);
      increaseCorrectCount();
      return;
    }

    setIsAnswerCorrect(false);
  };

  return (
    <div className="min-h-svh flex flex-col justify-center items-center py-16">
      <div
        className={twMerge(
          "border rounded-[20px] w-[900px] py-11 px-16",
          !isFormSubmitted
            ? "border-cyan-400"
            : isAnswerCorrect
            ? "border-green"
            : "border-red"
        )}
      >
        <p className="mb-4 text-sm ">
          Questão {actualCount}/{questions.length}
        </p>
        <h1 className="text-[20px] font-medium mb-9">
          {actualQuestion.question}
        </h1>

        <div>
          <form className="relative" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex flex-col gap-y-6 mb-16">
              <Option
                option={"A"}
                text={actualQuestion.options.A.text}
                explicationText={actualQuestion.options.A.explication}
                status={
                  isFormSubmitted
                    ? actualQuestion.options.A.isCorrect
                    : "waiting"
                }
                register={register("option")}
              />
              <Option
                option={"B"}
                text={actualQuestion.options.B.text}
                explicationText={actualQuestion.options.B.explication}
                register={register("option")}
                status={
                  isFormSubmitted
                    ? actualQuestion.options.B.isCorrect
                    : "waiting"
                }
              />
              <Option
                option={"C"}
                text={actualQuestion.options.C.text}
                explicationText={actualQuestion.options.C.explication}
                register={register("option")}
                status={
                  isFormSubmitted
                    ? actualQuestion.options.C.isCorrect
                    : "waiting"
                }
              />
              <Option
                option={"D"}
                text={actualQuestion.options.D.text}
                explicationText={actualQuestion.options.D.explication}
                register={register("option")}
                status={
                  isFormSubmitted
                    ? actualQuestion.options.D.isCorrect
                    : "waiting"
                }
              />

              <Option
                option={"E"}
                text={actualQuestion.options.E.text}
                explicationText={actualQuestion.options.E.explication}
                register={register("option")}
                status={
                  isFormSubmitted
                    ? actualQuestion.options.E.isCorrect
                    : "waiting"
                }
              />
            </div>

            <div className="flex flex-row-reverse gap-x-6">
              <Button
                width="10rem"
                text="Confirmar"
                variant="fill"
                type="submit"
                isHidden={isFormSubmitted}
              />

              <Button
                width="10rem"
                text={
                  actualCount === questions.length ? "Finalizar" : "Próximo"
                }
                variant="fill"
                type="button"
                onClick={handleNextQuestionClick}
                isHidden={!isFormSubmitted}
              />

              <div
                className={twMerge(
                  "absolute left-0 w-[10rem] h-[3rem] items-center justify-center rounded-[10px] border",
                  isFormSubmitted
                    ? isAnswerCorrect
                      ? "flex border-green"
                      : "flex border-red"
                    : "hidden"
                )}
              >
                <span>
                  {isAnswerCorrect === true
                    ? "Você acertou 🎉"
                    : "Você errou 😔"}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
