// import { type NextRequest } from "next/server";
import { type NextApiRequest, type NextApiResponse } from "next";

import { superTokensNextWrapper } from "supertokens-node/nextjs";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import supertokens from "supertokens-node";
import { backendConfig } from "@webclient/config/backendConfig";

supertokens.init(backendConfig());

const user = async (req: any, res: any) => {
  await superTokensNextWrapper(
    (next: any) => {
      return verifySession()(req, res, next);
    },
    req,
    res,
  );

  return res.json({
    note:
      "Fetch any data from your application for authenticated user after using verifySession middleware",
    userId: req.session.getUserId(),
    sessionHandle: req.session.getHandle(),
    accessTokenPayload: req.session.getAccessTokenPayload(),
  });
};

export { user as default };
