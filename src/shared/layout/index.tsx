import { type ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { type CustomAppProps } from "@webclient/pages/_app.types";
import { auth } from "@webclient/services/auth/index";
import { useAuth } from "@webclient/services/auth/use-auth";
import { Footer } from "./footer";
import styles from "./index.module.css";
import logoImage from "./logo.svg";
import githubLogoImage from "./github-logo.svg";

interface LayoutProps {
  appProps: CustomAppProps;
  children: ReactNode;
}

const buttonOnClick = (e) => {
  e.preventDefault();

  if (auth.getUser() === null) {
    auth.signInWithGitHub();
    return;
  }

  auth.signOut();
};

const Layout = (props: LayoutProps) => {
  const { isLoading, isLoggedIn, user } = useAuth();

  const router = useRouter();
  const pathname = (router.pathname === "/[...slug]")
    ? `/${router.query?.slug?.[0]}`
    : router.pathname;

  const isActiveSection = (section: string) => {
    return pathname === `/${section}` || pathname.startsWith(`/${section}/`);
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.app}>
        <main>
          <nav className={styles["top-side"]}>
            <button type="button" className={styles["login-button"]} onClick={buttonOnClick}>
              <Image
                src={githubLogoImage}
                alt="github logo"
                width="16"
                height="16"
                priority={true}
              />
              {isLoggedIn ? user!.displayName : "GitHub ile giriş yap"}
            </button>
          </nav>
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
                  Geliştirici ekosistemini her geçen gün daha da iyileştirmek
                  amacıyla yola çıkarak bir{" "}
                  <Link href="/about/">
                    meta-topluluk
                  </Link>{" "}
                  oluşturduk. 2015&apos;ten bu yana topluluklar, etkinlikler,
                  projeler ve içerikler oluşturmak, topluluğu motive etmek,
                  farkındalık aşılamak ve engelleri ortadan kaldırmak için
                  çalışıyoruz.
                </p>
              </div>
            </div>
          </section>

          <section className={styles["content-section"]}>
            <div className={styles.inner}>
              <div className={styles["tab-bar"]}>
                <ul>
                  <li className={pathname === "/" ? styles.active : ""}>
                    <Link href="/" aria-current="page">
                      <svg
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>Girişimler
                    </Link>
                  </li>
                  <li
                    className={isActiveSection("about") ? styles.active : ""}
                  >
                    <Link href="/about/">
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
                      </svg>10forward ve Meta-topluluk Nedir?
                    </Link>
                  </li>
                  <li
                    className={isActiveSection("guide") ? styles.active : ""}
                  >
                    <Link href="/guide/">
                      <svg
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                          clipRule="evenodd"
                        />
                      </svg>Rehber
                    </Link>
                  </li>
                  <li
                    className={isActiveSection("agreements")
                      ? styles.active
                      : ""}
                  >
                    <Link href="/agreements/">
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
                      </svg>Topluluk Sözleşmeleri
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
