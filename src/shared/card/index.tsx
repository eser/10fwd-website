interface CardProps {
  tags: string[];
  title: string;
  description: string;
  link: string;
}

const Card = (props: CardProps) => {
  return (
    <a className="hover:no-underline" href={props.link}>
      <div className="w-full h-full flex flex-col bg-white rounded-l-lg rounded-br-lg border border-slate-200 shadow-md dark:bg-slate-800 dark:border-slate-700">
        <div className="flex-none self-end px-2 py-1 max-w-fit text-xs font-medium text-slate-800 bg-slate-200 rounded-bl-md dark:bg-slate-700 dark:text-slate-200">
          {props.tags.join(", ")}
        </div>
        {/* <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}
        <h5 className="flex-none mx-5 mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {props.title}
        </h5>
        <p className="grow mx-5 font-normal text-slate-700 dark:text-slate-400">
          {props.description}
        </p>
        <div className="flex-none mx-5 my-5">
          <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ziyaret et
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              >
              </path>
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
};

export { Card, Card as default };
