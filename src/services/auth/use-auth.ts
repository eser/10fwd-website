import { useEffect, useState } from "react";
import { auth } from "./index";

interface UserState {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: any | null;
}

const useAuth = () => {
  const [userState, setUserState] = useState<UserState>({
    isLoading: true,
    isLoggedIn: false,
    user: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserState({ isLoading: false, isLoggedIn: user !== null, user: user });
    });
  }, []);

  return userState;
};

export { useAuth, type UserState };
