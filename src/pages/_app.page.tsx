import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { type CustomAppProps } from "./_app.types";
import { Layout } from "@webclient/shared/layout/index";
import { defaults } from "@webclient/shared/defaults";
import SuperTokensReact, { SuperTokensWrapper } from "supertokens-auth-react";
import * as SuperTokensConfig from "@webclient/config/frontendConfig";
import Session from "supertokens-auth-react/recipe/session";
import "@webclient/shared/globals.css";

if (typeof window !== "undefined") {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig());
}

const CustomApp = (appProps: CustomAppProps) => {
  useEffect(() => {
    const doRefresh = async () => {
      if (appProps.pageProps.fromSupertokens === "needs-refresh") {
        if (await Session.attemptRefreshingSession()) {
          location.reload();
          return;
        }

        // user has been logged out
        SuperTokensReact.redirectToAuth();
      }
    };

    doRefresh();
  }, [appProps.pageProps.fromSupertokens]);

  if (appProps.pageProps.fromSupertokens === "needs-refresh") {
    return null;
  }

  return (
    <SuperTokensWrapper>
      <Layout appProps={appProps}>
        <DefaultSeo
          titleTemplate={`${defaults.siteName} - %s`}
          defaultTitle={defaults.siteName}
          openGraph={{
            type: "website",
            locale: defaults.locale,
            url: defaults.webSiteUrl,
            site_name: defaults.siteName,
          }}
          twitter={{
            // handle: defaults.creatorTwitterHandle,
            site: defaults.twitterHandle,
            cardType: "summary_large_image",
          }}
        />
        <appProps.Component {...appProps.pageProps} />
      </Layout>
    </SuperTokensWrapper>
  );
};

export { CustomApp, CustomApp as default };
