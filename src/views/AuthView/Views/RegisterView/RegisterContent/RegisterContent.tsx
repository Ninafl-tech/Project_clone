import { useForm, SubmitHandler } from "react-hook-form";
import { StRegisterContent } from "./StRegisterContent.styled";
import { StCard } from "../../../../../components/StCard/StCard.styled";

export function RegisterContent() {
  type RegisterFormValues = {
    email: string;
    password: string;
    repeat_password: string;
    gender: "female" | "male";
    birth_year: string;
    mobile_number: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormValues>();
  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    if (data.password !== data.repeat_password) {
      setError("repeat_password", { message: "passwords must match" });
    }
  };

  return (
    <StCard>
      <StRegisterContent onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true })}
          placeholder="ელფოსტა"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="პაროლი"
        />
        {errors.password && <span>This field is required </span>}
        <input
          type="password"
          {...register("repeat_password", { required: true })}
          placeholder="გაიმეორე პაროლი"
        />
        {errors.repeat_password && (
          <span>{errors.repeat_password.message} </span>
        )}
        <div>
          {" "}
          <input
            placeholder="სქესი"
            id="male"
            {...register("gender", { required: true })}
            type="radio"
            value="მამრობითი"
          />
          <label htmlFor="male">მამრობითი</label> <br />
          <input
            id="female"
            {...register("gender", { required: true })}
            type="radio"
            value="მდედრობითი"
          />
          <label htmlFor="female">მდედრობითი</label> <br />
        </div>
        <select {...register("birth_year", { required: true })}>
          <option value="">აირჩიე დაბადების წელი</option>
          <option value={2000}>2000</option>
          <option value={2001}>2001</option>
          <option value={2002}>2002</option>
          <option value={2003}>2003 </option>
        </select>
        <input
          {...register("mobile_number", { required: true })}
          placeholder="ტელეფონის ნომერი"
        />
        <input type="submit" />
      </StRegisterContent>
    </StCard>
  );
}
