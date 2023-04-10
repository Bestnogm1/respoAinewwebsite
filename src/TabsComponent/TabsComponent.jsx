import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./TabsComponent.module.css";
import linkkedinwebimg from "../img/linkedinwebimgborder.png";
import twiiterwebimg from "../img/twiiterwebimg.png";
import redditlinkweb from "../img/redditlinkweb.png";
export default function TabsComponent() {
  return (
    <Tabs className={styles.TabsComponent}>
      <TabList>
        <Tab>Twitter</Tab>
        <Tab>Reddit</Tab>
        <Tab>LinkedIn</Tab>
      </TabList>

      <TabPanel>
        <img
          className={styles.TabsComponentImg}
          src={twiiterwebimg}
          alt="twiiterwebimg"
        />
      </TabPanel>
      <TabPanel>
        <img
          className={styles.TabsComponentImg}
          src={redditlinkweb}
          alt="redditlinkweb"
        />
      </TabPanel>
      <TabPanel>
        <img
          className={styles.TabsComponentImg}
          src={linkkedinwebimg}
          alt="linkkedinwebimg"
        />
      </TabPanel>
    </Tabs>
  );
}
