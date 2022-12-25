import { type GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import { allStaticPages, StaticPage } from "@contentlayer/generated";
import styles from "./index.module.css";

const getStaticPaths = async () => {
  const paths = allStaticPages.map((staticPage) => staticPage.url);

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const staticPage = allStaticPages.find((staticPage) =>
    staticPage._raw.flattenedPath === `static/${params?.slug}`
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

const StaticPageComponent: CustomPage<StaticPageComponentProps> = (
  props: StaticPageComponentProps,
) => {
  const date = new Date(props.staticPage.date).toLocaleString("tr-TR");

  return (
    <>
      <NextSeo title={props.staticPage.title} />

      <article className={styles.article}>
        <div className={styles.page}>
          <h1>{props.staticPage.title}</h1>
          {
            /* <time dateTime={date}>
            {date}
          </time> */
          }
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: props.staticPage.body.html }}
          />
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
