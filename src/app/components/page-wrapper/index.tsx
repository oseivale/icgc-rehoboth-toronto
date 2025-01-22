import { ReactNode } from "react";
import styles from "./styles.module.css";

type PageWrapperProps = {
    children: ReactNode;
  };
  

export const  PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.overlay}></div>
        <h1 className={styles.title}>ABOUT US</h1>
      </header>
      <main>{children}</main>
    </>
  );
};

export default PageWrapper;
