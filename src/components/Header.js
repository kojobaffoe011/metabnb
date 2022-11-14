import React, { useCallback, useState } from "react";
import Flex from "../components/layout/Flex";
import "../styles/header.css";
import logo from "../assets/icons/logo.svg";
import logo1 from "../assets/icons/mobile-logo.svg";
import CWModal from "./modal/CWModal";
import SideMenuModal from "./modal/SideMenuModal";
import { Link } from "react-router-dom";
import Icon from "./icon/Icon";

const SideMenu = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => setModalIsOpen(true), []);

  const handleCloseModal = useCallback(() => setModalIsOpen(false), []);

  const closeIcon = (
    <Icon
      icon={["fas", "xmark"]}
      className="primary"
      onClick={() => setOpenSideMenu(!openSideMenu)}
      size="xl"
    />
  );
  const hamIcon = (
    <Icon
      icon={["fas", "fa-bars"]}
      className="primary"
      onClick={() => setOpenSideMenu(!openSideMenu)}
      size="xl"
    />
  );

  return (
    <div className="mobile-header">
      <CWModal isOpen={modalIsOpen} handleCancel={handleCloseModal} />
      <Flex ai="center">
        <Link to="/">
          <img src={logo} height="20px" />{" "}
        </Link>
      </Flex>
      <Flex className="ham" ai="">
        {openSideMenu ? closeIcon : hamIcon}
      </Flex>
      {openSideMenu && (
        <div className="mobile-nav " style={{ padding: "30px 0px " }}>
          <Flex
            stack
            className=" grow"
            jc="center"
            ai="flex-start"
            spacing={20}
            style={{ paddingLeft: "30px" }}
          >
            <Link to="/" onClick={() => setOpenSideMenu(!openSideMenu)}>
              <p className="regular white">Home</p>
            </Link>
            <Link
              to="/place-to-stay"
              onClick={() => setOpenSideMenu(!openSideMenu)}
            >
              <p className="regular white">Place to stay</p>
            </Link>

            <p className="regular white">NFTs</p>
            <p className="regular white">Community</p>
          </Flex>
          <Flex
            className=""
            jc="flex-end"
            ai="center"
            style={{ flexBasis: "20%", paddingLeft: "30px" }}
          >
            <button
              className="bg-white"
              onClick={handleOpenModal}
              style={{
                padding: "15px 26px",
                borderRadius: "10px",
                border: "none",
              }}
            >
              <p className="primary regular ">Connect wallet</p>
            </button>
          </Flex>
        </div>
      )}
    </div>
  );
};

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
          <Link to="/">
            <p className="regular">Home</p>
          </Link>
          <Link to="/place-to-stay">
            <p className="regular">Place to stay</p>
          </Link>

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
      <SideMenu />
    </Flex>
  );
};

export default Header;
