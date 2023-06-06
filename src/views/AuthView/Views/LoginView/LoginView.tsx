import { LoginContent } from "./LoginContent/LoginContent";
import { useForm, SubmitHandler } from "react-hook-form";

export default function LoginView() {
  type Inputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} placeholder="Email" />
      <input
        {...register("password", { required: true })}
        placeholder="Password"
      />
      {errors.password && <span>This field is required </span>}
      <input type="submit" />
      <div>
        <LoginContent />
      </div>
    </form>
  );
}
