import { useState } from "react";

import usePrivateRoute from "../../hooks/usePrivateRoute.hook";
import LoginForm from "./components/login-form";
import SignUpForm from "./components/signup-form";

export default function AuthPage() {
  usePrivateRoute();
  const [useTab, setUseTab] = useState(0);

  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-screen flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <span className="self-center text-2xl font-semibold whitespace-nowrap leading-none">
            .\eCommerce
          </span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center place-items-center">
            <div className="md:hidden pb-[18px]"></div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Selamat datang,
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
}
