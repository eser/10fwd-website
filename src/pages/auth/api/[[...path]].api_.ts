// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { type NextRequest } from "next/server";
import { type NextApiRequest, type NextApiResponse } from "next";

import { superTokensNextWrapper } from "supertokens-node/nextjs";
import supertokens from "supertokens-node";
import { middleware } from "supertokens-node/framework/express";
import { backendConfig } from "@webclient/config/backendConfig";

supertokens.init(backendConfig());

const superTokens = async (req: any, res: any) => {
  await superTokensNextWrapper(
    async (next: any) => {
      res.setHeader(
        "Cache-Control",
        "no-cache, no-store, max-age=0, must-revalidate",
      );
      await middleware()(req, res, next);
    },
    req,
    res,
  );

  if (!res.writableEnded) {
    res.status(404).send("Not found");
  }
};

export { superTokens as default };
