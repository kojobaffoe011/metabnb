import React from "react";
import Icon from "../icon/Icon";
import Flex from "../layout/Flex";
import { Modal } from "./modal";
import "../../styles/header.css";
import metamask from "../../assets/icons/metamask-alt.svg";
import walletconnect from "../../assets/icons/walletconnect.svg";

const WalletOption = (props) => {
  return (
    <div className="walletoption" ai="center" spacing={16}>
      <img src={props.image} style={{ flexBasis: "10%" }} />
      <Flex className=" grow" jc="space-between">
        <p className="bold wallet-text">{props.text}</p>
        <Icon icon={["fas", "fa-chevron-right"]} color="#959DA6" className="" />
      </Flex>
    </div>
  );
};

const CWModal = (props) => {
  return (
    <Modal {...props}>
      <Flex stack={true}>
        <Flex
          jc="space-between"
          ai="center"
          className=""
          style={{ padding: "24px 32px" }}
        >
          <p className="bold">Connect Wallet</p>
          <Icon
            icon={["fas", "xmark"]}
            onClick={props.handleCancel}
            size="lg"
          />
        </Flex>
        <Flex
          stack
          style={{ padding: "32px", borderTop: "1px solid #CFD8DC" }}
          spacing={16}
        >
          <p className="regular">Choose your preferred wallet:</p>
          <WalletOption image={metamask} text={"Metamask"} />
          <WalletOption image={walletconnect} text={"WalletConnect"} />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default CWModal;
