import { Option } from "../components/Option";
import { type SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/Button";

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
  const questionsCount = useRef(1);
  const navigate = useNavigate();

  const handleNextQuestionClick = () => {
    if (questionsCount.current === 5) navigate("/questions/123/finished");

    setIsAnswerCorrect(false);
    questionsCount.current++;
    resetForm();
  };

  const handleFormSubmit: SubmitHandler<InputTypes> = (data) => {
    if (!data.option) return;

    if (result.option[data.option].isCorrect) {
      setIsAnswerCorrect(true);
      return;
    }

    setIsAnswerCorrect(false);
  };

  return (
    <div className="min-h-svh flex flex-col justify-center items-center py-16">
      <div
        className={twMerge(
          "border rounded-[20px] max-w-[800px] py-11 px-16",
          !isFormSubmitted
            ? "border-cyan-400"
            : isAnswerCorrect
            ? "border-green"
            : "border-red"
        )}
      >
        <p className="mb-4 text-sm ">Questão {questionsCount.current}/5</p>
        <h1 className="text-[20px] font-medium mb-9">{result.question}</h1>

        <div>
          <form className="relative" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="flex flex-col gap-y-6 mb-16">
              <Option
                option={"A"}
                text={result.option.A.text}
                status={isFormSubmitted ? result.option.A.isCorrect : "waiting"}
                register={register("option")}
              />
              <Option
                option={"B"}
                text={result.option.B.text}
                register={register("option")}
                status={isFormSubmitted ? result.option.B.isCorrect : "waiting"}
              />
              <Option
                option={"C"}
                text={result.option.C.text}
                register={register("option")}
                status={isFormSubmitted ? result.option.C.isCorrect : "waiting"}
              />
              <Option
                option={"D"}
                text={result.option.D.text}
                register={register("option")}
                status={isFormSubmitted ? result.option.D.isCorrect : "waiting"}
              />

              <Option
                option={"E"}
                text={result.option.E.text}
                register={register("option")}
                status={isFormSubmitted ? result.option.E.isCorrect : "waiting"}
              />
            </div>

            <div className="flex flex-row-reverse gap-x-6">
              <Button
                width="10rem"
                height="3rem"
                text="Confirmar"
                variant="fill"
                type="submit"
                isHidden={isFormSubmitted}
              />

              <Button
                width="10rem"
                height="3rem"
                text="Pular questão"
                variant="outline"
                type="button"
                isHidden={isFormSubmitted}
              />

              <Button
                width="10rem"
                height="3rem"
                text={questionsCount.current === 5 ? "Finalizar" : "Próximo"}
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
