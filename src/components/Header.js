import React, { useCallback, useState } from "react";
import Flex from "../components/layout/Flex";
import "../styles/header.css";
import logo from "../assets/icons/logo.svg";
import CWModal from "./modal/CWModal";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => setModalIsOpen(true), []);

  const handleCloseModal = useCallback(() => setModalIsOpen(false), []);

  return (
    <Flex className="header-padding ">
      <CWModal isOpen={modalIsOpen} handleCancel={handleCloseModal} />
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
            onClick={handleOpenModal}
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
