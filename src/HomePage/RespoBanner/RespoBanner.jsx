import React from "react";
import styles from "./RespoBanner.module.css";
import GlobalButton from "../../GlobalComponet/GlobalButton/GlobalButton";
function RespoBanner(props) {
  return (
    <div className={styles.RespoBanner}>
      <h1>Engagement made easy</h1>
      <p>
        Start creating meaningful messages to get in touch with your community
      </p>
      <GlobalButton
        text={"Add to chrome"}
        link={
          "https://chrome.google.com/webstore/detail/respoai/bedkffdgfejokiohjhkehankmamachma"
        }
      />
    </div>
  );
}

export default RespoBanner;
