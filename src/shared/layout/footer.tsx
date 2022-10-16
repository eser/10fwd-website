import styles from "./footer.module.css";
import LogoImage from "./logo.svg";
import Image from "next/future/image";
import Link from "next/link";
import CcByNcSaImage from "./cc-by-nc-sa.svg";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-inner"]}>
        <Link href="/">
          <a>
            <Image
              src={LogoImage}
              alt="10forward logo"
              className={styles.logo}
            />
          </a>
        </Link>
        <p>
          Site içerisinde gördüğünüz içerikler&nbsp;
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            Creative Commons Attribution-NonCommercial-ShareAlike 4.0
            International License
          </a>
          &nbsp;ile lisanslanmıştır.
        </p>

        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          <Image
            alt="Creative Commons Attribution-NonCommercial-ShareAlike 4.0"
            src={CcByNcSaImage}
          />
        </a>

        <div className={styles.nav}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/acikkaynak/acikkaynak/blob/development/CODE_OF_CONDUCT.md"
          >
            topluluk sözleşmesi
          </a>
          <div className={styles.vr}></div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/10fwd"
          >
            github
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer, Footer as default };
