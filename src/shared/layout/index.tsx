import { type ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/future/image";
import { type CustomAppProps } from "@webclient/pages/_app.types";
import { Footer } from "./footer";
import styles from "./index.module.css";
import logoImage from "./logo.svg";

interface LayoutProps {
  appProps: CustomAppProps;
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const router = useRouter();
  const pathname = (router.pathname === "/[...slug]")
    ? `/${router.query?.slug?.[0]}`
    : router.pathname;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.app}>
        <main>
          <section className={styles["hero-section"]}>
            <div className={styles.inner}>
              <div className={styles.content}>
                <Image
                  src={logoImage}
                  alt="10forward logo"
                  width="498"
                  height="328"
                  priority={true}
                />
                <p>
                  2015&apos;ten bu yana bir meta-topluluk olarak topluluklar ve
                  içerik oluşturup, geliştirici ekosistemine katkıda bulunmak,
                  topluluğu motive etmek, farkındalık aşılamak ve engelleri
                  ortadan kaldırmak için çalışıyoruz.
                </p>
              </div>
            </div>
          </section>

          <section className={styles["content-section"]}>
            <div className={styles.inner}>
              <div className={styles["tab-bar"]}>
                <ul>
                  <li className={pathname === "/" ? styles["active"] : ""}>
                    <Link href="/" passHref>
                      <a aria-current="page">
                        <svg
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>Girişimler
                      </a>
                    </Link>
                  </li>
                  <li
                    className={pathname === "/code-of-conduct"
                      ? styles["active"]
                      : ""}
                  >
                    <Link href="/code-of-conduct" passHref>
                      <a>
                        <svg
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                            clipRule="evenodd"
                          />
                        </svg>Topluluk Sözleşmesi
                      </a>
                    </Link>
                  </li>
                  <li
                    className={pathname === "/about" ? styles["active"] : ""}
                  >
                    <Link href="/about" passHref>
                      <a>
                        <svg
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>Hakkında
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              {props.children}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export { Layout, Layout as default };
