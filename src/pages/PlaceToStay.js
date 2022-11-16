import React, { useEffect, useState } from "react";
import Flex from "../components/layout/Flex";
import "../styles/placetostay.css";
import Grid, { GridItem } from "../components/layout/Grid";
import Card from "../components/Card";
import filter from "../assets/icons/filter.svg";
import image1 from "../assets/images/place-to-stay/image1.png";
import image2 from "../assets/images/place-to-stay/image2.png";
import image3 from "../assets/images/place-to-stay/image3.png";
import image4 from "../assets/images/place-to-stay/image4.png";
import image5 from "../assets/images/place-to-stay/image5.png";
import image6 from "../assets/images/place-to-stay/image6.png";
import image7 from "../assets/images/place-to-stay/image7.png";
import image8 from "../assets/images/place-to-stay/image8.png";
import image9 from "../assets/images/place-to-stay/image9.png";
import image10 from "../assets/images/place-to-stay/image10.png";
import image11 from "../assets/images/place-to-stay/image11.png";
import image12 from "../assets/images/place-to-stay/image12.png";
import image13 from "../assets/images/place-to-stay/image13.png";
import image14 from "../assets/images/place-to-stay/image14.png";
import image15 from "../assets/images/place-to-stay/image15.png";
import image16 from "../assets/images/place-to-stay/image16.png";
import Icon from "../components/icon/Icon";

const NavBar = () => {
  return (
    <div className=" navbar">
      <Flex className="" spacing={48} ai="center">
        <p className="regular">Restaurant</p>
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
    </div>
  );
};

const NavMobile = () => {
  return (
    <div className="mobile-navbar ">
      <div className="">
        <DropDown />
      </div>
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
    </div>
  );
};

const DropdownItem = (props) => {
  return (
    <li className="dropdownItem">
      <a>
        <p className="regular small">{props.text}</p>
      </a>
    </li>
  );
};

const DropDown = (props) => {
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    return setOpen(!open);
  };

  return (
    <div>
      <div className="menu container">
        <div className="menu-trigger">
          <button
            style={{
              padding: "14px 13px",
              background: `linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)`,
              border: "1px solid #B4B4B4",
              borderRadius: "8px",
            }}
            onClick={handleDropdown}
          >
            <Flex spacing={10} ai="center">
              <p className="regular">Restaurant</p>
              <Flex jc="flex-end" className="">
                <Icon
                  icon={["fas", "fa-chevron-down"]}
                  style={{ color: "#959DA6" }}
                />
              </Flex>
            </Flex>
          </button>
        </div>
        {open && (
          <div className="dropdown-menu">
            <ul>
              <DropdownItem text={"Cottage"} />
              <DropdownItem text={"Castle"} />
              <DropdownItem text={"fantast city"} />
              <DropdownItem text={"beach"} />
              <DropdownItem text={"Carbins"} />
              <DropdownItem text={"Off-grid"} />
              <DropdownItem text={"Farm"} />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <Grid span={12}>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image1} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image2} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image3} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image4} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image5} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image6} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image7} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image8} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image9} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image10} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image11} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image12} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image13} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image14} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image15} />
      </GridItem>
      <GridItem span={3} md={6} sm={12}>
        <Card image={image16} />
      </GridItem>
    </Grid>
  );
};

const PlaceToStay = (props) => {
  return (
    <div className=" stay-padding stay-contepng">
      <NavBar />
      <NavMobile />
      <Cards />
    </div>
  );
};

export default PlaceToStay;
