import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CAROUSEL_ITEMS } from "../../const";
import { Col, Row } from "antd";
import styles from "./MainCarousel.module.css";

export default function MainCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      {CAROUSEL_ITEMS.map((item) => (
        <div className={styles.carousel}>
          <div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
          <div className={styles.div}>
            <img alt={item.title} src={item.image} className={styles.image} />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
