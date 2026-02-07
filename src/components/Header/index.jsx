import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Drawer } from "antd";
import { menuItems } from "./menuItems";

import { MenuOutlined } from "@ant-design/icons";

import styles from "./Header.module.css";
import "./HeaderCommon.css";
import { useSelector } from "react-redux";

const Header = () => {
  const [current, setCurrent] = useState("home");
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const customTest = useSelector((state) => state.customTest);

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
    </>
  );
};

export default Header;
