import React from "react";
import Flex from "../components/layout/Flex";
import "../styles/placetostay.css";
import Grid, { GridItem } from "../components/layout/Grid";
import Card from "../components/Card";
import filter from "../assets/icons/filter.svg";
import image1 from "../assets/images/place-to-stay/image1.svg";
import image2 from "../assets/images/place-to-stay/image2.svg";
import image3 from "../assets/images/place-to-stay/image3.svg";
import image4 from "../assets/images/place-to-stay/image4.svg";
import image5 from "../assets/images/place-to-stay/image5.svg";
import image6 from "../assets/images/place-to-stay/image6.svg";
import image7 from "../assets/images/place-to-stay/image7.svg";
import image8 from "../assets/images/place-to-stay/image8.svg";
import image9 from "../assets/images/place-to-stay/image9.svg";
import image10 from "../assets/images/place-to-stay/image10.svg";
import image11 from "../assets/images/place-to-stay/image11.svg";
import image12 from "../assets/images/place-to-stay/image12.svg";
import image13 from "../assets/images/place-to-stay/image13.svg";
import image14 from "../assets/images/place-to-stay/image14.svg";
import image15 from "../assets/images/place-to-stay/image15.svg";
import image16 from "../assets/images/place-to-stay/image16.svg";

const NavBar = () => {
  return (
    <Flex spacing={65}>
      <Flex className="" spacing={48} ai="center">
        <p className="regular">Resturant</p>
        <p className="regular">Cottage</p>
        <p className="regular">Castle</p>
        <p className="regular">fantast city</p>
        <p className="regular">beach</p>
        <p className="regular">Carbins</p>
        <p className="regular">Off-grid</p>
        <p className="regular">Farm</p>
      </Flex>
      <div className="">
        <button
          style={{
            padding: "14px 13px",
            background: `linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)`,
            border: "1px solid #B4B4B4",
            borderRadius: "8px",
          }}
        >
          <Flex spacing={42} ai="center">
            <p className="regular">Location</p>
            <Flex jc="flex-end" className="">
              <img src={filter} alt="" />
            </Flex>
          </Flex>
        </button>
      </div>
    </Flex>
  );
};

const Cards = () => {
  return (
    <Grid span={12}>
      <GridItem span={3}>
        <Card image={image1} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image2} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image3} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image4} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image5} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image6} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image7} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image8} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image9} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image10} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image11} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image12} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image13} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image14} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image15} />
      </GridItem>
      <GridItem span={3}>
        <Card image={image16} />
      </GridItem>
    </Grid>
  );
};

const PlaceToStay = () => {
  return (
    <Flex stack={true} spacing={75} className=" stay-padding">
      <NavBar />
      <Cards />
    </Flex>
  );
};

export default PlaceToStay;
