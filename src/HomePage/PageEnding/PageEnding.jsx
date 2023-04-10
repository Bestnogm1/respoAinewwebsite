import React from "react";
import styles from "./PageEnding.module.css";
import GlobalButton from "../../GlobalComponet/GlobalButton/GlobalButton";
function PageEnding(props) {
  return (
    <div className={styles.PageEnding}>
      <div className={styles.PageEndingHeader}>
        <header>Add the RespoAI extension today</header>
      </div>
      <div className={styles.PageEndingParaGraph}>
        <p>
          Say goodbye to generic messages and hello to more <br /> meaningful
          interactions.
        </p>
      </div>
      <div className={styles.PageEndingButton}>
        <GlobalButton
          text={"Add to chrome"}
          link={
            "https://chrome.google.com/webstore/detail/respoai/bedkffdgfejokiohjhkehankmamachma"
          }
        />
      </div>
    </div>
  );
}

export default PageEnding;
