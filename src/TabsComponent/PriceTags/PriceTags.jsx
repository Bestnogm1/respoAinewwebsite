import React from "react";
import { useState } from "react";
import { respoPriceData } from "./PricetagsData";
import styles from "./PriceTags.module.css";
import CheckSvg from "./CheckSvg";
function PriceTags(props) {
  const [priceDatas] = useState(respoPriceData);
  return (
    <div className={styles.RespoPriceTags}>
      <div className={styles.RespoPriceCategoryContainer}>
        {priceDatas.map((price) => (
          <>
            <div className={styles.RespoPriceCategoryItems}>
              <div className={styles.RespoPriceCategory}>
                {price.tear === "Basic" ? (
                  <>
                    <div className={styles.BestValueBannerContanier}>
                      <div className={styles.BestValueBanner}>
                        <h3>Best value</h3>
                      </div>
                    </div>
                  </>
                ) : null}
                <div className={styles.RespoPriceCategoryMain}>
                  <div className={styles.RespoPriceCategoryTag}>
                    <h1>{price.tear}</h1>
                  </div>
                  <div className={styles.RespoPriceCategoryCategory}>
                    <p>{price.description}</p>
                  </div>
                  <div className={styles.RespoPriceCategoryPrice}>
                    <div className={styles.RespoPriceCategoryPriceMoney}>
                      <h1 className={styles.moneySign}>
                        $ <span>USD</span>
                      </h1>
                      <h3 className={styles.pricetag}> {price.price}</h3>
                    </div>
                    <div className={styles.pricetagMonth}> /month</div>
                  </div>
                  <div className={styles.RespoPriceCategoryCategoryButton}>
                    <a
                      href={price.link}
                      onClick={() => window.open(`${price.link}`, "_parent")}
                    >
                      <button className={styles.buttonPrice}>
                        {price.buttonTag}
                      </button>
                    </a>
                    <div className={styles.RespoPriceCategoryCheckSvg}>
                      <div className={styles.RespoPriceCategoryCheck}>
                        {price.plans.map((plan) => (
                          <>
                            <p className={styles.checkadnCommnets}>
                              <CheckSvg />
                              {plan}
                            </p>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default PriceTags;
