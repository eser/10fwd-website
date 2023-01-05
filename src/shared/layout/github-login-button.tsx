import { type MouseEvent } from "react";
import Image from "next/image";
import {
  auth,
  AuthProviders,
  useAuthContext,
} from "@webclient/services/auth/mod";
import githubLogoImage from "./github-logo.svg";
import styles from "./github-login-button.module.css";

const GitHubLoginButton = () => {
  const userState = useAuthContext();

  const buttonOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (userState.isLoading) {
      return;
    }

    if (userState.isLoggedIn) {
      auth.signOut();
      return;
    }

    auth.signInWithProvider(AuthProviders.GitHub);
  };

  return (
    <button
      type="button"
      className={styles["login-button"]}
      onClick={buttonOnClick}
    >
      <Image
        src={githubLogoImage}
        alt="github logo"
        width="16"
        height="16"
        priority={true}
      />
      {userState.isLoggedIn
        ? userState?.user.displayName
        : "GitHub ile giriş yap"}
    </button>
  );
};

export { GitHubLoginButton };
