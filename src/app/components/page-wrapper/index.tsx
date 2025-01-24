import { ReactNode } from "react";
import styles from "./styles.module.css";

type PageWrapperProps = {
    children: ReactNode;
    header: string;
  };
  

export const  PageWrapper: React.FC<PageWrapperProps> = ({ children, header }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.overlay}></div>
        <h1 className={styles.title}>{header}</h1>
      </header>
      <main>{children}</main>
    </>
  );
};

export default PageWrapper;
