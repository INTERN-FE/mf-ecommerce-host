import React from "react";
import useAuthentication from "../hooks/useAuthentication.hook";

function MainPage() {
  const test = useAuthentication();

  console.log(test);
  return <div>Hello</div>;
}

export default MainPage;
