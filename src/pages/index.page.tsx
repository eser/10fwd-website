import Link from "next/link";
import Image from "next/future/image";
import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import styles from "./index.module.css";
import logoImage from "../shared/layout/logo.svg";
import roundOfPeopleImage from "./round-of-people.svg";

const Home: CustomPage = function Home() {
  return (
    <>
      <NextSeo />

      <section className={styles["hero-section"]}>
        <div className={styles["inner"]}>
          <div className={styles["left-side"]}>
            <Image
              src={logoImage}
              alt="Open Source"
              width="498"
              height="328"
              priority={true}
            />
            <p>
              2015&apos;ten bu yana topluluklar oluşturup, geliştirici ekosistemine
              katkıda bulunmak, topluluğu motive etmek, farkındalık aşılamak ve
              engelleri ortadan kaldırmak için çalışıyoruz.
            </p>
          </div>
          <div className={styles["right-side"]}>
            <Image
              src={roundOfPeopleImage}
              alt="Open Source"
              width="498"
              height="328"
              priority={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export { Home, Home as default };
