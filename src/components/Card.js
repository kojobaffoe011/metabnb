import React from "react";
import star from "../assets/icons/star.svg";
import heart from "../assets/icons/heart.svg";
import Flex from "../components/layout/Flex";
import Grid, { GridItem } from "../components/layout/Grid";

const Card = (props) => {
  return (
    <Flex
      className="card-padding"
      spacing={16}
      stack={true}
      style={{ border: "1px solid #D7D7D7", borderRadius: "15px" }}
    >
      <div
        className=""
        style={{
          borderRadius: "15px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={props.image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
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

export default Card;
