import styles from "./footer.module.css";
import LogoImage from "./logo.svg";
import Image from "next/image";
import Link from "next/link";
import CcByNcSaImage from "./cc-by-nc-sa.svg";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-inner"]}>
        <Link href="/">
          <Image
            src={LogoImage}
            alt="10forward logo"
            className={styles.logo}
            priority={true}
          />
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
          <Link href="/" rel="noopener noreferrer">
            girişimler
          </Link>
          <div className={styles.vr} />
          <Link href="/about/" rel="noopener noreferrer">
            10forward nedir?
          </Link>
          <div className={styles.vr} />
          <Link href="/meta-community/" rel="noopener noreferrer">
            meta-topluluk esaslarımız
          </Link>
          <div className={styles.vr} />
          <Link href="/agreements/" rel="noopener noreferrer">
            topluluk sözleşmeleri
          </Link>
          <div className={styles.vr} />
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
