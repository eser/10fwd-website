import { type AppProps } from "next/app";
import { type NextPage } from "next";

// deno-lint-ignore ban-types
type CustomPage<P = {}, IP = P> = NextPage<P, IP>;

type CustomAppProps = AppProps & {
  // deno-lint-ignore no-explicit-any
  Component: CustomPage<any>;
};

export { type CustomAppProps, type CustomPage };
