const port = process.env.APP_PORT || 3000;

const apiBasePath = "/auth/api/";

const websiteDomain = process.env.APP_URL || process.env.NEXT_PUBLIC_APP_URL ||
  `http://localhost:${port}`;

const appInfo = {
  appName: "SuperTokens Demo App",
  websiteDomain,
  apiDomain: websiteDomain,
  apiBasePath,
};

export { appInfo, websiteDomain };
