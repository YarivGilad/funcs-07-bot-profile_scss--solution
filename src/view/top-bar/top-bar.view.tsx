import { ReactNode } from "react";
import styles from "./top-bar.module.scss";

interface TopBarProps {
  children?: ReactNode;
}

export function TopBar({ children }: TopBarProps) {
  return (
    <div className={styles.container}>
      {children}
      <img className={styles.logo} src="./icons/logo.svg" alt="logo" />
    </div>
  );
} 