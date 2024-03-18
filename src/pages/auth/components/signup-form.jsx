import React from "react";
import { useForm } from "react-hook-form";

import { BASE_AUTH_API_URL } from "../../../constants/base-api";
import axios from "axios";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`${BASE_AUTH_API_URL}/auth/signup`, {
        email: data.email,
        password: data.password,
      })
      .then(function (response) {})
      .catch(function (error) {});
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email")}
        className="p-3 rounded-xl"
        placeholder="Email Address"
      />
      <input
        {...register("password")}
        type="password"
        className="p-3 rounded-xl"
        placeholder="Password"
      />
      <button
        className="p-3 rounded-full bg-black text-white font-medium"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
