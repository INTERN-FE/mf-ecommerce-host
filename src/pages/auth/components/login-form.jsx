/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Monday, March 18th 2024, 3:51:34 pm
 * Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
 *
 */

import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { BASE_AUTH_API_URL } from "../../../constants/base-api";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
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
      <h5 className="font-medium">Email Address</h5>
      <input
        {...register("email")}
        className="p-3 rounded-xl bg-gray-50 border-none"
        placeholder="Enter your Email Address"
      />
      <h5 className="font-medium">Password</h5>
      <input
        {...register("password")}
        type="password"
        className="p-3 rounded-xl bg-gray-50 border-none"
        placeholder="Enter your Password"
      />
      <button
        className="my-3 p-3 rounded-full bg-primary text-white font-medium"
        type="submit"
      >
        Sign In to My Account
      </button>
    </form>
  );
};

export default LoginForm;
