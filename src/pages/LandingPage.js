import React from "react";
import Flex from "../components/layout/Flex";
import Grid, { GridItem } from "../components/layout/Grid";
import "../styles/landingpage.css";
import mbtoken from "../assets/icons/mbtoken.svg";
import metamask from "../assets/icons/metamask.svg";
import opensea from "../assets/icons/opensea.svg";
import image1 from "../assets/images/image1.svg";
import star from "../assets/icons/star.svg";
import heart from "../assets/icons/heart.svg";
import metaimg from "../assets/images/metaimg.svg";

const Home = () => {
  return (
    <Grid span={12}>
      <GridItem span={7} className="">
        <Flex stack={true} spacing={48}>
          <Flex stack={true} spacing={30}>
            <div></div>
            <p className="regular medium">
              Rent a <span className="bold primary">Place</span> away from{" "}
              <br />
              <span className="bold primary"> Home</span> in the{" "}
              <span className="bold primary">Metaverse</span>
            </p>
          </Flex>

          <p className="regular small">
            we provide you access to luxury and affordable houses <br />
            in the metaverse, get a chance to turn your <br />
            imagination to reality at your comfort zone
          </p>
          <Flex>
            <input
              style={{
                padding: "19px 0px 20px 15px",
                width: "50%",
                border: "1px solid #A3A3A3",
                borderRadius: "8px 0px 0px 8px",
              }}
              type="text"
              placeholder="Search for location"
            />
            <button
              style={{
                padding: "17px 87px",
                border: "none",
                borderRadius: "0px 8px 8px 0px",
              }}
              className="bg-primary"
            >
              <p className="white regular">Search</p>
            </button>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem span={5} className="">
        <Flex className="" jc="flex-end">
          <img src={metaimg} />
        </Flex>
      </GridItem>
    </Grid>
  );
};

const Sponsors = () => {
  return (
    <Flex className=" sponsor-padding bg-primary" spacing={264}>
      <img src={mbtoken} alt="" />
      <img src={metamask} alt="" />
      <img src={opensea} alt="" />
    </Flex>
  );
};

const Card = (props) => {
  return (
    <Flex
      className="bordered card-padding"
      spacing={16}
      stack={true}
      style={{ border: "1px solid #D7D7D7", borderRadius: "15px" }}
    >
      <div
        className="bordered"
        style={{
          borderRadius: "15px",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          height: "10vh",
        }}
      >
        {/* <img
          src={props.image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        /> */}
        <img
          src={heart}
          alt=""
          style={{ position: "absolute", top: "10px", right: "10px" }}
        />
      </div>
      <Flex spacing={10} stack={true}>
        <Flex style={{ width: "100%" }}>
          <p className=" regular card-text" style={{ flexBasis: "40%" }}>
            Desert king
          </p>
          <Flex className=" grow" jc="flex-end">
            <p className="regular bold card-text">1MBT per night</p>
          </Flex>
        </Flex>
        <Flex style={{ width: "100%" }}>
          <p className=" regular card-text" style={{ flexBasis: "40%" }}>
            2345km away
          </p>
          <Flex className=" grow" jc="flex-end">
            <p className="regular  card-text">available for 2weeks stay</p>
          </Flex>
        </Flex>
        <div style={{ width: "92px card-text" }}>
          <img src={star} alt="" />
        </div>
      </Flex>
    </Flex>
  );
};
const Inspiration = () => {
  return (
    <Flex className=" inspiration-padding" stack={true} spacing={43}>
      <Flex jc="center" className="">
        <p className=" bold medium-alt">Inspiration for your next adventure</p>
      </Flex>
      <Grid span={12}>
        <GridItem span={3} className="">
          <Card image={image1} />
        </GridItem>
        <GridItem span={3} className="">
          <Card />
        </GridItem>
        <GridItem span={3} className="">
          <Card />
        </GridItem>
        <GridItem span={3} className="">
          <Card />
        </GridItem>
      </Grid>
    </Flex>
  );
};

const LandingPage = () => {
  return (
    <div>
      <div className="landing-padding ">
        <Home />
      </div>
      <Sponsors />
      <Inspiration />
    </div>
  );
};

export default LandingPage;
