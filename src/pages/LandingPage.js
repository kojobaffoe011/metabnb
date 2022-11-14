import React from "react";
import Flex from "../components/layout/Flex";
import Grid, { GridItem } from "../components/layout/Grid";
import "../styles/landingpage.css";
import mbtoken from "../assets/icons/mbtoken.svg";
import metamask from "../assets/icons/metamask.svg";
import opensea from "../assets/icons/opensea.svg";
import image1 from "../assets/images/image1.svg";
import image2 from "../assets/images/image2.svg";
import image3 from "../assets/images/image3.svg";
import image4 from "../assets/images/image4.svg";
import image5 from "../assets/images/image5.svg";
import image6 from "../assets/images/image6.svg";
import image7 from "../assets/images/image7.svg";
import image8 from "../assets/images/image8.svg";
import nft from "../assets/images/nft.svg";
import metaimg from "../assets/images/metaimg.svg";
import Card from "../components/Card";

const Home = () => {
  return (
    <Grid span={12}>
      <GridItem span={7} md={12} className="">
        <div className="home-content" style={{ paddingTop: "30px" }}>
          <p className="regular medium">
            Rent a <span className="bold primary">Place</span> away from <br />
            <span className="bold primary"> Home</span> in the{" "}
            <span className="bold primary">Metaverse</span>
          </p>
          <div className="hide">
            <p className="regular small ">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
          </div>
          <div className="show">
            <p className="regular small ">
              we provide you access to luxury and affordable houses <br />
              in the metaverse, get a chance to turn your <br />
              imagination to reality at your comfort zone
            </p>
          </div>

          <Flex>
            <input
              className="home-input"
              type="text"
              placeholder="Search for location"
            />
            <button className="bg-primary home-button">
              <p className="white regular button-text">Search</p>
            </button>
          </Flex>
        </div>
      </GridItem>
      <GridItem span={5} md={12} className="">
        <Flex className="" jc="flex-end">
          <img src={metaimg} style={{ width: "100%" }} />
        </Flex>
      </GridItem>
    </Grid>
  );
};

const Sponsors = () => {
  return (
    <div className="sponsor sponsor-padding bg-primary">
      <img src={mbtoken} alt="" />
      <img src={metamask} alt="" />
      <img src={opensea} alt="" />
    </div>
  );
};

const SponsorMobile = () => {
  return (
    <div className="slider bg-primary ">
      <div className="slide-track">
        <div className="slide">
          <img src={mbtoken} height="20px" />
        </div>
        <div className="slide">
          <img src={metamask} height="20px" />
        </div>
        <div className="slide">
          <img src={opensea} height="20px" />
        </div>
        <div className="slide">
          <img src={mbtoken} height="20px" />
        </div>
        <div className="slide">
          <img src={metamask} height="20px" />
        </div>
        <div className="slide">
          <img src={opensea} height="20px" />
        </div>
      </div>
    </div>
  );
};

const Inspiration = () => {
  return (
    <div className=" inspiration-padding inspiration-content">
      <div jc="center" className="inspiration-heading">
        <p className=" bold medium-alt">Inspiration for your next adventure</p>
      </div>
      <Grid span={12}>
        <GridItem span={3} md={12} className="">
          <Card image={image1} />
        </GridItem>
        <GridItem span={3} md={12} className="">
          <Card image={image2} />
        </GridItem>
        <GridItem span={3} md={12} className="">
          <Card image={image3} />
        </GridItem>
        <GridItem span={3} md={12} className="">
          <Card image={image4} />
        </GridItem>
        <GridItem span={3} md={12} className="">
          <Card image={image5} />
        </GridItem>
        <GridItem span={3} md={12} className="">
          <Card image={image6} />
        </GridItem>
        <GridItem span={3} md={12} className="">
          <Card image={image7} />
        </GridItem>
        <GridItem span={3} md={12} className="">
          <Card image={image8} />
        </GridItem>
      </Grid>
    </div>
  );
};

const NFTs = () => {
  return (
    <div className=" NFT-padding bg-primary">
      <Grid span={12}>
        <GridItem span={4} md={12} className=" nft-description">
          <div className="nft-content">
            <div className="nft-content-alt">
              <p className="white bold nft-title">Metabnb NFTs</p>
              <p className="white regular nft-text">
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </p>
            </div>
            <div>
              <button
                className="more-button"
                // style={{
                //   padding: "14px 33px",
                //   borderRadius: "8px",
                //   border: "none",
                // }}
              >
                <p className="regular primary">Learn more</p>
              </button>
            </div>
          </div>
        </GridItem>
        <GridItem span={8} md={12} className="">
          <Flex jc="flex-end">
            <img src={nft} alt="" style={{ width: "100%" }} />
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div>
      <div className="landing-padding ">
        <Home />
      </div>
      <Sponsors />
      <SponsorMobile />
      <Inspiration />
      <NFTs />
    </div>
  );
};

export default LandingPage;
