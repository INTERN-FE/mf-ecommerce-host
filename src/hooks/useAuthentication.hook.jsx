import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const useAuthentication = () => {
  const cookies = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchCookies() {
    const accessToken = await cookies.get("access-token");
    if (accessToken) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchCookies();
  }, []);

  if (!isLoading) {
    return isLoggedIn;
  }
};

export default useAuthentication;
