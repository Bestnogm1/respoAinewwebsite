import React, { useState } from "react";
import { ReposUnderReferencesData } from "./ReposUnderReferencesXData";
import styles from "./ReposUnderReferencesX.module.css";
function ReposUnderReferencesX(props) {
  const [references] = useState(ReposUnderReferencesData);
  return (
    <div className={styles.ReposUnderReferencesX}>
      {references.map((reference) => (
        <div className={styles.reference}>
          <div className={styles.referenceImgContent}>
            <img src={reference.img} alt="N/A" />
          </div>
          <div className={styles.referenceH1}>
            <h1>{reference.description}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReposUnderReferencesX;
