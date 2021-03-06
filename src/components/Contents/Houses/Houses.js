import React from "react";
import "./Houses.css";
import CoverSlideImage from "../../UI/CoverSlideImage/CoverSlideImage";
import Button from "../../UI/Button/Button";
import { useInView } from "react-intersection-observer";
import TextAnimation from "../../UI/TextAnimation/TextAnimation";

import villa1 from "./images/villa-1.jpg";
import villa2 from "./images/villa-2.jpg";
import villa3 from "./images/villa-3.jpg";
import villa4 from "./images/villa-4.jpg";
import villa5 from "./images/villa-5.jpg";
import villa6 from "./images/villa-6.jpg";

export default function Houses() {
  const images = [villa1, villa2, villa3, villa4, villa5, villa6];
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className='houses'>
      <div ref={ref}>
        <h2>
          <TextAnimation content='Find Your Houses' inView={inView} />
        </h2>
        <p>
          <TextAnimation
            content='お気に入りの宿泊先を見つけよう'
            inView={inView}
          />
        </p>
      </div>
      <div className='housesInner'>
        {images.map((img, index) => (
          <div className='housesItem' key={index}>
            <CoverSlideImage image={img} type='div' />
            <p className='housesTitle'>House {index + 1}</p>
          </div>
        ))}
      </div>
      <div className='more'>
        <Button content='もっと詳しく' />
      </div>
    </div>
  );
}
