import React, { FC, useState } from "react";
import styles from "./Switch.module.css";

export const Switch: FC = () => {
  const [state, setState] = useState(false);
  console.log("🚀 ~ file: Switch.component.tsx:10 ~ state:", state);
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={() => setState((state) => !state)} />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  );
};
