import useAuthentication from "./useAuthentication.hook";
import { useNavigate } from "react-router-dom";

function usePrivateRoute() {
  const isAuth = useAuthentication();
  const navigate = useNavigate();

  if (!isAuth) {
    navigate("/");
  }
}

export default usePrivateRoute;
