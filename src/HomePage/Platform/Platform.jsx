import React from "react";
import { useState } from "react";
import { platformData } from "./platformData";
import styles from "./Platform.module.css";
function Platform(props) {
  const [platFormState] = useState(platformData);
  return (
    <div className={styles.platFormState}>
      {platFormState.map((plat) => (
        <div className={styles.plat}>
          <img src={plat.img} alt="" />
          <h3>{plat.name}</h3>
          <h3>{plat.description}</h3>
        </div>
      ))}
    </div>
  );
}

export default Platform;
