import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Drawer, Modal } from "antd";
import { menuItems } from "./menuItems";

import { MenuOutlined } from "@ant-design/icons";

import styles from "./Header.module.css";
import "./HeaderCommon.css";
import { useSelector } from "react-redux";
import RegAuthSwitcher from "../RegAuthSwitcher";

const Header = () => {
  const [current, setCurrent] = useState("home");
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(e);
    setCurrent(e.key);
    navigate(e.key);
    // setDrawerVisible(false);
    closeDrawer();
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <div className={styles["menu-desktop"]}>
        <Link to={"/"}>
          <img alt="logo" src="./images/examPic.png" className={styles.logo} />
        </Link>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={menuItems}
          className={styles.navbar}
        />
        <button onClick={showModal}>Login</button>
      </div>
      <div className={styles["menu-mobile"]}>
        <MenuOutlined onClick={showDrawer} />
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={closeDrawer}
          open={isDrawerVisible}
        >
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            items={menuItems}
            mode="vertical"
          />
        </Drawer>
        <button>Close menu</button>
      </div>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <RegAuthSwitcher />
      </Modal>
    </>
  );
};

export default Header;
