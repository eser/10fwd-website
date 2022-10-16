import { defineDocumentType, makeSource } from "contentlayer/source-files";

const StaticPage = defineDocumentType(() => ({
  name: "StaticPage",
  filePathPattern: `static/**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the static page",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the static page",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (staticPage) => {
        // const [, filename, _fileext] = /static\/(.*)\.(\w+)$/.exec(
          const [, filename] = /static\/(.*)$/.exec(
          staticPage._raw.flattenedPath,
        );

        return `/${filename}`;
      },
    },
  },
}));

const source = makeSource({
  contentDirPath: "content",
  documentTypes: [StaticPage],
});

export { source, source as default, StaticPage };
