import React from "react";
import PriceTags from "../TabsComponent/PriceTags/PriceTags";
import styles from "./PricePage.module.css";
import Reviews from "../Reviews/Reviews";
import PageEnding from "../HomePage/PageEnding/PageEnding";
function PricePage(props) {
  return (
    <div className={styles.PricePage}>
      <div className={styles.PriceTags}>
        <PriceTags />
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <PageEnding />
      </div>
    </div>
  );
}
// .HomePageReviews {
// display: flex;
// justify-content: center;
// }
export default PricePage;
