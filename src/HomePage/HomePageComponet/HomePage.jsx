import React from "react";
import styles from "./HomePage.module.css";
import GlobalButton from "../../GlobalComponet/GlobalButton/GlobalButton";
import TabsComponent from "../../TabsComponent/TabsComponent";
import Platform from "../Platform/Platform";
import Container2 from "../Container2/Container2";
import { containerData1, containerData2 } from "./Container2Data";
import ReposUnderReferencesX from "../ReposUnderReferences/ReposUnderReferencesX";
import RespoBanner from "../RespoBanner/RespoBanner";
import Reviews from "../../Reviews/Reviews";
import PageEnding from "../PageEnding/PageEnding";
import Footer from "../../Footer/Footer";

function HomePage(props) {
  return (
    <div className={styles.HomePage}>
      <div className={styles.HomePageTitleContainer}>
        <div className={styles.HomePageTitleHeaderContainer}>
          <header className={styles.HomePageTitleHeader}>
            Engagement made easy
          </header>
        </div>
        <div className={styles.HomePageTitleParagraphContainer}>
          <p>
            Welcome to Respo AI - the tool that empowers you to hack your
            <span>way to grow on social media with the click of a button.</span>
          </p>
        </div>
        {/* <div className={styles.HomePageTitleContainerButton}>
          <GlobalButton text={"Check out our pricing"} link={"/price"} />
        </div> */}
      </div>
      <div className={styles.HomePage_Section_tabs}>
        <div className={styles.HomePage_Section}>
          <header className={styles.HomePage_Section_header}>
            Innovate your interaction
          </header>
          <div className={styles.HomePage_Section_Paragraph}>
            <p>
              With Respo AI, you can say goodbye to generic messages and hello
              to more meaningful interactions. Our platform uses AI language
              tools to help you produce attention-grabbing messages that are
              intriguing and efficient, making it the ultimate growth-hacking
              tool for social media.
            </p>
            <div className={styles.HomePage_Section_button}></div>
          </div>
        </div>
        <div className={styles.HomePage_Tabs}>
          <TabsComponent />
        </div>
      </div>
      <div className={styles.HomePage_VideoSection_video}>
        <div className={styles.HomePage_VideoSection}>
          <p className={styles.HomePage_VideoSection_Paragraph}>
            <span className={styles.HomePage_VideoSection_span1}>
              Grow your audience with AI generated
            </span>

            <span className={styles.HomePage_VideoSection_span2}>
              post - comments - retweets -replies
            </span>
            <span className={styles.HomePage_VideoSection_span3}>
              In a fraction of the time with a fraction of the effort at no
              charge!
            </span>
          </p>
        </div>
        <div className={styles.HomePage_All_Video}>
          <Platform />
        </div>
        <div className={styles.HomePage_container2}>
          <Container2
            text={containerData2.text}
            header={containerData2.header}
            img={containerData2.img}
          />
        </div>
        <div className={styles.ReposUnderReferencesX}>
          <ReposUnderReferencesX />
        </div>
        <div className={styles.HomePage_All_Video}>
          <Container2
            text={containerData1.text}
            header={containerData1.header}
            img={containerData1.img}
          />
        </div>
        <div className={styles.HomePage_banner}>
          <RespoBanner />
        </div>
        <div className={styles.HomePageReviews}>
          <Reviews />
        </div>
        <div className={styles.PageEnding}>
          <PageEnding />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
