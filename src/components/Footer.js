import React from "react";
import "../styles/footer.css";
import Grid, { GridItem } from "../components/layout/Grid";
import Flex from "../components/layout/Flex";
import logo from "../assets/icons/logo-alt.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import copyright from "../assets/icons/copyright.svg";

const Links = (props) => {
  return (
    <Flex stack={true}>
      <Flex stack={true} className="">
        <Flex stack={true} spacing={23} className="">
          <p className="bold white footer-title">{props.title}</p>
          <p className="regular white smallest">{props.subtitleOne}</p>
        </Flex>
        <p className="regular white smallest">{props.subtitleTwo}</p>
        <p className="regular white smallest">{props.subtitleThree}</p>
        <p className="regular white smallest">{props.subtitleFour}</p>
      </Flex>
    </Flex>
  );
};

const Footer = () => {
  return (
    <div className="footer-position footer-padding  bg-gray">
      <Grid span={12}>
        <GridItem span={3} md={12} className="">
          <Flex stack={true} className="" ai="flex-start">
            <div className="logo-grid">
              <div className="logo-grid-content">
                <img src={logo} alt="" className="logo" />
                <Flex spacing={32}>
                  <Flex spacing={36.5}>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                  </Flex>
                  <img src={twitter} alt="" />
                </Flex>
              </div>
              <Flex spacing={9.5}>
                <img src={copyright} alt="" />
                <p className="white regular">2022 Metabnb</p>
              </Flex>
            </div>
          </Flex>
        </GridItem>
        <GridItem span={3} md={12} className="">
          <div className="footer-links">
            <Links
              title={"Community"}
              subtitleOne={"NFT"}
              subtitleTwo={"Tokens"}
              subtitleThree={"Landlords"}
              subtitleFour={"Discord"}
            />
          </div>
        </GridItem>
        <GridItem span={3} md={12} className="">
          <div className="footer-links">
            <Links
              title={"Places"}
              subtitleOne={"Castle"}
              subtitleTwo={"Farms"}
              subtitleThree={"Beach"}
              subtitleFour={"Learn more"}
            />
          </div>
        </GridItem>
        <GridItem span={3} md={12} className="">
          <div className="footer-links">
            <Links
              title={"About us"}
              subtitleOne={"Road map"}
              subtitleTwo={"Creators "}
              subtitleThree={"Career"}
              subtitleFour={"Contact us"}
            />
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Footer;
