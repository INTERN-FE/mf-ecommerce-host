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
      <h5>Email Address</h5>
      <input
        {...register("email")}
        className="p-3 rounded-xl bg-gray"
        placeholder="Enter your email address"
      />
      <h5>Password</h5>
      <input
        {...register("password")}
        type="password"
        className="p-3 rounded-xl bg-gray"
        placeholder="Enter your secure password"
      />
      <button
        className="my-3 p-3 rounded-full bg-primary text-white font-medium"
        type="submit"
      >
        Create My Account
      </button>
    </form>
  );
}

export default SignUpForm;
