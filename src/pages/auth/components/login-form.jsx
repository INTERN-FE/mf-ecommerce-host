import React from "react";
import Cookies from "universal-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { BASE_AUTH_API_URL } from "../../../constants/base-api";
import axios from "axios";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const cookies = new Cookies();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios
      .post(`${BASE_AUTH_API_URL}/auth/signin`, {
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        if (response.status === 200) {
          cookies.set("access-token", response.data.access_token, {
            path: "/",
          });
        }
        navigate("/");
      })
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
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
