import React from "react";
import styles from "./Footer.module.css";
import respoAinewimg from "../img/respoAinewimg.png";
import GlobalButton from "../GlobalComponet/GlobalButton/GlobalButton";
import { Link } from "react-router-dom";
function Footer(props) {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <div className={styles.FooterMain}>
      <div className={styles.Footer}>
        <div className={styles.Footer1}>
          <ul className={styles.Footer1Ul}>
            <li>
              <img src={respoAinewimg} alt="respoAinewimg" />
              <p>RespoAI</p>
            </li>
          </ul>
        </div>
        <div className={styles.Footer2}>
          <ul className={styles.Footer2Ul}>
            <li className={styles.FooterTitle}> Product</li>
            <li>Features</li>
            {/* <Link to="/price" onClick={handleClick}>
              <li>Pricing</li>
            </Link> */}
          </ul>
        </div>
        <div className={styles.Footer3}>
          <ul className={styles.Footer3Ul}>
            <li className={styles.FooterTitle}>Company</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className={styles.Footer4}>
          <ul className={styles.Footer41Ul}>
            <li className={styles.FooterTitle}>Follow us:</li>
            <a href="https://twitter.com/RespoAI">
              <li>Twitter</li>
            </a>
          </ul>
        </div>
      </div>
      <div className={styles.footerButtonContainer}>
        <a href="https://chrome.google.com/webstore/detail/respoai/bedkffdgfejokiohjhkehankmamachma">
          <button className={styles.footerButton}>Add to chrome now</button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
