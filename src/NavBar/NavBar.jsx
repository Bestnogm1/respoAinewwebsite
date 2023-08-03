import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import respoImgBlack from "../img/respoAinewimg.png";
import GlobalButton from "../GlobalComponet/GlobalButton/GlobalButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
function NavBar(props) {
  const [screnSize, setScreenSize] = useState(false);

  // RxHamburgerMenu;
  return (
    <div className={styles.NavBar}>
      <Link to="" className={styles.NavBarLeftA}>
        <div className={styles.NavBarLeft}>
          <img
            src={respoImgBlack}
            className={styles.NavBarImg}
            alt="respoImgBlack"
          />
          <h1>RespoAI</h1>
        </div>
      </Link>
      <div className={styles.NavBarRight}>
        <ul className={styles.NavBarRightUl}>
          <Link to="">
            <li className={styles.NavBarButton6}>Features</li>
          </Link>
          {/* <Link to="price">
            <li className={styles.NavBarButton6}> Pricing</li>
          </Link> */}
          <li className={styles.NavBarGlobalButton}>
            <GlobalButton
              text={"Try for free"}
              link={
                "https://chrome.google.com/webstore/detail/respoai/bedkffdgfejokiohjhkehankmamachma"
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
