import Image from "next/image";
import { Conditional } from "@webclient/shared/react/conditional";
import styles from "./index.module.css";

interface InitiativeCardProps {
  tags: string[];
  imageUri?: string;
  imageAltText: string;
  title: string;
  description: string;
  link: string;
}

const InitiativeCard = (props: InitiativeCardProps) => {
  return (
    <a className={styles.card} href={props.link}>
      <div className={styles.inner}>
        <div className={styles.tags}>
          {props.tags.join(", ")}
        </div>
        <Conditional
          if={props.imageUri !== undefined}
          then={
            <div className={styles.image}>
              <Image
                src={props.imageUri!}
                alt={props.imageAltText}
                width={376}
                height={160}
              />
            </div>
          }
          otherwise={
            <div className={styles["image-placeholder"]}>
              {props.imageAltText}
            </div>
          }
        />
        <h5 className={styles.title}>
          {props.title}
        </h5>
        <p className={styles.description}>
          {props.description}
        </p>
        <div className={`${styles.links} buttons`}>
          <div className="button">
            Ziyaret et
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export { InitiativeCard, InitiativeCard as default };
