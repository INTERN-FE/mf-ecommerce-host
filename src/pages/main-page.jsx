import React from "react";
import useAuthentication from "../hooks/use-authentication";

function MainPage() {
  const test = useAuthentication();

  console.log(test);
  return <div>Hello</div>;
}

export default MainPage;
