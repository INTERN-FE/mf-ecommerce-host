import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const useAuthentication = () => {
  const cookies = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function fetchCookies() {
    const accessToken = await cookies.get("access-token");
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }

  useEffect(() => {
    fetchCookies();
  }, []);

  return isLoggedIn;
};

export default useAuthentication;
