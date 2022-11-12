import React from "react";
import Flex from "../components/layout/Flex";
import "../styles/header.css";
import logo from "../assets/icons/logo.svg";

const Header = () => {
  return (
    <Flex className="header-padding ">
      <div className="header-content ">
        <div className="" style={{ flexBasis: "20%" }}>
          <img src={logo} alt="" />
        </div>
        <Flex className=" grow" jc="center" ai="center" spacing={48}>
          <p className="regular">Home</p>
          <p className="regular">Place to stay</p>
          <p className="regular">NFTs</p>
          <p className="regular">Community</p>
        </Flex>
        <Flex
          className=""
          jc="flex-end"
          ai="center"
          style={{ flexBasis: "20%" }}
        >
          <button
            className="bg-primary"
            style={{
              padding: "15px 26px",
              borderRadius: "10px",
              border: "none",
            }}
          >
            <p className="white regular">Connect wallet</p>
          </button>
        </Flex>
      </div>
      <div className="mobile-header ">
        <p style={{ flexBasis: "90%" }} className="">
          logo
        </p>
        <div className="ham">
          <p>ham</p>
        </div>
      </div>
    </Flex>
  );
};

export default Header;
