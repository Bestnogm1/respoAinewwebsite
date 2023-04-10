import React from "react";
import styles from "./GlobalButton.module.css";
function GlobalButton({ text, link }) {
  return (
    <a href={link}>
      <button className={styles.GlobalButton}>{text}</button>
    </a>
  );
}

export default GlobalButton;
