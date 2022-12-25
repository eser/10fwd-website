import Head from "next/head";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import SuperTokens from "supertokens-auth-react";
import styles from "./[[...path]].module.css";

const SuperTokensComponentNoSSR = dynamic(
  new Promise<any>((res: any) => res(SuperTokens.getRoutingComponent)),
  { ssr: false },
);

const Auth = (): JSX.Element => {
  useEffect(() => {
    if (SuperTokens.canHandleRoute() === false) {
      SuperTokens.redirectToAuth({
        redirectBack: false,
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>SuperTokens 💫</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SuperTokensComponentNoSSR />
      </main>
    </div>
  );
};

export { Auth as default };
