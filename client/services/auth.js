import Cookies from "js-cookie";

export const saveToken = (token) => {
  Cookies.set("client_token", token);
};

export const getToken = () => {
  return Cookies.get("client_token");
};

export const removeToken = () => {
  Cookies.remove("client_token");
};

import { useSession } from "next-auth/react";

export const isSignedIn = () => {
  const token = getToken();
  const { data: session } = useSession();

  if (token || session) {
    return true;
  } else {
    return false;
  }
};
