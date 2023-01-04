import { type GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import { GuideCard } from "@webclient/shared/guide-card/index";
import { allStaticPages, StaticPage } from "@contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import styles from "./index.module.css";

const getStaticPaths = () => {
  const paths = allStaticPages.map((staticPage) => staticPage.url);

  return {
    paths: paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps = ({ params }) => {
  const slug_ = params?.slug ?? "/";
  const slug = Array.isArray(slug_) ? slug_.join("/") : slug_;

  const staticPage = allStaticPages.find((staticPage) =>
    staticPage._raw.flattenedPath === `static/${slug}`
  );

  return {
    props: {
      staticPage,
    },
  };
};

interface StaticPageComponentProps {
  staticPage: StaticPage;
}

const mdxComponents = {
  GuideCard,
};

const StaticPageComponent: CustomPage<StaticPageComponentProps> = (
  props: StaticPageComponentProps,
) => {
  const date = new Date(props.staticPage.date).toLocaleString("tr-TR");
  const MDXContent = useMDXComponent(props.staticPage.body.code);

  return (
    <>
      <NextSeo title={props.staticPage.title} />

      <article className={styles.article}>
        <div className={styles.page}>
          <h1>{props.staticPage.title}</h1>
          <div className={styles["content-meta"]}>
            Okuma Süresi: {props.staticPage.readingTime.minutes} dakika
            <br />
            Yayınlanma Tarihi: <time dateTime={date}>{date}</time>
          </div>
          <div className={styles.content}>
            <MDXContent components={mdxComponents} />
          </div>
        </div>
      </article>
    </>
  );
};

export {
  getStaticPaths,
  getStaticProps,
  StaticPageComponent,
  StaticPageComponent as default,
  type StaticPageComponentProps,
};
