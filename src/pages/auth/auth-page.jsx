/*
 * Copyright Intern MSIB6 @ PT Len Industri (Persero)
 *
 * THIS SOFTWARE SOURCE CODE AND ANY EXECUTABLE DERIVED THEREOF ARE PROPRIETARY
 * TO PT LEN INDUSTRI (PERSERO), AS APPLICABLE, AND SHALL NOT BE USED IN ANY WAY
 * OTHER THAN BEFOREHAND AGREED ON BY PT LEN INDUSTRI (PERSERO), NOR BE REPRODUCED
 * OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR WRITTEN AUTHORIZATION BY
 * PT LEN INDUSTRI (PERSERO), AS APPLICABLE.
 *
 * Created Date: Tuesday, March 19th 2024, 11:57:22 am
 * Author: Jody Yuantoro | jodyyuan@xyzuan.my.id <https://github.com/xyzuan>
 *
 */

import { useState } from "react";

import LoginForm from "./components/login-form";
import SignUpForm from "./components/signup-form";
import AuthIllustration from "../../static/images/login_illustration.png";

const AuthPage = () => {
  // TO-DO
  // usePrivateRoute();
  const [useTab, setUseTab] = useState(0);

  return (
    <div className="container relative max-w-screen-xl flex-col items-center justify-center grid lg:grid-cols-2 lg:px-0">
      <div className="relative hidden justify-center items-center flex-col bg-muted p-10 lg:flex">
        <img alt="Auth" src={AuthIllustration} />
      </div>
      <div className="lg:p-8 mx-8 md:mx-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2">
            <div className="md:hidden pb-[18px]"></div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Belanja kebutuhan utama,
              <br />
              menjadi lebih mudah
            </h1>
            <p className="text-sm text-muted-foreground">
              Silahkan {useTab === 0 ? "login" : "daftar"} menggunakan email dan
              password anda
            </p>
          </div>
          {useTab === 0 ? <LoginForm /> : <SignUpForm />}
          {useTab === 0 ? (
            <p className="px-8 text-center text-sm text-muted-foreground">
              Belum punya akun?{" "}
              <span
                onClick={() => setUseTab(1)}
                className="underline underline-offset-4 hover:text-primary"
              >
                Daftar
              </span>
            </p>
          ) : (
            <p className="px-8 text-center text-sm text-muted-foreground">
              Sudah punya akun?{" "}
              <span
                onClick={() => setUseTab(0)}
                className="underline underline-offset-4 hover:text-primary"
              >
                Masuk
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
