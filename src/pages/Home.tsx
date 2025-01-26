import { type SubmitHandler, useForm } from "react-hook-form";
import { BsFillCaretRightFill } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { useNavigate } from "react-router";

interface FormTypes {
  studySubject: string;
}

export function Home() {
  const { register, handleSubmit } = useForm<FormTypes>();
  const navigate = useNavigate();

  const handleFormSubmit: SubmitHandler<FormTypes> = (data) => {
    console.log(data);

    navigate("/questions/2312321", {});
  };

  return (
    <div className="h-svh flex flex-col items-center justify-center mt-[-100px] ">
      <h1 className="text-[1.75rem] font-medium mb-5">
        What do you want to study? 📚
      </h1>

      <form className="flex" onSubmit={handleSubmit(handleFormSubmit)}>
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

          <button type="button" className="absolute left-3">
            <GoGear color="#000000" />
          </button>

          <button type="submit" className="absolute right-3">
            <BsFillCaretRightFill size={20} color="#3B82F6" opacity={0.4} />
          </button>
        </div>
      </form>
    </div>
  );
}
