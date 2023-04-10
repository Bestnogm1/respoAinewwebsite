import React from "react";
import styles from "./Container2.module.css";
import respoidkImg from "../../img/respoidkImg.png";
import GlobalButton from "../../GlobalComponet/GlobalButton/GlobalButton";
function Container2({ text, header, img, button }) {
  return (
    <div className={styles.Container2}>
      <div className={styles.Container2_header_img}>
        <div className={styles.Container2_header__img_container}>
          <div className={styles.Container2_header}>
            <header>{header}</header>
          </div>
          <div className={styles.Container2_paragraph}>
            <p>{text}</p>
          </div>
        </div>
        <div className={styles.Container2_img_container}>
          <img src={img} alt="respoidkImg" />
        </div>
      </div>
    </div>
  );
}

export default Container2;
